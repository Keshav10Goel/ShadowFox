const text = "Built on hustle, powered by curiosity.";
let index = 0;
const speed = 70;
const target = document.querySelector(".typing");

function typeEffect() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.onload = typeEffect;
