const rememberLater = {
  contentCheckedButton: null,
};

const contentButton = document.getElementsByName("content");

const myPresentation = document.getElementById("my_presentation"),
  myProjects = document.getElementById("my_projects"),
  myContacts = document.getElementById("my_contacts");

myPresentation.style.display = "flex";
myProjects.style.display = "none";
myContacts.style.display = "none";

contentButton.forEach((element) => (element.onclick = changeContent));

function changeContent() {
  contentButton.forEach((element) => {
    if (element.checked) {
      switch (element.value) {
        case "0":
          localStorage.setItem("contentCheckedButton", "0");
          myPresentation.style.display = "flex";
          myProjects.style.display = "none";
          myContacts.style.display = "none";
          break;
        case "1":
          localStorage.setItem("contentCheckedButton", "1");
          myPresentation.style.display = "none";
          myProjects.style.display = "flex";
          myContacts.style.display = "none";
          break;
        case "2":
          localStorage.setItem("contentCheckedButton", "2");
          myPresentation.style.display = "none";
          myProjects.style.display = "none";
          myContacts.style.display = "flex";
          break;
      }
    }
  });
}

window.onload = function () {
  if (!localStorage.contentCheckedButton) {
    localStorage.setItem("contentCheckedButton", "0");
  } else {
    rememberLater.contentCheckedButton = localStorage.getItem(
      "contentCheckedButton"
    );
  }
  contentButton[rememberLater.contentCheckedButton - 0].checked = true;
  changeContent();
};
