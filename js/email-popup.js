var linkContacts = document.querySelector(".contacts-map");
var popupContacts = document.querySelector(".feedback-popup");
var closeButton = popupContacts.querySelector(".entrance-button");

var formContucts = popupContacts.querySelector("form");
var nameInput = popupContacts.querySelector("[id=name-field]");
var emailInput = popupContacts.querySelector("[id=email-field]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("emailInput");
} catch (err) {
  isStorageSupport = false;
}
linkContacts.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupContacts.classList.add("popup-show");

  if (storage) {
    emailInput.value = storage;
  }

  nameInput.focus();
});

closeButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupContacts.classList.remove("popup-show");
  popupContacts.classList.remove("modal-error");
});
formContucts.addEventListener("submit", function(evt) {
  if (!nameInput.value || !emailInput.value) {
    evt.preventDefault();
    popupContacts.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("emailInput", emailInput.value);
    }
  }
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupContacts.classList.contains("popup-show")) {
      popupContacts.classList.remove("popup-show");
      popupContacts.classList.remove("modal-error");
    }
  }
});
