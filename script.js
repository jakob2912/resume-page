function scrollToElement(elementSelector, instance = 0) {
  //Select all Elements that match the given sector
  const elements = document.querySelectorAll(elementSelector);

  //Check if elems match selector
  if (elements.length > instance) {
    //Scroll to the specified instance of elem
    elements[instance].scrollIntoView({ behavior: 'smooth'});
  }
}

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

link1.addEventListener('click', () => {
  scrollToElement('.header');
});

link2.addEventListener('click', () => {
  //Scroll to second elem with .header
  scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
  scrollToElement('footer');
});

function openEmailWindow() {
  // Specify your email address
  const emailAddress = "jakob.f.seidl@gmail.com";

  // Encode email address
  const encodedEmailAddress = encodeURIComponent(emailAddress);

  // Construct mailto link with pre-filled email address
  const mailtoLink = "mailto:" + encodedEmailAddress;

  // Open the email window
  window.location.href = mailtoLink;
}

const buttons = document.querySelectorAll('.btn')
const emailLinks = document.querySelectorAll('.email-link')

buttons.forEach((button) => {
  button.addEventListener('click', openEmailWindow);
})

emailLinks.forEach((button) => {
  button.addEventListener('click', openEmailWindow);
})
 
