const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
const filterButtons = document.querySelectorAll("[data-filter]");
const cases = document.querySelectorAll(".case, .mini");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxCap = lightbox.querySelector("figcaption");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

links.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

const onScroll = () => {
  nav.classList.toggle("is-stuck", window.scrollY > 8);
};

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const sections = ["work", "stack"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const spy = () => {
  const mark = window.scrollY + 120;
  let current = sections[0];
  sections.forEach((section) => {
    if (section.offsetTop <= mark) current = section;
  });
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.toggle("is-current", link.getAttribute("href") === `#${current.id}`);
  });
};

spy();
window.addEventListener("scroll", spy, { passive: true });

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const on = item === button;
      item.classList.toggle("is-on", on);
      item.setAttribute("aria-pressed", String(on));
    });
    cases.forEach((item) => {
      const show = filter === "all" || item.dataset.kind === filter;
      item.classList.toggle("is-hidden", !show);
    });
    document.querySelectorAll("#labs, #more").forEach((section) => {
      const visible = [...section.querySelectorAll(".case, .mini")].some(
        (item) => !item.classList.contains("is-hidden")
      );
      section.classList.toggle("is-dim", !visible);
    });
  });
});

document.querySelectorAll(".thumbs button, .phone, .shot, .mini-shot").forEach((button) => {
  if (!button.getAttribute("aria-label")) {
    button.setAttribute("aria-label", button.dataset.caption || button.querySelector("img")?.alt || "Open screenshot");
  }
});

document.querySelectorAll("[data-gallery]").forEach((gallery) => {
  const thumbs = gallery.querySelectorAll(".thumbs button");
  const shot = gallery.querySelector(".shot img");
  const path = gallery.querySelector("[data-path]");
  if (!thumbs.length || !shot) return;

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      thumbs.forEach((item) => item.classList.remove("is-on"));
      thumb.classList.add("is-on");
      shot.src = thumb.dataset.src;
      shot.alt = thumb.dataset.alt;
      if (path) {
        const file = thumb.dataset.src.split("/").pop();
        path.textContent = file;
      }
    });
  });
});

let galleryItems = [];
let galleryIndex = 0;
let lastFocus = null;

const renderLightbox = () => {
  const item = galleryItems[galleryIndex];
  if (!item) return;
  lightboxImg.src = item.src;
  lightboxImg.alt = item.alt;
  lightboxCap.textContent = item.caption;
  const single = galleryItems.length < 2;
  lightbox.querySelector(".lb-prev").hidden = single;
  lightbox.querySelector(".lb-next").hidden = single;
};

const collectGallery = (origin) => {
  const group = origin.closest("[data-gallery]");
  if (!group) {
    return [{
      src: origin.dataset.src || origin.querySelector("img")?.src,
      alt: origin.dataset.alt || origin.querySelector("img")?.alt || "",
      caption: origin.dataset.caption || ""
    }];
  }

  const buttons = group.querySelectorAll(".thumbs button, .phone");
  if (!buttons.length) {
    const img = group.querySelector(".shot img");
    return [{
      src: origin.dataset.src || img.src,
      alt: origin.dataset.alt || img.alt,
      caption: origin.dataset.caption || group.querySelector("[data-path]")?.textContent || ""
    }];
  }

  return [...buttons].map((button) => ({
    src: button.dataset.src,
    alt: button.dataset.alt,
    caption: button.dataset.caption
  }));
};

const openLightbox = (origin) => {
  galleryItems = collectGallery(origin);
  const src = origin.dataset.src || origin.querySelector("img")?.getAttribute("src");
  galleryIndex = Math.max(0, galleryItems.findIndex((item) => src && item.src.endsWith(src.split("/").pop())));
  renderLightbox();
  lastFocus = origin;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lightbox.querySelector(".lb-close").focus();
};

const closeLightbox = () => {
  lightbox.hidden = true;
  document.body.style.overflow = "";
  lightboxImg.removeAttribute("src");
  if (lastFocus) lastFocus.focus();
};

const step = (delta) => {
  galleryIndex = (galleryIndex + delta + galleryItems.length) % galleryItems.length;
  renderLightbox();
};

document.addEventListener("click", (event) => {
  const opener = event.target.closest("[data-open]");
  if (!opener) return;
  openLightbox(opener);
});

lightbox.querySelector(".lb-close").addEventListener("click", closeLightbox);
lightbox.querySelector(".lb-prev").addEventListener("click", () => step(-1));
lightbox.querySelector(".lb-next").addEventListener("click", () => step(1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (lightbox.hidden) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowRight") step(1);
  if (event.key === "ArrowLeft") step(-1);
});

if (!reduced) {
  const revealables = document.querySelectorAll(".case, .mini, .stack-grid article");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { opacity: 0.01, transform: "translateY(16px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          { duration: 560, easing: "cubic-bezier(.2,.7,.2,1)", fill: "both" }
        );
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealables.forEach((node) => observer.observe(node));
}
