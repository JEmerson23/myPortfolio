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
  const request = new XMLHttpRequest();
  request.onload = function () {
    callBack(request.response);
  };
  request.open("GET", url);
  request.responseType = "json";
  request.send();
}