import * as $ from "/lib/abstractions.js"

import * as indexPage from "/scripts/singlePage.js";

import * as content from "/scripts/loadContent.js";

window.onload = function(){
  indexPage.contentButton[indexPage.rememberPage()].checked = true;
  
  indexPage.changeContent();
  
  content.loadContacts();
  content.loadProjects();
};
