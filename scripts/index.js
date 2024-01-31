import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { validationConfig, popupImage, togglePopup } from "./utils.js";

const buttonEdit = document.querySelector(".profile__button");
const popupProfile = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close-button");

const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__about-me");
const formProfile = document.querySelector(".popup__content");
const inputName = popupProfile.querySelector(".popup__input_name");
const inputOccupation = popupProfile.querySelector(".popup__input_occupation");

const inputTitle = document.querySelector(".popup__input_title");
const inputLink = document.querySelector(".popup__input_link");
const pictureForm = document.querySelector(".popup__content_add");

const addButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_add-button");
const closeAddprofile = popupAdd.querySelector(".popup__close-button");
const buttonHeart = document.querySelector(".elements__heart");
const closeImage = popupImage.querySelector(".popup__close-button");
const overlays = document.querySelectorAll(".popup__overlay");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const elements = document.querySelector(".elements__list");

initialCards.forEach((item) => {
  const newCard = new Card(item.name, item.link, "#card-template");
  elements.append(newCard.generateCard());
});

buttonEdit.addEventListener("click", function () {
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
  togglePopup(popupProfile);
});

closeButton.addEventListener("click", function () {
  togglePopup(popupProfile);
});

closeImage.addEventListener("click", function () {
  togglePopup(popupImage);
});

formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
  togglePopup(popupProfile);
});

pictureForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newCard = new Card(inputTitle.value, inputLink.value, "#card-template");
  elements.prepend(newCard.generateCard());
  togglePopup(popupAdd);
  pictureForm.reset();
});

addButton.addEventListener("click", function () {
  togglePopup(popupAdd);
});

closeAddprofile.addEventListener("click", function () {
  togglePopup(popupAdd);
});

overlays.forEach((overlay) => {
  overlay.addEventListener("click", function (event) {
    const popup = overlay.closest(".popup");
    togglePopup(popup);
  });
});

const FormValidatorProfile = new FormValidator(validationConfig, formProfile);
FormValidatorProfile.enableValidation(validationConfig);

const formValidatorCard = new FormValidator(validationConfig, pictureForm);
formValidatorCard.enableValidation(validationConfig);