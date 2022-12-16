//node add_project.js

const urlSite = "https://jemerson23.github.io/myPortfolio";

const yes = new RegExp(/[y,ye,yes,ys,ye,Y,s]/i), no = new RegExp(/[n,no,N]/i);

const currentDate = new Date();

const readline = require('readline');
const file = require('fs');
//#------------#

const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,
hour = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

const line = readline.createInterface({
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

function saveProject(){
  line.question("salvar projeto?",function(answer){
    let listOfProjects;
    
    try {
     const projectsData = file.readFileSync("./projects.json","utf-8");
     
     listOfProjects = JSON.parse(projectsData);
     listOfProjects.project.push(project);
     
    } catch(err){
      console.error(err);
    }
    
    try{
      const saveFile = file.writeFileSync("./projects.json",JSON.stringify(listOfProjects));
    }catch(err){
      console.error(err);
    }
    
    line.close();
  });
}

line.question("adicionar projeto ao portfólio? [y/n]\n",function (answer) {
  if(yes.test(answer)){
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
              saveProject();
            });
          });
        });
      });
  } else {
    if(no.test(answer))
     console.log(`[ok, sessão encerrada...]`);
    else
     console.error(`[${answer} não é uma resposta válida...]`);
    line.close();
  }
  
});

line.on('close',function(){
  console.log(`[sessão concluída...]`);
  process.exit(0);
});