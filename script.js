let lightSwitch = document.querySelector(".full");
console.log(lightSwitch);

lightSwitch.addEventListener("click", (e) => {
  console.log(lightSwitch.id);
  if (lightSwitch.id == "on") e.target.setAttribute("id", "off");
  else e.target.setAttribute("id", "on");
});
