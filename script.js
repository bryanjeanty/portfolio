// sidebar && main content
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const button = document.getElementById("toggle");
const tabs = document.getElementsByClassName("tabs");

button.addEventListener("click", () => {
  sidebar.classList.toggle("expanded");
  content.classList.toggle("collapsed");

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.toggle("fade-out");
    tabs[i].classList.toggle("fade-in");
  }
});

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("mouseover", () => {
    tabs[i].style.backgroundColor = "var(--dark3)";
  });
  tabs[i].addEventListener("mouseout", () => {
    tabs[i].style.background = "none";
  });
}

// contact form
(function(){
  emailjs.init("user_FP67LnHmmdF7HY8qXPCvt");
})();

const mySuccessAlert = document.getElementById('my-success-alert');
const contactModal = document.getElementById('contact-modal');
const myContactForm = document.getElementById('my-contact-form');
const myContactNum = document.getElementById('my-contact-number');
const emailInput = document.getElementById('email-input');
const subjectInput = document.getElementById('subject-input');
const messageTextArea = document.getElementById('message-text-area');

window.onload = () => {
  myContactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    myContactNum.value = Math.random() * 100000 | 0;
    emailjs.sendForm('my_contact_service', 'my_contact_form', myContactForm);
    mySuccessAlert.style.display = "block";
    setTimeout(() => {
      emailInput.value = "";
      subjectInput.value = "";
      messageTextArea.value = "";
      mySuccessAlert.style.display = "none";
      contactModal.classList.remove('show');
      document.body.classList.remove('modal-open');
    }, 500);
  });
}
