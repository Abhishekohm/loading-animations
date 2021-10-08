const btn = document.querySelector(".setDisplay");
const parent = document.querySelector(".parent");
const placeHolder = document.querySelector(".placeHolder");

btn.addEventListener("click", (e) => {
  parent.style.display = "flex";
  placeHolder.style.display = "none";
  window.setTimeout(() => {
    parent.style.display = "none";
    placeHolder.style.display = "block";
  }, 10000);
});
