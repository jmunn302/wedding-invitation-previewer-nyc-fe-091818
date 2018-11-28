document.addEventListener("DOMContentLoaded", (e) => {
  changeEnvelope()
  changeInvite()

  if (document.getElementById("vintage").checked) {
     firstNameDiv.className = "";
     firstNameDiv.classList.add("vintage");

     secondNameDiv.className = "";
     secondNameDiv.classList.add("vintage");

     dateDiv.className = "";
     dateDiv.classList.add("vintage");

     timeDiv.className = "";
     timeDiv.classList.add("vintage");

     locationDiv.className = "";
     locationDiv.classList.add("vintage");

     addressDiv.className = "";
     addressDiv.classList.add("vintage");

     addressSecondDiv.className = "";
     addressSecondDiv.classList.add("vintage");
  }
})



    const firstName = document.getElementById('first-name')
    const firstNameDiv = document.getElementById('first-name-div')
    const secondName = document.getElementById('second-name')
    const secondNameDiv = document.getElementById('second-name-div')
    const dateText = document.getElementById('date')
    const dateDiv = document.getElementById('date-div')
    const timeText = document.getElementById('time')
    const timeDiv = document.getElementById('time-div')
    const locationText = document.getElementById('location')
    const locationDiv = document.getElementById('location-div')
    const addressFirst = document.getElementById('address-first')
    const addressDiv = document.getElementById('address-div')
    const addressSecond = document.getElementById('address-second')
    const addressSecondDiv = document.getElementById('address-second-div')
    const envelopeName = document.getElementById('envelope-name')
    const envelopeNameDiv = document.getElementById('envelope-top-name')
    const envelopeAddressOne = document.getElementById('address-envelope-first')
    const envelopeAddressOneDiv = document.getElementById('address-envelope')
    const envelopeAddressTwo = document.getElementById('envelope-address-second')
    const envelopeAddressTwoDiv = document.getElementById('address-envelope-two')
    const envelopeAddressThree = document.getElementById('address-envelope-third')
    const envelopeAddressThreeDiv = document.getElementById('envelope-address-three')



function changeInvite() {
    if (document.getElementById("modern").checked) {
    document.getElementById("background").style.backgroundImage = "url('https://i.imgur.com/N4yBQHE.png')";
    } else if (document.getElementById("romantic").checked) { 
    document.getElementById("background").style.backgroundImage = "url('https://i.imgur.com/TkchBlW.png')";
    } else if (document.getElementById("vintage").checked) { 
    document.getElementById("background").style.backgroundImage = "url('https://i.imgur.com/X7QJmLU.png')";
    } else if (document.getElementById("elegant").checked) { 
    document.getElementById("background").style.backgroundImage = "url('https://i.imgur.com/62CkM2D.png')";
    }
}

function changeEnvelope() {
    if (document.getElementById("white").checked) {
    document.getElementById("envelope-background").style.backgroundImage = "url('https://i.imgur.com/aPhhPGg.jpg')";
    } else if (document.getElementById("gold").checked) { 
    document.getElementById("envelope-background").style.backgroundImage = "url('https://i.imgur.com/lVMqbnS.jpg')";
    } else if (document.getElementById("blush").checked) { 
    document.getElementById("envelope-background").style.backgroundImage = "url('https://i.imgur.com/WjU1QnZ.png')";
    } else if (document.getElementById("silver").checked) { 
    document.getElementById("envelope-background").style.backgroundImage = "url('https://i.imgur.com/aBj8mdD.jpg')";
    }
}


//Get input boxes

    const fullNameOne = document.getElementById('full-name-one')  

    fullNameOne.addEventListener('keyup', (event) => {
    let FirstBoxValue = fullNameOne.value;
    firstName.innerText = FirstBoxValue;
 })
 
     const fullNameTwo = document.getElementById('full-name-two')  

    fullNameTwo.addEventListener('keyup', (event) => {
    let secondBoxValue = fullNameTwo.value;
    secondName.innerText = secondBoxValue;
 })
 
      const weddingDate = document.getElementById('wedding-date')  

    weddingDate.addEventListener('keyup', (event) => {
    let dateBoxValue = weddingDate.value;
    dateText.innerText = dateBoxValue;
 })

      const weddingTime = document.getElementById('wedding-time')  
    weddingTime.addEventListener('keyup', (event) => {
    let timeBoxValue = weddingTime.value;
    timeText.innerText = timeBoxValue;
 })

      const weddingVenue = document.getElementById('wedding-venue')  
    weddingVenue.addEventListener('keyup', (event) => {
    let venueBoxValue = weddingVenue.value;
    locationText.innerText = venueBoxValue;
 })

      const addressOne = document.getElementById('address-one')  
    addressOne.addEventListener('keyup', (event) => {
    let addressOneValue = addressOne.value;
    addressFirst.innerText = addressOneValue;
 })

      const addressTwo = document.getElementById('address-two')  
    addressTwo.addEventListener('keyup', (event) => {
    let addressTwoValue = addressTwo.value;
    addressSecond.innerText = addressTwoValue;
 })
 
     const nameOnEnvelope = document.getElementById('full-name-address')  

    fullNameOne.addEventListener('keyup', (event) => {
    let FirstEnvelopeValue = nameOnEnvelope.value;
    envelopeName.innerText = FirstEnvelopeValue;
 })



const vintageRadio = document.getElementById('vintage')
vintageRadio.addEventListener('click', (event) => {
     firstNameDiv.className = "";
     firstNameDiv.classList.add("vintage");

     secondNameDiv.className = "";
     secondNameDiv.classList.add("vintage");

     dateDiv.className = "";
     dateDiv.classList.add("vintage");

     timeDiv.className = "";
     timeDiv.classList.add("vintage");

     locationDiv.className = "";
     locationDiv.classList.add("vintage");

     addressDiv.className = "";
     addressDiv.classList.add("vintage");

     addressSecondDiv.className = "";
     addressSecondDiv.classList.add("vintage");
})

const elegantRadio = document.getElementById('elegant')
elegantRadio.addEventListener('click', (event) => {
  firstNameDiv.className = "";
     firstNameDiv.classList.add("elegant");

     secondNameDiv.className = "";
     secondNameDiv.classList.add("elegant");

     dateDiv.className = "";
     dateDiv.classList.add("elegant");

     timeDiv.className = "";
     timeDiv.classList.add("elegant");

     locationDiv.className = "";
     locationDiv.classList.add("elegant");

     addressDiv.className = "";
     addressDiv.classList.add("elegant");

     addressSecondDiv.className = "";
     addressSecondDiv.classList.add("elegant");
})

const romanticRadio = document.getElementById('romantic')
romanticRadio.addEventListener('click', (event) => {
  firstNameDiv.className = "";
     firstNameDiv.classList.add("romantic");

     secondNameDiv.className = "";
     secondNameDiv.classList.add("romantic");

     dateDiv.className = "";
     dateDiv.classList.add("romantic");

     timeDiv.className = "";
     timeDiv.classList.add("romantic");

     locationDiv.className = "";
     locationDiv.classList.add("romantic");

     addressDiv.className = "";
     addressDiv.classList.add("romantic");

     addressSecondDiv.className = "";
     addressSecondDiv.classList.add("romantic");

})

const modernRadio = document.getElementById('modern')
modernRadio.addEventListener('click', (event) => {
  firstNameDiv.className = "";
     firstNameDiv.classList.add("modern");

     secondNameDiv.className = "";
     secondNameDiv.classList.add("modern");

     dateDiv.className = "";
     dateDiv.classList.add("modern");

     timeDiv.className = "";
     timeDiv.classList.add("modern");

     locationDiv.className = "";
     locationDiv.classList.add("modern");

     addressDiv.className = "";
     addressDiv.classList.add("modern");

     addressSecondDiv.className = "";
     addressSecondDiv.classList.add("modern");
})