
let heartRate = 80;
const heartRateDisplay = document.getElementById('heartRateDisplay');
const alertLight = document.getElementById('alertLight');

setInterval(() => {
  heartRate = Math.floor(Math.random() * 35) + 75;
  heartRateDisplay.textContent = `${heartRate} BPM`;

  if (heartRate > 100) {
    alertLight.style.background = 'red';
  } else {
    alertLight.style.background = '#ff4d4d';
  }
}, 3000);

