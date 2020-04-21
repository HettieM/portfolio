const contactButton = document.querySelector(".contact__button");
const contactForm = document.querySelector("contact__form");

contactButton.addEventListener("click", formAppear());

function formAppear() {
  console.log("hello");
  contactForm.style.display = "flex";
  contactButton.style.display = "none";
}

function formDisappear() {
  contactForm.style.display = "none";
  contactButton.style.display = "flex";
}

formDisappear();
