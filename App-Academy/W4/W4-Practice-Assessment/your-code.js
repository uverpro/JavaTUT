
window.addEventListener("DOMContentLoaded", () => {

  //PROBLEM #1
 // Copied Div and Button ID from page
// Grab elements, button, Div
// interact
// listen button click
// add an attribute to the div
const blueButton = document.getElementById('make-circle-blue');
const blueCircle = document.getElementById('blue-border-circle');

blueButton.addEventListener('click', (event) => {
  blueCircle.setAttribute('class', 'blue-fill');
// blueCircle.className = 'blue fill';
});



  //PROBLEM #2
// grab checkbox
// preventing its default action

const checkBox = document.getElementById('will-not-check')

checkBox.addEventListener('click', (event) => {
  event.preventDefault();
});



  //PROBLEM #3
// grab
    // button
    // sign
    // bananas

// interact
    // listen for button clicked
      // change the sign
      // append an image to the bananas

const bananaButton = document.getElementById('change-bananas-status')
const bananaSign = document.getElementById('bananas-div')
const bananasImage = document.getElementById('bananas-image-div')

bananaButton.addEventListener('click', (event) => {
  bananaSign.innerHTML = 'No Bananas Today!';

const noBananasImg = document.createElement('img');
noBananasImg.setAttribute('src', './images/no-bananas.png')
bananasImage.append(noBananasImg);
});

  //PROBLEM #4
    // Grab
      // Input
      // button

  // interact
    // if cookie exists
    // set the input value to existing cookie
    // listen for button click
    // take input value and put it in a cookie

const cookieInput = document.getElementById('fav-cookie');
const cookieButton = document.getElementById('store-cookie');

cookieButton.addEventListener('click', event => {
  document.cookie = `favCookie = ${cookieInput.value}`
});

if (document.cookie.length > 0) {
  cookieInput.value = document.cookie.split("=")[l];
}



  //PROBLEM #5
    // Grab
      // pie button
      // pie input
      // pie list

   // interact
      // if pie input value is not empty
      // create an li
      // add the pie type to the li
      // append the li to the pie list

const pieButton = document.getElementById('save-pie');
const pieInput = document.getElementById('pie-type');
const pieList = document.querySelector('.pie-list');

pieButton.addEventListener("click", (event) => {
  if (pieInput.value.length > 0) {
    const newPie = document.createElement('li');
    newPie.innterHTML = pieInput.value;

    pieList.append(newPie);

    pieInput.value = '';
  }
});

  //PROBLEM #6
    // get
      // Input
      // Button
   // interact
    // listen for the button click
    // save fav ice cream

const iceCreamInput = document.getElementById('fav-ice-cream');
const iceCreamButton = document.getElementById('save-ice-cream,')

iceCreamButton.addEventListener('click', event => {
  localStorage.setItem('favIceCream', iceCreamInput.value)
});

const iceCream = localStorage.getItem('favIceCream');

if (iceCream) {
  iceCreamInput.value = iceCream;
}

  //PROBLEM #7
    // Grab
      // apple Button
      // orange button
      // empty Button
      // basket
      // fruit count
    // interact
      // apple button clicked
        // add an apple to basket's innerHTML
      // orange button clicked
        // add an orange to the basket's innerHTML
        // increase fruit count
      // basket button clicked
        // set basket innterHTML = ''
        // reset fruit count

let fruitCount = 0;
const appleButton = document.getElementById('add-apple');
const orangeButton = document.getElementById('add-orange');
const basketButton = document.getElementById('reset-basket');
const fruitBasket = document.getElementById('fruit-storage');
const fruitCounter = document.getElementById('total-fruit');
fruitCounter.innerHTML = fruitCount;

appleButton.addEventListener('click', (event) => {
    fruitBasket.innerHTML += '🍎';
    fruitCounter.innerHTML = ++fruitCount;
});

orangeButton.addEventListener('click', (event) => {
    fruitBasket.innerHTML += '🍊';
    fruitCounter.innerHTML = ++fruitCount;
});

basketButton.addEventListener('click', (event) => {
  fruitBasket.innerHTML = '';
  fruitCount = 0;
  fruitCounter.innerHTML = fruitCount;
});

  //PROBLEM #8
    // Grab
      // button
  // interact
    // when button is clicked
    // make sure the event doesnt happen beyond the Button

const bubbleButton = document.getElementById('bubble-maker');
bubbleButton.addEventListener('click', (event) => {
  event.stopPropagation();
});

});
