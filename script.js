document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const dropdown = document.querySelector(".dropdown");

  if (menuBtn && dropdown) {
    menuBtn.setAttribute("type", "button");
    menuBtn.setAttribute("aria-expanded", "false");

    const closeMenu = () => {
      dropdown.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuBtn.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
      dropdown.classList.add("open");
      document.body.classList.add("menu-open");
      menuBtn.setAttribute("aria-expanded", "true");
    };

    menuBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.contains("open") ? closeMenu() : openMenu();
    });

    dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      if (e.target.closest("a")) closeMenu();
    });

    document.addEventListener("click", closeMenu);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const audioBtn = document.querySelector("#audioToggle");
  const audio = document.querySelector("#siteAudio");
  if (audioBtn && audio) {
    audioBtn.addEventListener("click", async () => {
      try {
        if (audio.paused) {
          await audio.play();
          audioBtn.textContent = "Pause Music";
        } else {
          audio.pause();
          audioBtn.textContent = "Play Music";
        }
      } catch {
        audioBtn.textContent = "Tap Again To Play";
      }
    });
  }
});
