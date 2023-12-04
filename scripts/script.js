const formElement = document.querySelector(".form");
const editButton = document.querySelector(".profile__edit-button");
const exitButton = document.querySelector(".form__exit-button");
const saveButton = document.querySelector(".form__save-button");

function ChangeVisibility() {
  formElement.classList.toggle('form_displayed');
}

function HideVisibility() {
  formElement.classList.remove('form_displayed');
}

editButton.addEventListener("click", ChangeVisibility);
exitButton.addEventListener('click', HideVisibility);
saveButton.addEventListener('click', HideVisibility);

let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__description");
let nameInput = document.querySelector(".form__name");
let jobInput = document.querySelector(".form__description");

nameInput.placeholder = profileName.textContent;
jobInput.placeholder = profileJob.textContent;

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

saveButton.addEventListener("click", handleProfileFormSubmit);