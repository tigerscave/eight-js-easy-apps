const stopSwitch = document.getElementById("stop-switch");
stopSwitch.addEventListener("touchstart", () => {
  stopSwitch.style.backgroundColor = 'red';
});
stopSwitch.addEventListener("mouseup", () => {
  stopSwitch.style.backgroundColor = 'lightpink';
});

