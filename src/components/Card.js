import { handleLikeIcon, handleDeleteCard } from "./utils.js";

export default class Card {
  constructor(link, title, selector, { handleCardClick }) {
    this._link = link;
    this._title = title;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._selector).content.querySelector('.elements__container').cloneNode(true);
    const image = cardElement.querySelector('.elements__image');
    const title = cardElement.querySelector('.elements__text');
    title.textContent = this._title;
    image.src = this._link;
    image.alt = this._title;
    return cardElement;
  }

  _setEventListeners(node) {
    node.querySelector('.elements__image').addEventListener('click', (event) => {
      this._handleCardClick(this._link, this._title);
    })

    const likeButton = node.querySelector(".elements__heart");
    const deleteButton = node.querySelector(".elements__trash");

    likeButton.addEventListener('click', event => {
      handleLikeIcon(node);
    });
    deleteButton.addEventListener('click', event => {
      handleDeleteCard(node);
    })
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners(this._element);
    return this._element;
  }
}