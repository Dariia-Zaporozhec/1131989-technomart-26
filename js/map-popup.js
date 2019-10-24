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
