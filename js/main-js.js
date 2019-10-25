if (document.querySelector(".box-products")) {
var boxBuy = document.querySelector(".box-products");
var popupBasket = document.querySelector(".basket-popup");
var closeButtonBasket = popupBasket.querySelector(".entrance-button");

boxBuy.addEventListener("click", function(event) {
  var target = event.target;

  if (target.classList.contains("link-buy")) {
    event.preventDefault();
    popupBasket.classList.add("popup-show");
  }
});

closeButtonBasket.addEventListener("click", function() {
  popupBasket.classList.remove("popup-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupBasket.classList.contains("popup-show")) {
      popupBasket.classList.remove("popup-show");
    }
  }
});
}
if (document.querySelector(".products")) {
var boxBuy = document.querySelector(".products");
var popupBasket = document.querySelector(".basket-popup");
var closeButtonBasket = popupBasket.querySelector(".entrance-button");

boxBuy.addEventListener("click", function(event) {
  var target = event.target;

  if (target.classList.contains("link-buy")) {
    event.preventDefault();
    popupBasket.classList.add("popup-show");
  }
});

closeButtonBasket.addEventListener("click", function() {
  popupBasket.classList.remove("popup-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupBasket.classList.contains("popup-show")) {
      popupBasket.classList.remove("popup-show");
    }
  }
});
}
if (document.querySelector(".contacts-map")) {
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
}
if (document.querySelector(".exit")) {
var exitLink = document.querySelector(".exit");
var popupLogin = document.querySelector(".login-popup");
var formLogin = popupLogin.querySelector("form");
var nameInpt = popupLogin.querySelector("[id=name-id]");

exitLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupLogin.classList.add("popup-show");
  nameInpt.focus();
});

formLogin.addEventListener("submit", function(evt) {
  if (!nameInpt.value) {
    evt.preventDefault();
    popupLogin.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupLogin.classList.contains("popup-show")) {
      popupLogin.classList.remove("popup-show");
      popupLogin.classList.remove("modal-error");
    }
  }
});
}
if (document.querySelector(".map-link")) {
var linkMap = document.querySelector(".map-link");
var popupMap = document.querySelector(".map-popup");
var closeButtonMap = popupMap.querySelector(".entrance-button");

linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("popup-show");
});

closeButtonMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.remove("popup-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("popup-show")) {
      popupMap.classList.remove("popup-show");
    }
  }
});
}
