import * as $ from "https://jemerson23.github.io/myPortfolio/lib/abstractions.js";

export const page = [$.select("#my_presentation"), $.select("#my_projects"), $.select("#my_contacts")];

export const contentButton = $.select("-content");

var animation;

/*function pageTransition(){
  if(){
    animation = window.requestAnimationFrame(pageTransition);
  } else {
    window.cancelAnimationFrame(animation);
  }
}*/

export function changeContent() {
  contentButton.forEach((element) => {
    if (element.checked) {
      page[Number(element.value)].style.cssText = "display:flex;";
      
      localStorage.setItem("contentCheckedButton",element.value);
    } else {
      page[Number(element.value)].style.cssText = "display:none;";
    }
  });
}

contentButton.forEach((element) => (element.onclick = changeContent));

export function rememberPage(){
  if(!localStorage.contentCheckedButton){
   localStorage.setItem("contentCheckedButton","0");
  }
  
  return Number(localStorage.getItem("contentCheckedButton"));
}