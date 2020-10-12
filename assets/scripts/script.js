// ----- sample AOS event listeners ----- //

/*
document.addEventListener('aos:in', ({ detail }) => {
  console.log('animated in', detail);
});

document.addEventListener('aos:out', ({ detail }) => {
  console.log('animated out', detail);
});
*/

/* up arrow logics */
const arrowVis = () => {
  const arrowUp = document.getElementById("arrow-up");
  if (document.body.scrollTop > 1700 || 
      document.documentElement.scrollTop > 1700) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
}

window.onscroll = () => arrowVis();

/*
const getHome = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById("arrow-up").addEventListener("click", getHome);
*/

const resetForm = document.getElementById("reset-form");

/* 
 * email logics */

/* reset form fields event listener */
const resetFormAction = () => {
  const name = document.getElementById("name"),
        email = document.getElementById("email"),
        topic = document.getElementById("topic"),
        comment = document.getElementById("comment"),
        entities = new Array(name,email,topic,comment);
  entities.map(ent => { ent.value = ""; });
}

resetForm.addEventListener("click", resetFormAction);
