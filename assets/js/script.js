//page loader
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector(
      "body").style.visibility = "hidden";
    document.querySelector(
      "#loader").style.visibility = "visible";
  } else {
    document.querySelector(
      "#loader").style.display = "none";
    document.querySelector(
      "body").style.visibility = "visible";
  }
};
// navigation menu
var navigation = document.getElementById("navigation");
document.getElementById("hamburger").addEventListener("click",myFuntion);
function myFuntion(){
  if(navigation.style.display==="block"){
    navigation.style.display = "none";
  }
  else{
    navigation.style.display = "block";
  }
}
// carousel
$(document).ready(function () {
  $('.owl-one').owlCarousel({
    items: 1,
    lazyLoad: true,
    loop: true,
    margin: 10,
    nav: true,
    navText: [" <a class='fa fa-angle-left left'></a>", "<a class='fa fa-angle-right right left'></a>"],
    dots: false,
  });
  $('.owl-two').owlCarousel({
    items: 1,
    lazyLoad: true,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
  });
});























