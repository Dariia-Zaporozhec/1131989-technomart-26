var boxBuy = document.querySelector(".box-products");
var popupBasket = document.querySelector(".basket-popup");
var closeButtonBasket = popupBasket.querySelector(".entrance-button");

boxBuy.addEventListener('click', function(event) {
  var target = event.target;

  if (target.classList.contains('link-buy')) {
    event.preventDefault();
    popupBasket.classList.add('popup-show');
  }
});

closeButtonBasket.addEventListener('click', function() {
  popupBasket.classList.remove('popup-show');
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupBasket.classList.contains("popup-show")) {
      popupBasket.classList.remove("popup-show");
    }
  }
});
