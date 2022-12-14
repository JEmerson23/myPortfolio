//node add_project.js

const urlSite = "https://jemerson23.github.io/myPortfolio";

const currentDate = new Date(), date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,
hour = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

const readline = require('readline');
const line = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const confirmSave = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

const project = {
  title: null,
  image: `${urlSite}/src/projects_image/`,
  description: null,
  link: null,
  date: `${date}-${hour}`
};

line.question("adicionar projeto ao portfólio? [y/n]\n",function (answer) {
  if(/[y,ye,yes,ys,ye,Y,s]/i.test(answer)){
    console.log("adicione título,arquivo de imagem,descrição e link.\n");
      
      //title
      line.question("título: ",function(inputTitle){
        project.title = inputTitle.trim();
        //image
        line.question("image: ",function(inputImage) {
          project.image += inputImage.trim();
          //description
          line.question("description: ", function(inputDescription){
            project.description = inputDescription.trim();
            //link
            line.question("link: ",function(inputLink){
              project.link = inputLink.replace(/\s/g,'');
              line.close();
              console.log(JSON.stringify(project))
            });
          });
        });
      });
  } else {
    if(/[n,no,N]/.test(answer))
     console.log(`[ok, sessão encerrada...]`);
    else
     console.error(`[${answer} não é uma resposta válida...]`);
     line.close();
  }
  
});

const projectFiles = require('fs');

line.on('close',function(){
  console.log("file");
  let listOfProjects;
  
  try{
   const data = projectFiles.readFileSync("./projects.json","utf-8");
   
   listOfProjects = JSON.parse(data);
   
   listOfProjects.project.push(project);
   
   let {title,image,description,link} = project;
   
   confirmSave.question(`quer salvar o projeto?\n1| ${title}\n2| ${image}\n3| ${description}\n4| ${link}\nescolha um item para editar ou digite [y].`,function (answer) {
     //editar arquivo
   })
   
  } catch(err){
   console.log(err);
  }
  
  process.exit(0);
});