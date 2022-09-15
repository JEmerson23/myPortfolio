import * as $ from "/lib/abstractions.js";

function Contact(link, icon, label) {
  const contactBox = $.select("<span"),
    contactLink = $.select("<a"),
    contactIcon = $.select("<i"),
    contactLabel = $.select("<i");

  contactIcon.setAttribute("class", `${icon} contact__icon`);
  contactLink.setAttribute("href", link);
  contactLink.setAttribute("target", "_blank");

  contactLabel.textContent = label;

  contactBox.setAttribute("class", "contact");
  contactLink.setAttribute("class", "contact__link");
  contactLabel.setAttribute("class", "contact__label");

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
    let projectBox = $.select("<li .project"),
      projectImageBox = $.select("<figure .project__img_box"),
      projectImage = $.select("<img"),
      projectTitle = $.select("<a .project__title"),
      ProjectDescription = $.select("<p .project__discription");

    projectTitle.innerText = this.title;
    projectTitle.setAttribute("href", this.link);

    let img = new Image();
    img.onload = function() {
      projectImage.src = image;
    };
    img.onerror = function(e){
      console.error(e);
    };
    img.src = this.image;

    ProjectDescription.innerText = this.description;

    projectBox.appendChild(projectTitle);
    projectImageBox.appendChild(projectImage);
    projectBox.appendChild(projectImageBox);
    projectBox.appendChild(ProjectDescription);
    where.insertBefore(projectBox, $.select(".empty-project")[0]);
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
  console.log("[carregando projetos...]");
  function load(data) {
    for (let project of data.project) {
      let { title, image, description, link } = project;

      let p = new Project(title, image, description, link).createIn(
        "projects_list"
      );
      console.log(p);
    }
  }

  $.requestJSON("/src/projects.json", load);
}
