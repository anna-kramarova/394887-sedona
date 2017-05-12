var showform = document.querySelector(".showform-btn");
var searchform = document.querySelector(".hotel-search-form");
var checkininput = searchform.querySelector("input");

showform.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchform.classList.toggle("hideform");
  checkininput.focus();
});
