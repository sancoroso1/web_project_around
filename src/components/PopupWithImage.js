import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__picture');
    this._caption = this._popup.querySelector('.popup__card-name');
  }

  open({ src, alt }) {
    this._image.src = src;
    this._image.alt = alt;
    this._caption.textContent = alt;
    super.open();
  }
}