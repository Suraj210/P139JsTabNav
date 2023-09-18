"use strict";

let tabMenu = document.querySelectorAll(".tabContainer>ul li");
let tabText = document.querySelectorAll(".tabText p");
let dropDownContent = document.querySelector(".dropwDownContent");

tabMenu.forEach((menu) => {
  menu.addEventListener("click", function () {
    if (menu.classList.contains("dropDownBtn")) {
      dropDownContent.classList.remove("d-none");
    } else {
      dropDownContent.classList.add("d-none");
      document.querySelector(".active-tab").classList.remove("active-tab");
      menu.className = "active-tab";

      tabText.forEach((text) => {
        if (text.getAttribute("data-id") == menu.getAttribute("data-id")) {
          text.classList.remove("d-none");
        } else {
          text.classList.add("d-none");
        }
      });
    }
  });
});
