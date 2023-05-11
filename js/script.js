var firstImg = document.querySelector("img");
firstImg.src = "img/lulu.jpeg";
firstImg.alt = "Lulu bouquet";

//console.log(firstImg);

var footerColorChange = document.querySelector("footer");
footerColorChange.style.backgroundColor = "#d7ddf3";

var subtitle = document.querySelector(".tagline");
subtitle.innerHTML = "<em>The flowers know how to express your feelings!</em>";

var address = document.querySelector("address");
address.style.lineHeight = "1.5em";
address.style.fontSize = "1.75em";

var contactTitle = document.querySelector("footer h3");
contactTitle.innerHTML = `We're here for you <span class="highlight">every day</span> of the week.`;
var highlight = document.querySelector(".highlight");
highlight.style.textDecoration = "underline";

var instagram = document.querySelector(".fa-instagram");
instagram.style.color = "#d45bb9";

var facebook = document.querySelector(".fa-facebook");
facebook.style.color = "#6a99b5";

var hoursBorder = document.querySelector("footer p");
hoursBorder.style.border = "1px solid #d45bb9";
hoursBorder.style.padding = "1em";


let slideIndex = 0;

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
