export function select(element, number=null) {
  const word = element.slice(1),
    result = {
      "#": document.getElementById(word),
      ".": document.getElementsByClassName(word),
      "-": document.getElementsByName(word),
      ">": document.getElementsByTagName(word),
      "<": document.createElement(word)
    };

  if(!(element[0] in result))throw new Error(`${element} is not a valid selector.`);
  
  return !number ? result[element[0]] : result[element[0]][number];
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