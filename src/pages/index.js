import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { initialCards, formConfig } from "../components/constants.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { validationConfig } from "../components/utils.js";

const formProfile = document.querySelector(".form_profile");
const btnSave = document.querySelector(".profile__button");
const btnAddItem = document.querySelector(".profile__add-button");
const inputName = document.querySelector("#input-name");
const inputProfession = document.querySelector("#occupation");
const formUrl = document.querySelector(".form_place");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__about-me");
const popupObjImage = new PopupWithImage('#image-popup');
const popupObjProfile = new PopupWithForm('#profile__popup', handleProfileFormSubmit)
const popupObjAddCard = new PopupWithForm('#add__popup', handleAddFormSubmit)

popupObjImage.setEventListeners();
popupObjProfile.setEventListeners();
popupObjAddCard.setEventListeners();

const cardsSection = new Section({
  items: initialCards,
  renderer: function (item) {
    const newCard = new Card(item.link, item.name, "#card-template", {
      handleCardClick: (link, title) => {
        popupObjImage.open({ src: link, alt: title });
      }
    });
    cardsSection.addItem(newCard.generateCard())
  }
}, '.elements__list');

cardsSection.render();

const userInfo = new UserInfo({ nameSelector: profileName, jobSelector: profileJob });

function handleProfileFormSubmit({ name, occupation }) {
  userInfo.setUserInfo({ name, job: occupation });
}

function handleAddFormSubmit({ title, link }) {
  const newCard = new Card(link, title, "#card-template", {
    handleCardClick: () => {
      popupObjImage.open({ src: link, alt: title });
    }
  });
  cardsSection.addItem(newCard.generateCard(), false);
}

btnSave.addEventListener("click", () => {
  popupObjProfile.open();
  inputName.value = profileName.textContent.trim();
  inputProfession.value = profileJob.textContent.trim();
});

btnAddItem.addEventListener("click", function () {
  popupObjAddCard.open();
});

const FormValidatorProfile = new FormValidator(validationConfig, formProfile);
FormValidatorProfile.enableValidation(validationConfig);

const formValidatorCard = new FormValidator(validationConfig);
formValidatorCard.enableValidation(validationConfig);