'use strict';

function getDogImage(num = 3) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numDogs = $('input[name="numDogs"]').val();
    getDogImage(numDogs);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});