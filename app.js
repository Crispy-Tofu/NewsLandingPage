let hamburger = document.getElementById("btnHamburger");
let closeIcon = document.getElementById("btnCloseMenu");
let menu = document.getElementById("mainMenu");
let overlay = document.getElementById("overlay");
let width = window.innerWidth;

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("hidden")) {
    //closes menu
    closeIcon.classList.add("hidden");
    hamburger.classList.remove("hidden");
    mainMenu.classList.remove("open");
  } else {
    hamburger.classList.add("hidden"); //opens menu
    closeIcon.classList.remove("hidden");
    overlay.classList.remove("hidden");
    mainMenu.classList.add("open");
  }
});

closeIcon.addEventListener("click", () => {
  if (closeIcon.classList.contains("hidden")) {
    //opens menu
    closeIcon.classList.remove("hidden");
    hamburger.classList.add("hidden");
    mainMenu.classList.add("open");
  } else {
    hamburger.classList.remove("hidden"); //closes menu
    closeIcon.classList.add("hidden");
    overlay.classList.add("hidden");
    mainMenu.classList.remove("open");
  }
});
