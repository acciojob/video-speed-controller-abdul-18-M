const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


const video = document.querySelector(".flex");
const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");

function changeSpeed(e) {
    const y = e.pageY - speed.offsetTop;
    const percent = y / speed.offsetHeight;

    const min = 0.4;
    const max = 4;

    const playbackRate = percent * (max - min) + min;

    speedBar.style.height = `${percent * 100}%`;
    speedBar.textContent = `${playbackRate.toFixed(2)}×`;

    video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove", changeSpeed);
