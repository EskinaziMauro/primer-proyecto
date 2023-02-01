
        const showPictureButton = document.getElementById('showPictureButton');
        const pictureContainer = document.getElementById('pictureContainer');
        showPictureButton.addEventListener('click', function() {
          if (pictureContainer.style.display === 'none') {
            pictureContainer.style.display = 'block';
          } else {
            pictureContainer.style.display = 'none';
          }
        })

const phoneButton = document.getElementById("phoneButton");
const phoneNumber = document.getElementById("phoneNumber");
phoneButton.addEventListener('click', function() {
  console.log('se clickeó el botón')
  if (phoneNumber.style.display === 'block') {
    phoneNumber.style.display = 'none';
  } else {
    phoneNumber.style.display = 'block';
  }
});

const emailButton = document.getElementById("emailButton");
const myEmail = document.getElementById("myEmail");
emailButton.addEventListener('click', function() {
  if (myEmail.style.display === 'block') {
    myEmail.style.display = 'none';
  } else {
    myEmail.style.display = 'block';
  }
} )

const linkedinButton = document.getElementById("linkedinButton");
const linkedinPage = document.getElementById("linkedinPage");
linkedinButton.addEventListener('click', function () {
  if (linkedinPage.style.display === 'block') {
    linkedinPage.style.display = 'none';
  } else {
    linkedinPage.style.display = 'block';
  }
})

