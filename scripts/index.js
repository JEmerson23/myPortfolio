import * as $ from "https://jemerson23.github.io/myPortfolio/lib/abstractions.js";

import * as indexPage from "https://jemerson23.github.io/myPortfolio/scripts/singlePage.js";

import * as content from "/scripts/loadContent.js";

window.onload = function(){
  indexPage.contentButton[indexPage.rememberPage()].checked = true;
  
  indexPage.changeContent();
  
  content.loadContacts();
  content.loadProjects();
};