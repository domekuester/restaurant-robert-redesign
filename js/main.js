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
  /* Der Rest der Seite wird ausgeblendet, solange das Overlay offen ist:
     sonst tabbt man nach dem letzten Menüpunkt in die verdeckte Seite
     weiter und Screenreader lesen sie mit. `inert` erledigt beides in
     einem; Browser ohne Unterstützung verhalten sich wie bisher. */
  var hintergrund = [
    document.getElementById("inhalt"),
    document.querySelector(".fuss"),
    aktionsleiste
  ].filter(Boolean);

  function menueSetzen(offen) {
    navKnopf.setAttribute("aria-expanded", offen ? "true" : "false");
    navOverlay.hidden = !offen;
    document.body.style.overflow = offen ? "hidden" : "";
    hintergrund.forEach(function (el) { el.inert = offen; });
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
  var tabLeiste = document.querySelector(".karte-tabs");
  var kartePunkt = document.querySelector(".karte-punkt");

  /* Der klebende Rand der Leiste – derselbe Wert wie im CSS (--kopf-hoehe).
     Wird ausgelesen statt hartkodiert, damit beide nie auseinanderlaufen. */
  function klebeRand() {
    var wurzel = getComputedStyle(document.documentElement);
    var wert = wurzel.getPropertyValue("--kopf-hoehe").trim();
    /* Der Kopf ist komplett in rem gebaut und wächst mit der Schriftgröße
       des Browsers mit – die Umrechnung muss das auch tun, sonst stimmt
       sie nur bei den voreingestellten 16 px. */
    var faktor = wert.slice(-3) === "rem" ? parseFloat(wurzel.fontSize) || 16 : 1;
    return parseFloat(wert) * faktor || 58;
  }

  /* Der Punkt wandert zur Mitte der aktiven Kategorie. */
  function punktSetzen(tab) {
    if (!kartePunkt) return;
    kartePunkt.style.setProperty("--punkt-x", (tab.offsetLeft + tab.offsetWidth / 2) + "px");
    kartePunkt.classList.add("gesetzt");
  }

  /* Gewählte Kategorie in die Mitte der Leiste rücken: zeigt die Nachbarn
     und damit ganz nebenbei, dass die Leiste schiebbar ist.
     Bewusst nur die Leiste selbst und nur waagerecht – `scrollIntoView`
     hat hier früher zusätzlich die ganze Seite senkrecht verschoben und
     damit die Korrektur unten wieder zunichtegemacht. */
  function tabZentrieren(tab) {
    if (!tabLeiste) return;
    tabLeiste.scrollTo({
      left: tab.offsetLeft - (tabLeiste.clientWidth - tab.offsetWidth) / 2,
      behavior: reduzierteBewegung ? "auto" : "smooth"
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      /* Klebte die Leiste beim Klick schon oben? Dann muss sie auch nach
         dem Wechsel dort stehen. Sonst passiert Folgendes: Man steht tief
         in einer langen Kategorie, wählt eine kurze – die Seite wird
         schlagartig kürzer, der Browser klemmt die Scrollposition und man
         landet unterhalb der Speisekarte, statt die neue Liste zu sehen. */
      var klebt = tabLeiste && tabLeiste.getBoundingClientRect().top <= klebeRand() + 1;

      tabs.forEach(function (t) { t.setAttribute("aria-expanded", "false"); });
      tab.setAttribute("aria-expanded", "true");
      panels.forEach(function (p) {
        p.classList.toggle("ist-aktiv", p.id === "panel-" + tab.dataset.panel);
      });
      punktSetzen(tab);
      tabZentrieren(tab);

      if (klebt) {
        /* Erst nach dem Umschalten messen: der Browser hat die Höhe der
           Seite da bereits neu berechnet und die Scrollposition geklemmt. */
        var ziel = window.scrollY + tabLeiste.getBoundingClientRect().top - klebeRand();
        window.scrollTo({ top: ziel, behavior: reduzierteBewegung ? "auto" : "smooth" });
      }
    });
  });

  /* Wisch-Andeutung der Tab-Leiste: Rand-Verläufe nur dort zeigen,
     wo tatsächlich noch Kategorien verborgen sind. */
  if (tabLeiste) {
    var tabRaender = function () {
      var maxScroll = tabLeiste.scrollWidth - tabLeiste.clientWidth;
      tabLeiste.classList.toggle("am-anfang", tabLeiste.scrollLeft < 8);
      tabLeiste.classList.toggle("am-ende", tabLeiste.scrollLeft > maxScroll - 8);
    };
    tabLeiste.addEventListener("scroll", tabRaender, { passive: true });
    window.addEventListener("resize", tabRaender);
    tabRaender();

    /* Startposition des Punktes – und nach jedem Umbruch neu, weil die
       Kategorien dann an anderer Stelle stehen (EN/FR sind länger). */
    var aktiverTab = document.querySelector('.karte-tabs button[aria-expanded="true"]') || tabs[0];
    if (aktiverTab) {
      punktSetzen(aktiverTab);
      window.addEventListener("resize", function () {
        var jetzt = document.querySelector('.karte-tabs button[aria-expanded="true"]');
        if (jetzt) punktSetzen(jetzt);
      });
      /* Schriften kommen nachträglich: dann verschieben sich die Knöpfe. */
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function () {
          var jetzt = document.querySelector('.karte-tabs button[aria-expanded="true"]');
          if (jetzt) punktSetzen(jetzt);
        });
      }
    }
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

  /* ---------- Kopfleiste über den dunklen Momenten ---------- */
  /* Zwischenbild, Geschichte und Footer sind die dunklen Momente des
     Hauses. Lag die helle Leiste darüber, war sie ein fremder Balken.
     Ein 1 px hoher Messstreifen genau an der Unterkante der Leiste sagt,
     welcher Abschnitt gerade dort liegt. */
  var dunkleBloecke = document.querySelectorAll(".zwischenbild, .geschichte, .fuss");
  if (dunkleBloecke.length && "IntersectionObserver" in window) {
    var imDunkeln = new Set();
    var kopfRand = Math.round(klebeRand());
    var dunkelBeobachter = new IntersectionObserver(function (eintraege) {
      eintraege.forEach(function (e) {
        if (e.isIntersecting) imDunkeln.add(e.target); else imDunkeln.delete(e.target);
      });
      kopf.classList.toggle("ueber-dunkel", imDunkeln.size > 0);
    }, { rootMargin: -kopfRand + "px 0px -100% 0px" });
    dunkleBloecke.forEach(function (el) { dunkelBeobachter.observe(el); });
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

    /* größte verfügbare Stufe aus dem srcset einer Kachel */
    function grossesBild(index) {
      var quelle = zoomKnoepfe[(index + zoomKnoepfe.length) % zoomKnoepfe.length].querySelector("img");
      var srcset = quelle.getAttribute("srcset").split(",");
      return { src: srcset[srcset.length - 1].trim().split(" ")[0], alt: quelle.alt };
    }

    function zeigeBild(index) {
      aktuell = (index + zoomKnoepfe.length) % zoomKnoepfe.length;
      var bild = grossesBild(aktuell);
      lightboxBild.src = bild.src;
      lightboxBild.alt = bild.alt;
      /* Nachbarbilder still vorladen: der nächste Pfeilklick zeigt dann
         sofort ein Bild statt einer kurzen Lücke. */
      [aktuell + 1, aktuell - 1].forEach(function (i) {
        new Image().src = grossesBild(i).src;
      });
    }

    /* Weicher Wechsel: ausblenden, tauschen, wieder einblenden. Bei
       reduzierter Bewegung bleibt es beim direkten Umschalten. */
    function wechsleBild(index) {
      if (reduzierteBewegung) { zeigeBild(index); return; }
      lightboxBild.classList.add("wechselt");
      setTimeout(function () {
        zeigeBild(index);
        lightboxBild.classList.remove("wechselt");
      }, 180);
    }

    zoomKnoepfe.forEach(function (knopf, i) {
      knopf.addEventListener("click", function () {
        zeigeBild(i);
        lightbox.showModal();
      });
    });

    lightbox.querySelector(".lightbox-schliessen").addEventListener("click", function () { lightbox.close(); });
    lightbox.querySelector(".lightbox-zurueck").addEventListener("click", function () { wechsleBild(aktuell - 1); });
    lightbox.querySelector(".lightbox-vor").addEventListener("click", function () { wechsleBild(aktuell + 1); });
    lightbox.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") wechsleBild(aktuell - 1);
      if (e.key === "ArrowRight") wechsleBild(aktuell + 1);
    });
    /* Klick auf den dunklen Grund schließt */
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) lightbox.close();
    });
  }
})();
