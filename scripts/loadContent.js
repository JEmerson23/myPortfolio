function Contact(link,icon,label) {
 
 const contactBox = document.createElement("div"),
 contactLink = document.createElement("a"),
 contactIcon = document.createElement("i"),
 contactLabel = document.createElement("i");
  
 contactIcon.setAttribute('class',`${icon} contact__icon`);
 contactLink.setAttribute('href',link);
 contactLink.setAttribute('target','_blank');

 contactLabel.textContent = label;
  
 contactBox.setAttribute('class','contact');
 contactLink.setAttribute('class','contact__link');
 contactLabel.setAttribute('class','contact__label');

 this.addIn = (where) => {
    contactBox.appendChild(contactIcon);
    contactBox.appendChild(contactLink);
    contactBox.appendChild(contactLabel);
    where.appendChild(contactBox);
 };
 
}

export function loadContacts(){
    fetch('/src/contacts.json')
    .then(response => response.json())
    .then(data => {
    for(let i = 0; i < data.contact.length; i++){
      
      let {link, icon, label} = data.contact[i];
      
      if(!link || !icon || !label)continue;
      
      let contact = new Contact(link,icon,label).addIn(document.getElementById("contacts_list"));
   }
    })
}