# [my portfolio](https://jemerson23.github.io/myPortfolio/) - beta
 
## features

* Para adicionar um projeto lista basta adicionar o nome do repositório em uma tag ```a```
 que esteja dentro de uma tag com class "project".  
_EX.:_  
 ```
  <li class ="project">
   <a>myPortfolio</a>
  </li>
```

* Para adicionar um novo contato adicione um objeto com os seguintes elementos na array "contact" em ```/src/contacts.json```   
 ```
   { 
    "link": "link da sua rede social",
    "icone": "icone do site https://fontawesome.com/",
    "label": "nome da rede social"
   }
 ```  