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
window.onscroll = () => arrowVis();

arrowVis = () => {
  const arrowUp = document.getElementById("arrow-up");
  if (document.body.scrollTop > 1800 || 
      document.documentElement.scrollTop > 1800) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
}

getHome = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/* contact button logics */
const contactMeButton = document.getElementById("open-contact-me"),
      spa = document.getElementById("spa"),
      contactMe = document.getElementById("contact-form-wrapper"),
      closeContactMe = document.getElementById("close-contact-me");

const contactMeButtonData = () => {
        spa.style.display = "none";
        contactMe.style.display = "block";
      },
      closeContactMeData = () => {
        spa.style.display = "block";
        contactMe.style.display = "none";
      };

contactMeButton.addEventListener("click", contactMeButtonData)
closeContactMe.addEventListener("click", closeContactMeData)

/* 
 * email logics */

/* reset form fields event listener */
document
  .getElementById("reset-form")
  .addEventListener("click", () => { 
    resetForm(); 
  });

/* reset form fields function */
resetForm = () => {
  const name = document.getElementById("name"),
        email = document.getElementById("email"),
        topic = document.getElementById("topic"),
        comment = document.getElementById("comment"),
        entities = new Array(name,email,topic,comment);
  entities
    .map(ent => { 
      ent.value = "";
    });
}



