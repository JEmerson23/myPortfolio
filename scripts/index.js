import * as indexPage from "/scripts/singlePage.js";
import * as load from "/scripts/loadContent.js";

window.onload = function(){
  indexPage.contentButton[indexPage.rememberPage()].checked = true;
  
  indexPage.changeContent();
  
  load.loadContacts()
};