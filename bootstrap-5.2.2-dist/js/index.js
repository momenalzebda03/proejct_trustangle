var tag_header = document.querySelectorAll(".text_hover");
var icon_animation = document.getElementById("section_main_scroll_button");
var section_navbar = document.getElementById("section_navbar");
var text_hover = document.querySelectorAll("#text_hover");
var image_scroll = document.getElementById("image_scroll");
var button_language = document.getElementById("button_language");
var menu = document.getElementById("menu");
var boolen = true;
for (let i = 0; i < tag_header.length; i++) {
  var chekd = tag_header[i];
  chekd.addEventListener("click", function () {
    for (let i = 0; i < tag_header.length; i++) {
      tag_header[i].classList.remove("active");
    }
    this.classList.add("active");
  });
}

icon_animation.addEventListener("click", () => {
  var scrollToPosition = window.innerWidth >= 768 ? 700 : 300;
  window.scrollTo({
    top: scrollToPosition,
    behavior: "smooth",
  });
});

window.onscroll = function () {
  var scrollToPosition = window.innerWidth >= 768 ? 600 : 200;
  if (this.scrollY >= scrollToPosition) {
    section_navbar.style.background = "white";
    section_navbar.style.boxShadow = "0 0 10px 0 #ccc";
    image_scroll.src = "images/image_footer/logo.png";
    button_language.style.borderRadius = "10px";
    menu.style.color = "black";
    text_hover.forEach((element) => {
      element.classList.add("text_hover_black");
    });
  } else {
    section_navbar.style.background =
      "linear-gradient(-180deg, #3a3a3a, #00000000)";
    section_navbar.style.boxShadow = "0 0 0 0 #ccc";
    image_scroll.src = "images/image_navbar/logo.png";
    button_language.style.borderRadius = "0";
    menu.style.color = "white";
    text_hover.forEach((element) => {
      element.classList.remove("text_hover_black");
    });
  }
};

var text = "Welcome to trustangle’ s referral program!";
var id_text = document.getElementById("id_text");
var i = 0;
var time_clear = setInterval(() => {
  i > text.length - 1
    ? clearInterval(time_clear)
    : (id_text.textContent += text[i]);
  i++;
}, 100);