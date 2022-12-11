"use strict";

const btn = document.querySelector("buttom");
const span = document.querySelector("span");

btn.onclick = () => {
  alert("Hi!");
};

for (let i = 0; i < 1000000; i++) {
  if (i % 100) {
    setTimeout(() => (span.textContent = `${i}`));
  }
}
