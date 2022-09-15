export function select(element, number=null) {
  if(["#",".","-","<",">"].indexOf(element[0]) == -1)throw new Error(`${element} is not a valid selector.`);
  
  function options(selector,word) {
      return {
      "#": document.getElementById(word),
      ".": document.getElementsByClassName(word),
      "-": document.getElementsByName(word),
      ">": document.getElementsByTagName(word),
      "<": document.createElement(word)
    }[selector];
  }
  
  if(element[0] == "<"){
    element = element.split(" ");
    if(element.length == 1){
      element = element[0];
    } else if(element.length == 2){
      var elementAttribute = element[1];
      element = element[0];
    }
  }
  
  const elementIdentication= element.slice(1);
  
  const selectedElement = options(element[0],elementIdentication);
  
  if(elementAttribute){
    let attribute = {"#":"id",".":"class","-":"name"}[elementAttribute[0]];
   
    if(!attribute)throw new Error(`invalid element attribute ${elementAttribute}`);
    
    selectedElement.setAttribute(attribute,elementAttribute.slice(1));
  }
  
  return selectedElement;
}

export function requestJSON(url, callBack) {
  if(window.fetch){
    fetch(url)
    .then(responseType => responseType.json())
    .then(data => callBack(data))
    .catch(function(e){
     console.error(`erro em fetch problema ao carregar projects.json ${e}`);
    });
  } else {
    const request = new XMLHttpRequest();
    request.onload = function () {
     callBack(request.response);
    };
    request.open("GET", url);
    request.responseType = "json";
    request.send();
  }
}