const range = document.getElementById("range");

range.addEventListener("input", (e) => {
  // + makes this a number
  const value = +e.target.value;
  const label = e.target.nextElementSibling;
  //   getComputedStyle gets the width from the CSS
  //   target here is the input
  const range_width = getComputedStyle(e.target).getPropertyValue("width");
  const label_width = getComputedStyle(label).getPropertyValue("width");
  ////  this code moves the box along with the slider circle /////
  //   remove the px
  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);
  //   get min and max from HTML
  const max = +e.target.max;
  const min = +e.target.min;
  // get value dependent on were in range
  //   const left = value * (num_width / max) - num_label_width / 2;
  // implementing the scale function
  const left =
    value * (num_width / max) -
    num_label_width / 2 +
    scale(value, min, max, 10, -10);
  //   set left value
  label.style.left = `${left}px`;

  label.innerHTML = value;
});
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// You can implement this as a pure Javascript function:

// function scale (number, inMin, inMax, outMin, outMax) {
//     return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }
// Use the function, like this:

// const num = 5;
// console.log(scale(num, 0, 10, -50, 50)); // 0
// console.log(scale(num, -20, 0, -100, 100)); // 150
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
