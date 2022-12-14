//import * as $ from "https://jemerson23.github.io/myPortfolio/lib/abstractions.js";
import * as $ from "/lib/abstractions.js";

function Contact(link, icon, label) {
  const contactBox = $.select("<span,.contacts-grid__contact"),
    contactLink = $.select("<a,.contacts-grid__link"),
    contactIcon = $.select(`<i,.${icon} contacts-grid__icon`),
    contactLabel = $.select("<i,.contacts-grid__label");

  contactLink.setAttribute("href", link);
  contactLink.setAttribute("target", "_blank");

  contactLabel.textContent = label;

  this.addIn = (where) => {
    contactBox.appendChild(contactIcon);
    contactBox.appendChild(contactLink);
    contactBox.appendChild(contactLabel);
    where.appendChild(contactBox);
  };
}

function Project(title, image, description, link) {
  const self = this;
  this.title = title;
  this.image = image;
  this.description = description;
  this.link = link;

  //criando projeto

  this.createIn = function (where) {
    where = $.select(`#${where}`);
    let projectBox = $.select("<li,.projects-grid__project"),
      projectImageBox = $.select("<figure,.projects-grid__img-box"),
      projectImage = $.select("<img"),
      projectTitle = $.select("<a,.projects-grid__title"),
      ProjectDescription = $.select("<p,.projects-grid__description");

    projectTitle.innerText = this.title;
    projectTitle.setAttribute("href", this.link);

    projectImage.setAttribute("alt", this.title);
    projectImage.src = this.image;

    ProjectDescription.innerText = this.description;

    projectBox.appendChild(projectTitle);
    projectImageBox.appendChild(projectImage);
    projectBox.appendChild(projectImageBox);
    projectBox.appendChild(ProjectDescription);
    where.insertBefore(projectBox, $.select("#empty_project"));
  };
}

export function loadContacts() {
  function load(data) {
    for (let i = 0; i < data.contact.length; i++) {
      let { link, icon, label } = data.contact[i];

      if (!link || !icon || !label) continue;

      let contact = new Contact(link, icon, label).addIn(
        $.select("#contacts_list")
      );
    }
  }

  $.requestJSON(
      "https://jemerson23.github.io/myPortfolio/src/contacts.json",
        load
    );

}

export function loadProjects() {
  function load(data) {
    for (let project of data.project) {
      let { title, image, description, link } = project;

      let p = new Project(title, image, description, link).createIn(
        "projects_list"
      );
      console.log(p);
    }
  }

    $.requestJSON(
      "https://jemerson23.github.io/myPortfolio/src/projects.json",
        load
    );
}