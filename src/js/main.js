// This is main.js

let apiRequest = new XMLHttpRequest();
let output_menu = document.getElementById('output_menu');
let output_error = document.getElementById('error');

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
         getMenu ();
    }
}

function getMenu() {

  let url = 'https://entree-f18.herokuapp.com/v1/menu'

  apiRequest.onload = onSuccess;
  apiRequest.onerror = onError;
  apiRequest.open('get', url, true);
  apiRequest.send();

}

function onError() {

  if (apiRequest.responseText != 200) {

      output_error.innerHTML = "Our chefs are updating the menu.  Please check back soon.";

  }

}


function onSuccess() {

    if (apiRequest.status == 200) {

    let response = JSON.parse(apiRequest.responseText);

  
    output_menu_1.innerHTML = response.menu_items[0].description;
    output_menu_2.innerHTML = response.menu_items[1].description;
    output_menu_3.innerHTML = response.menu_items[2].description;
    output_menu_4.innerHTML = response.menu_items[3].description;
    output_menu_5.innerHTML = response.menu_items[4].description;
    output_menu_6.innerHTML = response.menu_items[5].description;
    output_menu_7.innerHTML = response.menu_items[6].description;
    output_menu_8.innerHTML = response.menu_items[7].description;
    output_menu_9.innerHTML = response.menu_items[8].description;
    output_menu_10.innerHTML = response.menu_items[9].description;
    }
    else {
      onError();
    }
  }
