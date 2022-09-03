import * as indexPage from "/scripts/singlePage.js";

import * as content from "/scripts/loadContent.js";

window.onload = function(){
  indexPage.contentButton[indexPage.rememberPage()].checked = true;
  
  indexPage.changeContent();
  
  content.loadContacts()
};

const mainHeader = document.getElementById("main_header");

function fixedHeader(){
  let {scrollY,innerWidth} = window;
  if(innerWidth <= 768){
    if(scrollY >= 1)
     mainHeader.style.cssText = 'position:fixed;top:0;z-index:1;';
    else if(scrollY == 0)
     mainHeader.style.cssText = 'position:relative;';
  } else {
     mainHeader.style.cssText = 'position:relative;';
  }
}
 
window.onscroll = function(){
  fixedHeader();
};

window.onresize = function(){
  fixedHeader();
}