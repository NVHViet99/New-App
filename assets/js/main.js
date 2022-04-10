const btnSetting = document.querySelector(".btn-setting");
const tableInfor = document.querySelector(".table-infor");
const tableData = document.querySelector(".table-data");
const form = document.querySelector(".form");
const btnSubmit = document.querySelector(".btn-submit");

btnSetting.addEventListener("click", function () {
  tableInfor.classList.toggle("display-none");
  tableData.classList.toggle("display-none");
  form.classList.toggle("display-none");
});

btnSubmit.addEventListener("click", function () {
  tableInfor.classList.remove("display-none");
  tableData.classList.remove("display-none");
  form.classList.add("display-none");
});
