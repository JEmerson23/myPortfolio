import * as indexPage from "/scripts/singlePage.js";

const rememberLater = {
contentCheckedButton: null
};

window.onload = function(){
  if(!localStorage.contentCheckedButton){
   localStorage.setItem("contentCheckedButton","0");
  } else {
    rememberLater.contentCheckedButton = localStorage.getItem("contentCheckedButton");
  }
  indexPage.contentButton[rememberLater.contentCheckedButton-0].checked = true;
  indexPage.changeContent();
};