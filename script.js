const responsiveMenuButton = document.getElementById("responsiveMenuButton");

responsiveMenuButton.addEventListener("click", function responsiveNav() {
  const navbar = document.getElementById("navbar");

  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }
});
