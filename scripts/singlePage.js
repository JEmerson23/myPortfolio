export const page = [document.getElementById("my_presentation"), document.getElementById("my_projects"), document.getElementById("my_contacts")];

export const contentButton = document.getElementsByName("content");

export function changeContent() {
  contentButton.forEach((element) => {
    if (element.checked) {
      page[Number(element.value)].style.display = "flex";
      localStorage.setItem("contentCheckedButton",element.value);
    } else {
      page[Number(element.value)].style.display = "none"
    }
  });
}

contentButton.forEach((element) => (element.onclick = changeContent));
