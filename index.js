var readlineSync = require("readline-sync");
var score = 0;
var chalk = require("chalk")
var log = console.log 

log(chalk.green("Are you a Naruto Fan? Let's find out!\n"));
var username = readlineSync.question(chalk.magenta("Please Enter Your Name\n")) ;
console.log(chalk.red("Hi, " + username + " Enter a/b/c/d for each question to answer\n"))

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer){
    console.log("You are Right")
    score = score + 1;
    
  }else{
    console.log("You are Wrong")
  }
  console.log(chalk.blue("currentscore:" + score))
}

var players = [{
  
}]

var questions = [{
  question:"1)Which of these is another word for ninja?\n a: Genjutsu\n b: Shinobi\n c: Arigato\n d: Gelato\n" , 
  answer:"b"
}, 
{
  question:"2)What team is Kakashi the leader of?\n a: Team 7\n b: Twelve Ninja Guardian\n c: Taka\n d: Team Rocket\n", 
  answer:"a"
}, 
{
  question:"3)What is the village where Naruto lives called?\n a: Sunagakure\n b: Kyuubigakure\n c: Uzumagakure\n d: Konohagakure\n", 
  answer:"d"
  }, 
  { 
    question:"4)Which is the most powerful Kekkei Genkai?\n a: Sharingan\n b: Byakugan\n c: Rinnegan\n", 
    answer:"c"
}, 
{
  question:"5)Which Hokage sealed the Nine Tailed Fox inside Naruto?\n a: First Hokage\n b: Second Hokage\n c: Third Hokage\n d: Fourth Hokage\n", answer:"d"
}, 
{
  question:"6)Which character can only use Taijutsu?\n a: Naruto\n b: Neji\n c: Sasuke\n d: Rock Lee\n", 
  answer:"d"
}, 
{
  question:"7)Sasuke's goal is to gain enough power to kill whom?\n a: Naruto Uzumaki\n b: Neji Hyuuga\n c: Itachi Ucchiha\n d: Hiruzen Sarutobi\n", 
  answer:"c"
}, 
{
  question:"8)D-rank missions are usually given to what level of Shinobi?\n a: Genin\n b: Chunin\n c:Jonin\n d: Hokage\n", 
  answer:"a"
}, 
{
  question:"9)Every member of Akatsuki is a what?\n a: Swordsman\n b: S-Rank Criminal\n c: Kage\n d: Kunoichi\n", 
  answer:"b"
},
{
  question:"10)Sharigan is what type of jutsu?\n a: Taijutsu\n b: Dojutsu\n c: Ninjutsu\n d: Genjutsu\n", 
  answer: "b"
}


  
  ]
  
  for(i=0; i<questions.length; i++){
    var absoluteQuestion = questions[i]
    play(absoluteQuestion.question,absoluteQuestion.answer)
    console.log("-----------------------------------------")
  }
  
  console.log("Congrats! You've finished the game.\n You Scored:" + score )