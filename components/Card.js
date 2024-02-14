import {
  removeCard,
  popupImage,
  openPopup,
  toggleLike,
  togglePopup,
} from "./utils.js";

export default class Card {
  constructor(name, link, templateSelector) {
    this.name = name;
    this.link = link;
    this.templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this.templateSelector).content;
    const cardElement = cardTemplate
      .querySelector(".elements__container")
      .cloneNode(true);
    cardElement.querySelector(".elements__text").textContent = this.name;
    const cardImage = cardElement.querySelector(".elements__image");
    cardImage.src = this.link;
    cardImage.alt = this.name;

    return cardElement;
  }

  _setEventListeners() {
    const openImage = this._cardElement.querySelector(".elements__image");
    const buttonLike = this._cardElement.querySelector(".elements__heart");
    const buttonDelete = this._cardElement.querySelector(".elements__trash");

    buttonDelete.addEventListener("click", () => {
      removeCard(this._cardElement);
    });

    openImage.addEventListener("click", () => {
      openPopup(popupImage, this.link, this.name);
      togglePopup(popupImage);
    });

    buttonLike.addEventListener("click", () => {
      toggleLike(buttonLike);
    });
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    return this._cardElement;
  }
}