const header = document.getElementById("header");

const responsiveMenuButton = document.getElementById("responsiveMenuButton");

const navbarContainer = document.getElementById("navbarContainer");

responsiveMenuButton.addEventListener("click", function () {
  console.log("click");
  responsiveMenuButton.style.visibility = "hidden";
  header.style.backgroundColor = "rgba(190, 190, 190, 0.6)";

  navbarContainer.style.visibility = "visible";
});
