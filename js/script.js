var showform = document.querySelector(".showform-btn");
var searchform = document.querySelector(".hotel-search-form");

showform.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchform.classList.toggle("hideform");
});
