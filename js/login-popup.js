var exitLink = document.querySelector(".exit");
var popupLogin = document.querySelector(".login-popup");
var formLogin = popupLogin.querySelector("form");
var nameInpt = popupLogin.querySelector("[id=name-id]");

exitLink.addEventListener('click', function(evt) {
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
