const menuBtn = document.querySelector(".menu-btn");
const dropdown = document.querySelector(".dropdown");

if (menuBtn && dropdown) {
  menuBtn.setAttribute("type", "button");
  menuBtn.setAttribute("aria-expanded", "false");

  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.tagName === "A") {
      dropdown.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("click", () => {
    dropdown.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dropdown.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
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
