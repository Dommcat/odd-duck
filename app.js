'use strict';
console.log('Lets Get Started!');



// **************** GLOBALS *********************

let votingRounds = 5;

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


//**************CANVAS ELEMENT for Chart */

let canvasElem = document.getElementById('chart');


// *************** CONSTRUCTOR FUNCTION **********

function Product(name, imgExtension = 'jpg') {
  this.name = name;
  this.img = `img/${name}.${imgExtension}`;
  this.votes = 0;
  this.views = 0;

}

// ********************** HELPER FUNCTIONS / UTILITIES **

function randomIndex() {
  return Math.floor(Math.random() * productArray.length);
}

function renderImage() {
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex();
  let imgThreeIndex = randomIndex();

  while (imgOneIndex === imgTwoIndex || imgTwoIndex === imgThreeIndex || imgOneIndex === imgThreeIndex) {
    imgTwoIndex = randomIndex();
    imgThreeIndex = randomIndex();
  }

  imgOne.src = productArray[imgOneIndex].img;
  imgTwo.src = productArray[imgTwoIndex].img;
  imgThree.src = productArray[imgThreeIndex].img;
  imgOne.title = productArray[imgOneIndex].name;
  imgTwo.title = productArray[imgTwoIndex].name;
  imgThree.title = productArray[imgThreeIndex].name;
  imgOne.alt = productArray[imgOneIndex].img;
  imgTwo.alt = productArray[imgTwoIndex].img;
  imgThree.alt = productArray[imgThreeIndex].img;

  productArray[imgOneIndex].views++;
  productArray[imgTwoIndex].views++;
  productArray[imgThreeIndex].views++;

}

renderImage();


//****************************RENDER CHART */

function renderChart() {
  let productNames = [];
  let productVotes = [];
  let productViews = [];
  for (let i = 0; i < productArray.length; i++) {
    productNames.push(productArray[i].name);
    productVotes.push(productArray[i].votes);
    productViews.push(productArray[i].views);
  }


  let chartObj = {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: '# of Votes',
        data: productVotes,
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: productViews,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }

  };

  new Chart(canvasElem, chartObj);
}

// *************** EVENT HANDLERS ***************

function handleClick(event) {
  let imgClicked = event.target.title;
  console.log(imgClicked);

  for (let i = 0; i < productArray.length; i++) {
    if (imgClicked === productArray[i].name) {
      productArray[i].votes++;
    }
  }



  votingRounds--;

  renderImage();

  if (votingRounds === 0) {
    // document.querySelector('h3').style.visibility = 'visible';
    imgContainer.removeEventListener('click', handleClick);

    // ****** LOCAL STORAGE STARTS HERE ******
    // ! STEP 1 - STRINGIFY DATA FOR LOCAL STORAGE
    let stringifiedProducts = JSON.stringify(productArray);

    console.log('Stringified Products', stringifiedProducts);

    // ! STEP 2 - SET TO LOCAL STORAGE
    localStorage.setItem('myProducts', stringifiedProducts);
  }
}


function handleShowResults() {
  if (votingRounds === 0) {
    // imgContainer.removeEventListener('click', handleClick);
    renderChart();
  }
}

if (votingRounds === 0) {
  for (let i = 0; i < productArray.length; i++) {
    let liElem = document.createElement('li');
    liElem.textContent = `${productArray[i].name} - views: ${productArray[i].views} & votes: ${productArray[i].votes}`;
    resultsList.appendChild(liElem);
  }
}
resultsBtn.removeEventListener('click', handleShowResults);





//****************************MORE LOCAL STORAGE DEMO */

// ! STEP 3 - PULL DATA FROM LOCAL STORAGE

let retreivedProducts = localStorage.getItem('myProducts');

console.log('retreived Products>>>', retreivedProducts);

// ! STEP 4 - PARSE OUR LOCAL STORAGE DATA

let parsedProducts = JSON.parse(retreivedProducts);

console.log('parsed Products >>> ', parsedProducts);


if (retreivedProducts) {
  productArray = parsedProducts;
} else {
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

  productArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, watercan, wineglass);
}


//*********************************PRODUCT ARRAY********************** */


productArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, watercan, wineglass);

console.log(productArray);

renderImage();

imgContainer.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', handleShowResults);























// ****************************************************STARTER CODE */
