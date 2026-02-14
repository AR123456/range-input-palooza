const input = document.querySelector("input");
const globe = document.querySelector(".globe");
const label = document.querySelector("label");
input.addEventListener("input", (e) => {
  setValue(e.target.value);
});

function setValue(val) {
  label.value = val;
  globe.setAttribute(
    "style",
    `
    --wave: ${val}%
  `
  );
}
