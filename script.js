// Assignment Code

//global vars
var generateBtn = document.querySelector("#generate");

var avChars = []

//global functions
function genCharSet(start, end) {
  var a = [], i = start.charCodeAt(0), j = end.charCodeAt(0);
  for (; i <= j; ++i) {
      a.push(String.fromCharCode(i));
  }
  return a;
}

function generatePassword() {
  var a = [];
  var pw = ""
  var length = window.prompt("How many characters between 8 and 128?")
  length = Number(length)
  console.log(length)
  if (length < 8 || length > 128 || NaN) {
    window.alert("Invalid length selection, please try again.")
    pw = "Invalid length selection, please try again.";
  }
  else {
    var addLC = window.confirm("Would you like lower case characters?")
      if (addLC) {
        a = a.concat(genCharSet("a", "z"))
      }
    var addUC = window.confirm("Would you like upper case characters?")
      if (addUC) {
        a = a.concat(genCharSet("A", "Z"))
      }
    var addSC = window.confirm("Would you like special characters?")
      if (addSC) {
        a = a.concat(genCharSet("!", "/"))
      }
    var addNum = window.confirm("Would you like numbers?")
      if (addNum) {
        a = a.concat(genCharSet("0", "9"))
      }
    var i = 0
    for (; i < length; i++){
      var b = Math.floor(Math.random() * a.length);
      pw += a[b];
    }
    if (a.length == 0) {
      window.alert("Unable to generate password without at least one character type, please try again.")
      pw = "Unable to generate password without at least one character type, please try again."
    }
  }
  return pw;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
