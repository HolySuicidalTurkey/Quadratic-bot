const inq = require('inquirer');

var howmany = {
      type: 'validate',
      name: 'coamt',
      message: 'Does this problem have 3 coefficients?',
}

var valprompt1 = {
    type: 'input',
    name: 'valone',
    message: "What is the value of the first coefficient?",
}
var valprompt2 = {
    type: 'input',
    name: 'valtwo',
    message: "What is the value of the second coefficient?",
}
var valprompt3 = {
    type: 'input',
    name: 'valthree',
    message: "What is the value of the third coefficient?",
}

var gcd = function(a, b) {
 if (b == 0) {
  return a;
 }
 return gcd(b, a % b);
};

inq.prompt(howmany).then((answers) => {
 if(answers.coamt == true){
       inq.prompt(valprompt1).then((answers) => {
	      var value1 = answers.valone;
       })
       inq.prompt(valprompt2).then((answers) => {
	      var value2 = answers.valtwo;
       })
       inq.prompt(valprompt3).then((answers) => {
	      var value3 = answers.valthree;
       })
  var greatest = (gcd(value1,value2,value3));
  console.log(greatest);
       
 }
      
      
      
 if(answers.coamt == false){
       inq.prompt(valprompt1).then((answers) => {
	      var value1 = answers.valone;
       })
       inq.prompt(valprompt2).then((answers) => {
	      var value2 = answers.valtwo;
       })
  var greatest = (gcd(value1,value2));
  console.log(greatest);
       
 }
})
