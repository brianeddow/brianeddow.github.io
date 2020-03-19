/* function main() {

}

$(document).ready(main); */


/*

// ----- sample AOS event listeners ----- //

document.addEventListener('aos:in', ({ detail }) => {
  console.log('animated in', detail);
});

document.addEventListener('aos:out', ({ detail }) => {
  console.log('animated out', detail);
});

*/

/* up arrow logics */
window.onscroll = () => arrowVis();

arrowVis = () => {
  let arrowUp = document.getElementById("arrow-up");
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
}

getHome = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* contact button logics
let contactMeButton = document.getElementById("open-contact-me"),
    spa = document.getElementById("spa"),
    contactMe = document.getElementById("contact-form-wrapper"),
    closeContactMe = document.getElementById("close-contact-me");

contactMeButton.addEventListener("click", function() {
  spa.style.display = "none";
  contactMe.style.display = "block";
})

closeContactMe.addEventListener("click", function() {
  spa.style.display = "block";
  contactMe.style.display = "none";
})
*/

