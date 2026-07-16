/* ROBERT. – schlankes Verhalten, keine Abhängigkeiten.
   Alles hier ist Komfort: Die Seite funktioniert auch ohne JS. */

(function () {
  "use strict";

  var kopf = document.getElementById("kopf");
  var navKnopf = document.querySelector(".nav-knopf");
  var navOverlay = document.getElementById("nav-overlay");
  var aktionsleiste = document.getElementById("aktionsleiste");
  var reduzierteBewegung = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Kopfleiste: Zustand beim Scrollen ---------- */
  function kopfZustand() {
    kopf.classList.toggle("gescrollt", window.scrollY > 40);
  }
  window.addEventListener("scroll", kopfZustand, { passive: true });
  kopfZustand();

  /* ---------- Mobiles Menü ---------- */
  function menueSetzen(offen) {
    navKnopf.setAttribute("aria-expanded", offen ? "true" : "false");
    navOverlay.hidden = !offen;
    document.body.style.overflow = offen ? "hidden" : "";
  }
  menueSetzen(false);

  navKnopf.addEventListener("click", function () {
    menueSetzen(navKnopf.getAttribute("aria-expanded") !== "true");
  });
  navOverlay.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () { menueSetzen(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navKnopf.getAttribute("aria-expanded") === "true") {
      menueSetzen(false);
      navKnopf.focus();
    }
  });

  /* ---------- Scrollspy: der Punkt wandert durch die Navigation ---------- */
  var navLinks = document.querySelectorAll(".kopf-nav a[href^='#']");
  var abschnitte = [];
  navLinks.forEach(function (link) {
    var ziel = document.querySelector(link.getAttribute("href"));
    if (ziel) abschnitte.push({ link: link, ziel: ziel });
  });

  /* Scroll-basiert statt IntersectionObserver: bleibt auch korrekt,
     wenn nachladende Bilder die Abschnittspositionen verschieben. */
  var spyGeplant = false;
  function spyAktualisieren() {
    spyGeplant = false;
    var messlinie = window.scrollY + window.innerHeight * 0.42;
    var aktiv = null;
    abschnitte.forEach(function (a) {
      var oben = a.ziel.offsetTop;
      if (oben <= messlinie && messlinie < oben + a.ziel.offsetHeight) aktiv = a;
    });
    abschnitte.forEach(function (a) {
      a.link.classList.toggle("ist-aktiv", a === aktiv);
    });
  }
  if (abschnitte.length) {
    window.addEventListener("scroll", function () {
      if (!spyGeplant) { spyGeplant = true; requestAnimationFrame(spyAktualisieren); }
    }, { passive: true });
    window.addEventListener("load", spyAktualisieren);
    spyAktualisieren();
  }

  /* ---------- Speisekarte: Kategorien umschalten ---------- */
  var tabs = document.querySelectorAll(".karte-tabs button");
  var panels = document.querySelectorAll(".karte-panel");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.setAttribute("aria-expanded", "false"); });
      tab.setAttribute("aria-expanded", "true");
      panels.forEach(function (p) {
        p.classList.toggle("ist-aktiv", p.id === "panel-" + tab.dataset.panel);
      });
      /* Gewählte Kategorie in die Mitte rücken: zeigt die Nachbarn
         und damit ganz nebenbei, dass die Leiste schiebbar ist. */
      tab.scrollIntoView({
        behavior: reduzierteBewegung ? "auto" : "smooth",
        inline: "center",
        block: "nearest"
      });
    });
  });

  /* Wisch-Andeutung der Tab-Leiste: Rand-Verläufe nur dort zeigen,
     wo tatsächlich noch Kategorien verborgen sind. */
  var tabLeiste = document.querySelector(".karte-tabs");
  if (tabLeiste) {
    var tabRaender = function () {
      var maxScroll = tabLeiste.scrollWidth - tabLeiste.clientWidth;
      tabLeiste.classList.toggle("am-anfang", tabLeiste.scrollLeft < 8);
      tabLeiste.classList.toggle("am-ende", tabLeiste.scrollLeft > maxScroll - 8);
    };
    tabLeiste.addEventListener("scroll", tabRaender, { passive: true });
    window.addEventListener("resize", tabRaender);
    tabRaender();
  }

  /* ---------- Mobile Aktionsleiste ---------- */
  /* Erscheint nach dem Hero, verschwindet bei Besuch & Footer
     (dort stehen Telefon und Karte ohnehin). */
  if (aktionsleiste && "IntersectionObserver" in window) {
    var hero = document.querySelector(".hero");
    var besuch = document.getElementById("besuch");
    var fuss = document.querySelector(".fuss");
    var heroSichtbar = true, endeSichtbar = false;

    aktionsleiste.hidden = false;

    /* Sicherheitsnetz: nahe am Seitenende immer verstecken – Observer
       feuern auf iOS (dynamische Browser-UI, schnelles Scrollen) nicht
       zuverlässig, und die Leiste darf den Footer nie verdecken. */
    function naheEnde() {
      return window.scrollY + window.innerHeight >
        document.body.scrollHeight - fuss.offsetHeight - 80;
    }
    function leisteAktualisieren() {
      aktionsleiste.classList.toggle("sichtbar",
        !heroSichtbar && !endeSichtbar && !naheEnde());
    }
    window.addEventListener("scroll", leisteAktualisieren, { passive: true });
    new IntersectionObserver(function (e) {
      heroSichtbar = e[0].isIntersecting;
      leisteAktualisieren();
    }, { threshold: 0.15 }).observe(hero);

    var untenBeobachter = new IntersectionObserver(function (eintraege) {
      endeSichtbar = eintraege.some(function (x) { return x.isIntersecting; }) ||
        (besuch.getBoundingClientRect().top < window.innerHeight * 0.5 &&
         besuch.getBoundingClientRect().bottom > 0);
      leisteAktualisieren();
    }, { threshold: 0.05 });
    untenBeobachter.observe(besuch);
    untenBeobachter.observe(fuss);
  }

  /* ---------- Sanftes Erscheinen beim Scrollen ---------- */
  var reveals = document.querySelectorAll("[data-reveal]");
  function allesZeigen() {
    reveals.forEach(function (el) { el.classList.add("sichtbar"); });
  }
  if (!reduzierteBewegung && "IntersectionObserver" in window && reveals.length) {
    var revealBeobachter = new IntersectionObserver(function (eintraege) {
      eintraege.forEach(function (eintrag) {
        if (eintrag.isIntersecting) {
          eintrag.target.classList.add("sichtbar");
          revealBeobachter.unobserve(eintrag.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { revealBeobachter.observe(el); });
    /* Sicherheitsnetz: Inhalte dürfen nie hinter der Animation gefangen
       bleiben (Druck, Headless-Rendering, Observer-Ausfall). */
    window.addEventListener("beforeprint", allesZeigen);
    setTimeout(allesZeigen, 4000);
  } else {
    allesZeigen();
  }

  /* ---------- Galerie-Lightbox ---------- */
  var lightbox = document.getElementById("lightbox");
  if (lightbox && typeof lightbox.showModal === "function") {
    var zoomKnoepfe = Array.prototype.slice.call(document.querySelectorAll(".galerie-zoom"));
    var lightboxBild = lightbox.querySelector("img");
    var aktuell = 0;

    function zeigeBild(index) {
      aktuell = (index + zoomKnoepfe.length) % zoomKnoepfe.length;
      var quelle = zoomKnoepfe[aktuell].querySelector("img");
      /* größte verfügbare Stufe aus dem srcset nehmen */
      var srcset = quelle.getAttribute("srcset").split(",");
      var groesste = srcset[srcset.length - 1].trim().split(" ")[0];
      lightboxBild.src = groesste;
      lightboxBild.alt = quelle.alt;
    }

    zoomKnoepfe.forEach(function (knopf, i) {
      knopf.addEventListener("click", function () {
        zeigeBild(i);
        lightbox.showModal();
      });
    });

    lightbox.querySelector(".lightbox-schliessen").addEventListener("click", function () { lightbox.close(); });
    lightbox.querySelector(".lightbox-zurueck").addEventListener("click", function () { zeigeBild(aktuell - 1); });
    lightbox.querySelector(".lightbox-vor").addEventListener("click", function () { zeigeBild(aktuell + 1); });
    lightbox.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") zeigeBild(aktuell - 1);
      if (e.key === "ArrowRight") zeigeBild(aktuell + 1);
    });
    /* Klick auf den dunklen Grund schließt */
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) lightbox.close();
    });
  }
})();
