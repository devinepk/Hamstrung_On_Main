// This is main.js

let apiRequest = new XMLHttpRequest();
let output_menu = document.getElementById('output_menu');

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    getMenu();
  }
};

function getMenu() {

  let url = 'https://entree-f18.herokuapp.com/v1/menu';

  apiRequest.onload = onSuccess;
  apiRequest.onerror = onError;
  apiRequest.open('get', url, true);
  apiRequest.send();
}

function onError() {

  if (apiRequest.responseText) {
    document.getElementById('error').innerHTML = "Our chefs are updating the menu.  Please check back soon.";
  }
}

function onSuccess() {

  if (apiRequest.status == 200) {

    let response = JSON.parse(apiRequest.responseText);

    output_menu = document.innerHTML = response;
  }
}