const sliderGoal = document.getElementById("savingsRange");
const inputGoal = document.getElementById("savingsInput");
const sliderYears = document.getElementById("yearsRange");
const inputYears = document.getElementById("yearsInput");
const sliderCurrentSaved = document.getElementById("currentSavedRange");
const inputCurrentSaved = document.getElementById("currentSavedInput");
const sliderMonthlySavings = document.getElementById("monthlySavingsRange");
const inputMonthlySavings = document.getElementById("monthlySavingsInput");
const sliderExpectedRate = document.getElementById("expectedRateRange");
const inputExpectedRate = document.getElementById("expectedRateInput");
const sliderInflationRate = document.getElementById("expectedInflationRange");
const inputInflationRate = document.getElementById("expectedInflationInput");

// function to sync range and text box inputs
function syncInputs() {
  sliderGoal.addEventListener("input", function () {
    inputGoal.value = this.value;
  });
  inputGoal.addEventListener("input", function () {
    sliderGoal.value = this.value;
    // console.log(sliderGoal.dataset);
    updateProgress(sliderGoal);
  });
  sliderYears.addEventListener("input", function () {
    inputYears.value = this.value;
  });
  inputYears.addEventListener("input", function () {
    sliderYears.value = this.value;
    updateProgress(sliderYears);
  });
  sliderCurrentSaved.addEventListener("input", function () {
    inputCurrentSaved.value = this.value;
  });
  inputCurrentSaved.addEventListener("input", function () {
    sliderCurrentSaved.value = this.value;
    updateProgress(sliderCurrentSaved);
  });
  sliderMonthlySavings.addEventListener("input", function () {
    inputMonthlySavings.value = this.value;
  });
  inputMonthlySavings.addEventListener("input", function () {
    sliderMonthlySavings.value = this.value;
    updateProgress(sliderMonthlySavings);
  });
  sliderExpectedRate.addEventListener("input", function () {
    inputExpectedRate.value = this.value;
  });
  inputExpectedRate.addEventListener("input", function () {
    sliderExpectedRate.value = this.value;
    updateProgress(sliderExpectedRate);
  });
  sliderInflationRate.addEventListener("input", function () {
    inputInflationRate.value = this.value;
  });
  inputInflationRate.addEventListener("input", function () {
    sliderInflationRate.value = this.value;
    updateProgress(sliderInflationRate);
  });
}
syncInputs();
// JS to get the range track and ticks working
function init() {
  const sliders = document.getElementsByClassName("tick-slider-input");
  // when the page loads use the default values to set up sliders
  for (let slider of sliders) {
    // add event listener
    slider.oninput = onSliderInput;
    updateProgress(slider);
    setTicks(slider);
  }
}
function onSliderInput(event) {
  updateProgress(event.target);
}
// updateProgress handle on track
function updateProgress(slider) {
  let progress = document.getElementById(slider.dataset.progressId);
  const percent = getSliderPercent(slider);
  progress.style.width = percent * 100 + "%";
}
// position of handle relative to its range
function getSliderPercent(slider) {
  const range = slider.max - slider.min;
  const absValue = slider.value - slider.min;
  return absValue / range;
}

function setTicks(slider) {
  // console.log(slider);
  // get the data-tick-id from each input range input
  let container = document.getElementById(slider.dataset.tickId);
  // console.log(container);
  // get the data-tick-step value for each input range
  const spacing = parseFloat(slider.dataset.tickStep);
  // console.log(spacing);
  // get the min and max from the range input and do the math
  const sliderRange = slider.max - slider.min;
  // console.log(sliderRange);
  // starting from 0
  const tickCount = sliderRange / spacing + 1; // +1 to account for 0
  // console.log(tickCount);
  for (let i = 0; i < tickCount; i++) {
    // create a spans with class tick-slider-tick
    let tick = document.createElement("span");
    tick.className = "tick-slider-tick";
    // console.log(tick);
    container.appendChild(tick);
  }
}

window.onload = init;

// ////////////////
//TODO work on formatting to match example site, look at DYI jumbotron
// TODO for the chart will need to know given plan if goal will be reached and compare that to what the actual plan (monthly savings) need to be to achieve it. In the given amount of time
