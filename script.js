let lightSwitch = document.getElementById("light-switch");

lightSwitch.addEventListener("click", (e) => {
  e.target.parentElement.classList.toggle("dark");
});
