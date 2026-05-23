const menuBtn = document.querySelector(".menu-btn");
const dropdown = document.querySelector(".dropdown");

if (menuBtn && dropdown) {
  menuBtn.addEventListener("click", () => dropdown.classList.toggle("open"));
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !menuBtn.contains(e.target)) {
      dropdown.classList.remove("open");
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
