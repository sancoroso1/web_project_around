const container = document.querySelector(".elements__list");

const buttonEdit = document.querySelector(".button-edit");
const buttonAdd = document.querySelector(".button-new");

const popupProfile = document.querySelector(".edit-profile");
const formProfile = popupProfile.querySelector(".popup__form_edit");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
const inputName = popupProfile.querySelector('.form-name[name="name"]');
const inputJob = popupProfile.querySelector('.form-description[name="job"]');
const closeButton = popupProfile.querySelector(".button-close");

const popupAdd = document.querySelector(".new-element");
const formAdd = popupAdd.querySelector(".popup__form_add");
const inputTitle = popupAdd.querySelector('.form-title[name="title"]');
const inputEnlace = popupAdd.querySelector('.form-link[name="link"]');
const closeButtonAdd = popupAdd.querySelector(".button-close");

const popupImage = document.querySelector(".popup_content_image");
const closeButtonImage = popupImage.querySelector(".button-close");

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

const renderCard = (name, link) => {
  const template = document.querySelector("#elements-template").content;
  const element = template.querySelector(".elements__container").cloneNode(true);
  const imageElement = element.querySelector(".elements__image");
  const titleElement = element.querySelector(".elements__title");
  const buttonTrash = element.querySelector(".button-trash");
  const buttonLike = element.querySelector(".button-like");
  const openImage = element.querySelector(".elements__image")

  titleElement.innerText = name;
  imageElement.src = link;

  buttonTrash.addEventListener("click", function () {
    element.remove();
  });
  buttonLike.addEventListener("click", function () {
    buttonLike.classList.toggle("button-like-black");
  });
  openImage.addEventListener("click", function () {
    document.querySelector(".popup__image-opened").src = link;
    document.querySelector(".popup__image_text").innerText = name;
    togglePopup(popupImage);
  });

  container.prepend(element);
};

function togglePopup(popup) {
  popup.classList.toggle("popup__show");
}

//Abrir popup para editar nombre y descripcion
buttonEdit.addEventListener("click", function () {
  togglePopup(popupProfile);
});

//Cerrar popup para editar nombre y descripcion
closeButton.addEventListener("click", function () {
  togglePopup(popupProfile);
});

//Guardar y cerrar popup para editar nombre y descripcion
formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  formProfile.reset();
  togglePopup(popupProfile);
});

//Abrir popup para añadir una imagen
buttonAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
});

//Cerr popup para añadir una imagen
closeButtonAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
});

//Guardar y cerrar popup para añadir una imagen
formAdd.addEventListener("submit", function (event) {
  event.preventDefault();
  renderCard(inputTitle.value, inputEnlace.value);
  formAdd.reset();
  togglePopup(popupAdd);
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (popupImage.classList.contains('popup__show')) {
      togglePopup(popupImage);
    }
    if (popupAdd.classList.contains('popup__show')) {
      togglePopup(popupAdd);
    }
    if (popupProfile.classList.contains('popup__show')) {
      togglePopup(popupProfile);
    }
  }
});

closeButtonImage.addEventListener("click", function () {
  togglePopup(popupImage);
});

cards.forEach(function (item) {
  renderCard(item.name, item.link);
});