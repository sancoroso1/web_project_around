import { imagePopUp } from "./constants.js";

export function handleShowVisibility(popupSelector) {
  popupSelector.classList.add("visible");
  popupSelector.addEventListener("click", closeOnClick);

  document.addEventListener("keydown", handleEscapeKeyPress);
}

export function handleRemoveVisibility(popupSelector) {
  popupSelector.classList.remove("visible");
  document.removeEventListener("keydown", handleEscapeKeyPress);
}

export function closeOnClick(evt) {
  if (evt.target.classList.contains("overlay")) {
    handleRemoveVisibility(evt.currentTarget);
  }
}

export function handleEscapeKeyPress(evt) {
  if (evt.key === "Escape") {
    const visiblePopup = document.querySelector(".popup.visible");
    if (visiblePopup) {
      handleRemoveVisibility(visiblePopup);
    }
  }
}

export function handlePreviewPicture(link, name) {
  handleShowVisibility(imagePopUp);
  const image = document.querySelector(".popup__image");
  const title = document.querySelector(".popup__image-title");

  image.src = link;
  image.alt = "Imagen ampliada de " + name;

  title.textContent = name;
}

export function handleLikeIcon(cardElement) {
  cardElement.querySelector('.elements__heart').classList.toggle('elements__black-heart');
}

export function handleDeleteCard(cardElement) {
  cardElement.remove();
}

export const validationConfig = {
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonclass: ".popup__save-button:disabled",
  inputErrorClass: ".popup__input:invalid",
  errorClass: ".popup__line",
};