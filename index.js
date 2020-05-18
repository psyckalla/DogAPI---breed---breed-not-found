'use strict'

function getDogImage() {
    const inputValue = $('#number').val();
    console.log(inputValue);
    fetch(`https://dog.ceo/api/breed/${inputValue}/images`)
      .then(response => response.json() )
      .then(responseJson => errorOrNot(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  };

function mapArray(responseJson) {
    

    const randomImage = Math.floor(Math.random() * 50);
   
       
        $('.results').append('<img class="results-img" src=" ' + responseJson.message[randomImage] + ' ">');
        $('.results').removeClass('hidden');


    

};

function errorOrNot(responseJson) {
    if (responseJson.code === 404) {
        alert('Breed Not Found');
    } else {
        mapArray(responseJson);
    };
};



  function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        $('.results').empty();
      getDogImage();
    });
  };


$(function() {
    watchForm();
});
