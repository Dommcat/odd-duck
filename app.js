'use strict';
console.log('hey there hey!');

// **************** GLOBALS *********************


let votingRounds = 25;


let bag = new Product('bag', 'jpg');
let banana = new Product('banana', 'jpg');
let bathroom = new Product('bathroom', 'jpg');
let boots = new Product('boots', 'jpg');
let breakfast = new Product('breakfast', 'jpg');
let bubblegum = new Product('bubblegum', 'jpg');
let chair = new Product('chair', 'jpg');
let cthulhu = new Product('cthulhu', 'jpg');
let dogduck = new Product('dogduck', 'jpg');
let dragon = new Product('dragon', 'jpg');
let pen = new Product('pen', 'jpg');
let petsweep = new Product('petsweep', 'jpg');
let scissors = new Product('scissors', 'jpg');
let shark = new Product('shark', 'jpg');
let sweep = new Product('sweep', 'png');
let tauntaun = new Product('tauntaun', 'jpg');
let unicorn = new Product('unicorn', 'jpg');
let watercan = new Product('watercan', 'jpg');
let wineglass = new Product('wineglass', 'jpg');


let productArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, watercan, wineglass];

//  ************** DOM WINDOWS ******************

let imgContainer = document.getElementById("img-container");

let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultsBtn = document.getElementById('show-results-btn');
let resultsList = document.getElementById('results-container');

// *************** CONSTRUCTOR FUNCTION **********

function Product(name, imgExtension = 'jpg') {
  this.name = name;
  this.img = `img/${name}.${imgExtension}`;
  this.votes = 0;
  this.views = 0;

}

// *************** HELPER FUNCTIONS / UTILITIES **

function randomIndex() {
  return Math.floor(Math.random() * productArray.length);

}

randomIndex();

function renderImage() {
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex();
  let imgThreeIndex = randomIndex();

  while (imgOneIndex === imgTwoIndex === imgThreeIndex) {

    imgOne.src = productArray[0].img;
    imgTwo.src = productArray[1].img;
    imgThree.src = productArray[3].img;
  }

  imgOne.src = productArray[imgOneIndex].img;
  imgTwo.src = productArray[imgTwoIndex].img;
  imgThree.src = productArray[imgThreeIndex].img;
  imgOne.title = productArray[imgOneIndex].img;
  imgTwo.title = productArray[imgTwoIndex].img;
  imgThree.title = productArray[imgThreeIndex].img;
  imgOne.alt = productArray[imgOneIndex].img;
  imgTwo.alt = productArray[imgTwoIndex].img;
  imgThree.alt = productArray[imgThreeIndex].img;

  productArray[imgOneIndex].views++;
  productArray[imgTwoIndex].views++;
  productArray[imgThreeIndex].views++;

}

renderImage();

// *************** EVENT HANDLERS ***************

function handleClick(event) {
  let imgClicked = event.target.title;
  console.log(imgClicked);

  for (let i = 0; i < productArray.length; i++) {
    if (imgClicked === productArray[i].name) {
      productArray[i].votes++;
    }
  }
}

votingRounds--;

renderImage();

if (votingRounds === 0) {
  imgContainer.removeEventListener('click', handleClick);
}

function handleShowResults() {

  if (votingRounds === 0) {
    imgContainer.removeEventListener('click', handleClick);
  }


  if (votingRounds === 0) {
    for (let i = 0; i < productArray.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${productArray[i].name} - views: ${productArray[i].views} & votes: ${productArray[i].votes}`;
      resultsList.appendChild(liElem);
    }
    resultsBtn.removeEventListener('click', handleShowResults);
  }
}

handleClick();
handleShowResults();



// *************** EXECUTABLE CODE **************




//*********************************PRODUCT ARRAY */


productArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, watercan, wineglass);

console.log(productArray);

renderImage();

imgContainer.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', handleShowResults);























// ****************************************************STARTER CODE */
// // ******* GLOBALS *******
// let goatArray = [];
// let votingRounds = 15;


// //  ****** DOM WINDOWS *******
// let imgContainer = document.getElementById('img-container');
// let imgOne = document.getElementById('img-one');
// let imgTwo = document.getElementById('img-two');

// let resultsBtn = document.getElementById('show-results-btn');
// let resultsList = document.getElementById('results-container');


// // ***** CONSTRUCTOR FUNCTION ******

// function Goat(name, imgExtension = 'jpg'){
//   this.name = name;
//   this.img = `img/${name}.${imgExtension}`;
//   this.votes = 0;
//   this.views = 0;
// }

// // ***** HELPER FUNCTIONS / UTILITIES *****

// function randomIndex(){
//   return Math.floor(Math.random() * goatArray.length);
// }

// function renderImg(){
//   // TODO: 2 unique images and populate the images
//   let imgOneIndex = randomIndex();
//   let imgTwoIndex = randomIndex();

//   // ** Validation to make sure numbers are unique **
//   while(imgOneIndex === imgTwoIndex){
//     // TODO: reassign one of the variables
//     imgTwoIndex = randomIndex();
//   }

//   imgOne.src = goatArray[imgOneIndex].img;
//   imgTwo.src = goatArray[imgTwoIndex].img;
//   imgOne.title = goatArray[imgOneIndex].name;
//   imgTwo.title = goatArray[imgTwoIndex].name;
//   imgOne.alt = `this is an image of ${goatArray[imgOneIndex].name}`;
//   imgTwo.alt = `this is an image of ${goatArray[imgTwoIndex].name}`;

//   // TODO: increase the number of views on the images that have been rendered
//   goatArray[imgOneIndex].views++;
//   goatArray[imgTwoIndex].views++;
// }

// // **** EVENT HANDLERS *****
// function handleClick(event){
//   // TODO: Identify what image was clicked on

//   let imgClicked = event.target.title;

//   console.log(imgClicked);

//   // TODO: Increase the number of votes to that specific image
//   for(let i = 0; i < goatArray.length; i++){
//     if(imgClicked === goatArray[i].name){
//       goatArray[i].votes++;
//     }
//   }
//   // TODO: decrement voting rounds
//   votingRounds--;

//   // TODO: Rerender 2 new images
//   renderImg();

//   // TODO: once voting rounds have ended - not allow any more clicks
//   if(votingRounds === 0){
//     imgContainer.removeEventListener('click', handleClick);
//   }
// }


// function handleShowResults(){
//   // TODO: Display the results once the there are no more votes
//   if(votingRounds === 0){
//     for(let i = 0; i < goatArray.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${goatArray[i].name} - views: ${goatArray[i].views} & votes: ${goatArray[i].votes}`;
//       resultsList.appendChild(liElem);
//     }
//     resultsBtn.removeEventListener('click', handleShowResults);
//   }

// }



// // **** EXECUTABLE CODE *****
// let bunnyGoat = new Goat('bunny-goat', 'png');
// let coolGoat = new Goat('cool-goat');
// let cruisinGoat = new Goat('cruisin-goat');
// let floatGoat = new Goat('float-your-goat');
// let goatHand = new Goat('goat-out-of-hand');
// let kissingGoat = new Goat('kissing-goat');
// let sassyGoat = new Goat('sassy-goat');
// let smilingGoat = new Goat('smiling-goat');
// let sweaterGoat = new Goat('sweater-goat');

// goatArray.push(bunnyGoat, coolGoat, cruisinGoat, floatGoat, goatHand, kissingGoat, sassyGoat, smilingGoat, sweaterGoat);

// renderImg();

