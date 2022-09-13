import * as $ from "https://jemerson23.github.io/myPortfolio/lib/abstractions.js";

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

function Project() {
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
  $.requestJSON("https://jemerson23.github.io/myPortfolio/src/contacts.json",load);
}

export function loadProjects() {
  function load(data) {
    const projects = $.select(".project");

    //intera por todos os projetos
    for (let i = 0; i < projects.length; i++) {
      //verifica se o projeto tem nome/link
      if (projects[i].hasChildNodes) {
        //pega todos os elementos do projeto
        let childs = projects[i].childNodes;

        if (childs.length == 0) continue;

        //procura pela tag <a>
        const name = (function (childs) {
          for (let c = 0; c < childs.length; c++) {
            if (childs[c].localName === "a") return childs[c];
          }
          return false;
        })(childs);

        name.setAttribute("href", `${data.githubPage}${name.innerText}`);

        const project = new Project(data, name, projects[i]);
      }
    }
  }
  $.requestJSON(
    "https://jemerson23.github.io/myPortfolio/src/projects.json",
    load
  );
}
