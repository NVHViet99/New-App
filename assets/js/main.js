const btnSetting = document.querySelector(".btn-1");
const btnSubmmit = document.querySelector(".btn-submit");
const form = document.querySelector(".form");

btnSetting.addEventListener("click", function () {
  form.classList.toggle("hidden");
});

btnSubmmit.addEventListener("click", function () {
  form.classList.add("hidden");
});
