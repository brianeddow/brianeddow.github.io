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

window.onscroll = () => scrollCheck();

scrollCheck = () => {
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