document.getElementById("close-contact-me").addEventListener("click", () => {
	const senderName = document.getElementById("name").value,
        senderEmail = document.getElementById("email").value,
        senderTopic = document.getElementById("topic").value,
        senderComment = document.getElementById("comment").value;

  function entityQC(entity) {
    if (entity.trim().length == 0) {
      // fill me in
    } else if (!isNaN(entity.trim())) {
      // fill me in
    }
  }

  const token = "3209f98b-7971-4491-a13d-f59b46482d3f";
  const me = 'brianeddow.landing@gmail.com';
  const body = senderName+' says: '+senderComment;


  /* trigger */
	Email.send({
			SecureToken: token,
	    To: me,
	    From: senderEmail,
	    Subject: senderTopic,
	    Body: body
	}).then(
	  message => alert(message)
	);

	/* reset form fields function */
	const resetForm = () => {
	  let name = document.getElementById("name"),
	      email = document.getElementById("email"),
	      topic = document.getElementById("topic"),
	      comment = document.getElementById("comment"),
	      entities = new Array(name,email,topic,comment);
	  entities.map(ent => { ent.value = ""; }) 
	}

	resetForm()
})