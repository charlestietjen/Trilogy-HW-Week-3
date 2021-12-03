// Assignment Code

//global vars
var generateBtn = document.querySelector("#generate");

var avChars = []

//global functions
//multi-purpose function for filling a requested array with characters between two unicode values
function genCharSet(start, end) {
  var a = [], i = start.charCodeAt(0), j = end.charCodeAt(0);
  for (; i <= j; ++i) {
      a.push(String.fromCharCode(i));
  }
  return a;
}

function generatePassword() {
  //declare a blank array for filling with characters
  var a = [];
  //declare a blank string to return later
  var pw = ""
  //ask the user how many characters they want their password to be then convert their entry to a number type for validation
  var length = window.prompt("How many characters between 8 and 128?")
  length = Number(length)
  //console.log(length)
  //If the desired characters are outside of acceptable parameters or not a number show an alert box w/an error and set the pw string to the error also
  if (length < 8 || length > 128 || NaN) {
    window.alert("Invalid length selection, please try again.")
    pw = "Invalid length selection, please try again.";
  }
  //else we run through our confirmation prompts and append each new generated character set array to the a array
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
    //We run a for loop "length" number of times, every cycle we use math.random to grab a random character from the a array and add it to the pw string
    var i = 0
    for (; i < length; i++){
      var b = Math.floor(Math.random() * a.length);
      pw += a[b];
    }
    //if the length of a is 0 then the user declined every type of character, show an error alert and set the pw to the same error message
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
