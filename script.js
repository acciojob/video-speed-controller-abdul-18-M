
const video = document.querySelector(".player__video");
const toggle = document.querySelector(".toggle");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");

const skipButtons = document.querySelectorAll("[data-skip]");
const sliders = document.querySelectorAll(".player__slider");


function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}


function updateButton() {
  toggle.textContent = video.paused ? "►" : "❚ ❚";
}

toggle.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

function updateProgress() {
  const percentage = (video.currentTime / video.duration) * 100;

  progressBar.style.width = `${percentage}%`;
}

video.addEventListener("timeupdate", updateProgress);


function skip() {
  video.currentTime += Number(this.dataset.skip);
}

skipButtons.forEach((button) => {
  button.addEventListener("click", skip);
});

// Volume and playback speed
function handleUpdate() {
  video[this.name] = Number(this.value);
}

sliders.forEach((slider) => {
  slider.addEventListener("input", handleUpdate);
});

// Click progress bar to change video position
function scrub(event) {
  const percentage = event.offsetX / progress.offsetWidth;

  video.currentTime = percentage * video.duration;
}

progress.addEventListener("click", scrub);

