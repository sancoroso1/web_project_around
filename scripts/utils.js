export const popupImage = document.querySelector(".popup_image");

export function removeCard(cardElement) {
  cardElement.remove();
}

export function toggleLike(buttonHeart) {
  buttonHeart.classList.toggle("elements__black-heart");
}

export function togglePopup(popup) {
  popup.classList.toggle("popup_hide");
}

export function openPopup(popupImage, link, name) {
  popupImage.querySelector("img").src = link;
  popupImage.querySelector(".popup__card-name").textContent = name;
  popupImage.querySelector("img").setAttribute("alt", name);
}

export function closePopups(event) {
  if (event.key === "Escape") {
    const popups = document.querySelectorAll(".popup");
    popups.forEach((popup) => {
      if (popup.classList.contains("popup_hide")) {
        togglePopup(popup);
      }
    });
  }
}
document.addEventListener("keydown", closePopups);

export const validationConfig = {
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonclass: ".popup__save-button:disabled",
  inputErrorClass: ".popup__input:invalid",
  errorClass: ".popup__line",
};