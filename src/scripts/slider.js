const sliderBody = document.querySelector("#slider-body");
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");

let count = 0;
const positions = [0, 1460, 2920];
sliderBody.style.right = 0;

btnPrev.addEventListener("click", () => {
  if (count === 0) {
    count = 2;
  } else {
    count--;
  }
  sliderBody.style.right = `${positions[count]}px`;
});
btnNext.addEventListener("click", () => {
  if (count === 2) {
    count = 0;
  } else {
    count++;
  }
  sliderBody.style.right = `${positions[count]}px`;
});
