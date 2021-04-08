const inq = require('inquirer');

var wutyouwantprompt = {
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
var gcd = function(a, b) {
 if (b == 0) {
  return a;
 }
 return gcd(b, a % b);
};

inq.prompt(wutyouwantprompt).then((answers) => {
 if(answers.coamt == true){
  var greatest = (gcd(valone,valtwo));
  console.log(greatest)
 }
//11
