'use strict';

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {

  if (responseJson.message == "Breed not found") {
    alert('That breed wasn\'t found, please try another.');
    } 
  else {
    $('.results').html('<h2>Look at these dogs!</h2>');
    //replace the existing image with the new one    
    
    $('.results').append(
      `<img src="${responseJson.message}" class="results-img">`);
    
    //display the results section
    $('.results').removeClass('hidden');
  }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let breedDogs = $('input[name="breedDogs"]').val();
    getDogImage(breedDogs);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
