//Lightbox Feature (TO FIX)

function open_ecostyle_Modal() {
  document.getElementById("ecoStyle").style.display = "block";
}

function open_designhub_Modal() {
  document.getElementById("designHub").style.display = "block";

}

function closeModal() {
  document.getElementById("ecoStyle").style.display = "none";
  document.getElementById("designHub").style.display = "none";
}

var slideIndex = 1;
show_ecostyle_Slides(slideIndex);
show_designhub_Slides(slideIndex);


function plusSlides1(n) {
    show_ecostyle_Slides(slideIndex += n);
}

function plusSlides2(n) {
    show_designhub_Slides(slideIndex += n);
}



function currentSlide(n) {
    show_ecostyle_Slides(slideIndex = n);
}

function show_ecostyle_Slides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


function show_designhub_Slides(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides2.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides2[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



//Dropdown Content 
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
  function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
  }
  function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show");
  }
  function myFunction6() {
    document.getElementById("myDropdown6").classList.toggle("show");
  }
  function myFunction7() {
    document.getElementById("myDropdown7").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

