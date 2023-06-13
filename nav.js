window.addEventListener("scroll", function() {
  var nav = document.querySelector(".nav");
  var scrolled = window.pageYOffset > 0;
  if (scrolled) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});