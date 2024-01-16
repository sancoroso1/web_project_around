import { enableValidation } from "./validate.js";
enableValidation();

const container = document.querySelector(".elements__list");

const buttonEdit = document.querySelector(".button-edit");
const buttonAdd = document.querySelector(".button-new");

const popupProfile = document.querySelector(".edit-profile");
const formProfile = popupProfile.querySelector(".popup__form_edit");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
const inputName = popupProfile.querySelector(".form-name");
const inputJob = popupProfile.querySelector(".form-description");
const closeButton = popupProfile.querySelector(".button-close");
const closePopup = popupProfile.querySelector(".popup__overlay");

const popupAdd = document.querySelector(".new-element");
const formAdd = popupAdd.querySelector(".popup__form_add");
const inputTitle = popupAdd.querySelector('.form-title[name="title"]');
const inputLink = popupAdd.querySelector('.form-link[name="link"]');
const closeButtonAdd = popupAdd.querySelector(".button-close");
const closePopupAdd = popupAdd.querySelector(".popup__overlay");

const popupImage = document.querySelector(".popup_content_image");
const closeButtonImage = popupImage.querySelector(".button-close");
const closePopupImage = popupImage.querySelector(".popup__overlay");

//Creacion de tarjetas
const cards = [
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

function cardButtons(buttonTrash, buttonLike, openImage, name, link, element) {
  buttonTrash.addEventListener("click", function () {
    element.remove();
  });
  buttonLike.addEventListener("click", function () {
    buttonLike.classList.toggle("button-like-black");
  });
  openImage.addEventListener("click", function () {
    document.querySelector(".popup__image-opened").src = link;
    document.querySelector(".popup__image-opened").alt = "This is a picture of " + name;
    document.querySelector(".popup__image-text").textContent = name;
    togglePopup(popupImage);
  });
}

const renderCard = (name, link) => {
  const template = document.querySelector("#elements-template").content;
  const element = template.querySelector(".elements__container").cloneNode(true);
  const imageElement = element.querySelector(".elements__image");
  const titleElement = element.querySelector(".elements__title");
  const buttonTrash = element.querySelector(".button-trash");
  const buttonLike = element.querySelector(".button-like");
  const openImage = element.querySelector(".elements__image");

  titleElement.textContent = name;
  imageElement.src = link;
  imageElement.alt = "This is a picture of " + name;

  cardButtons(buttonTrash, buttonLike, openImage, name, link, element);
  container.prepend(element);
};

cards.forEach(function (item) {
  renderCard(item.name, item.link);
});

function togglePopup(popup) {
  popup.classList.toggle("popup__show");
}

inputName.value = profileName.textContent;
inputJob.value = profileJob.textContent;

//Abrir popup para editar nombre y descripcion
buttonEdit.addEventListener("click", function () {
  togglePopup(popupProfile);
});

//Guardar y cerrar popup para editar nombre y descripcion
formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  togglePopup(popupProfile);
});

//Cerrar popup para editar nombre y descripcion
closeButton.addEventListener("click", function () {
  togglePopup(popupProfile);
  formProfile.reset();
});

//Cerrar popup para editar nombre y descripcion al hacer click fuera del popup
closePopup.addEventListener("click", function () {
  togglePopup(popupProfile);
  formProfile.reset();
});

//Abrir popup para añadir una imagen
buttonAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
});

//Guardar y cerrar popup para añadir una imagen
formAdd.addEventListener("submit", function (event) {
  event.preventDefault();
  renderCard(inputTitle.value, inputLink.value);
  formAdd.reset();
  togglePopup(popupAdd);
});

//Cerrar popup para añadir una imagen
closeButtonAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
  formAdd.reset();
});

//Cerrar popup para añadir una imagen al hacer click fuera del popup
closePopupAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
  formAdd.reset();
});

//Cerrar popup imagen ampliada
closeButtonImage.addEventListener("click", function () {
  togglePopup(popupImage);
});

//Cerrar popup imagen ampliada al hacer click fuera del popup
closePopupImage.addEventListener("click", function () {
  togglePopup(popupImage);
});

//Cerrar popup al presionar la tecla Escape
function closePopups(event) {
  if (event.key === "Escape") {
    const popups = document.querySelectorAll(".popup");
    popups.forEach((popup) => {
      if (popup.classList.contains("popup__show")) {
        togglePopup(popup);
      }
    });
  }
}
document.addEventListener("keydown", closePopups);