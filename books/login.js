var loginForm = document.getElementById("login");  
var registerForm = document.getElementById("register");  
var btnSwitch = document.getElementById("btn");


        
        function register(){
            loginForm.style.left = "-400px";
            registerForm.style.left = "50px";
            btnSwitch.style.left = "110px";
        }
        
        function login(){
            loginForm.style.left = "50px";
            registerForm.style.left = "450px";
            btnSwitch.style.left = "0px";
        }





var txtFullName = document.getElementById("txtFullName");
var txtEmail = document.getElementById("txtEmail");
var txtPassword = document.getElementById("txtPassword");
var termsChecked = document.getElementById("acceptChecked");
var txtLoginEmail = document.getElementById("txtLoginEmail");
var txtLoginPassword = document.getElementById("txtLoginPassword");

var userArr=[];
var currUserArr =[];
var currentUserObject = [];

window.addEventListener('load',function(){

    if(localStorage.length == 0){
        currentUserObject = []
    }else{
  currentUserObject = JSON.parse(localStorage.getItem("userList"));
  for(var temp=0; temp<currentUserObject.length; temp++){
    var userObject = {
      "Full Name": currentUserObject[temp]["Full Name"],
      Email: currentUserObject[temp]["Email"],
      Password: currentUserObject[temp]["Password"],
    };
    userArr.push(userObject);
  }
}
});


document.getElementById("btnRegister").onclick = function (event) {

  event.preventDefault();

  if (validateRegister()) {
    if (localStorage.length == 0) {
      userArr = [];
    }
    if (uniqueID()) {
      var userObject = {
        "Full Name": txtFullName.value,
        Email: txtEmail.value,
        Password: txtPassword.value,
      };

      userArr.push(userObject);
      localStorage.setItem("userList", JSON.stringify(userArr));
      
      txtFullName.value ="";
      txtEmail.value ="";
      txtPassword.value = "";
      termsChecked.checked = false;
      
    }
  }
  
};

function validateRegister() {
  let validateRegisterFlag = true;
  var patternEmail = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/;
  var patternName = /^[a-zA-Z0-9_ ]+$/;
  var restrictedPattern = /^\w+( \w+)*$/;

  if (txtFullName.value == "" || txtEmail.value == "" || txtPassword.value == "") {
    validateRegisterFlag = false;
    document.getElementById("emptyEmailOrPasswordError").style.display = "";
    document.getElementById("wrongEmailOrPasswordError").style.display = "";
    document.getElementById("feildsRequiredError").style.display = "inline-block";
    document.getElementById("nameLengthError").style.display = "";
    document.getElementById("nameLettersError").style.display = "";
    document.getElementById("emailPatternError").style.display = "";
    document.getElementById("nameSpacesError").style.display = "";
    document.getElementById("passwordError").style.display = "";
    document.getElementById("emailExistsError").style.display = "";
    document.getElementById("registerSuccess").style.display = "";
    document.getElementById("acceptTermsError").style.display = "";
  }
  else if(txtFullName.value.length < 3){
    validateRegisterFlag = false;
    document.getElementById("emptyEmailOrPasswordError").style.display = "";
    document.getElementById("wrongEmailOrPasswordError").style.display = "";
    document.getElementById("feildsRequiredError").style.display = "";
    document.getElementById("nameLengthError").style.display = "inline-block";
    document.getElementById("nameLettersError").style.display = "";
    document.getElementById("emailPatternError").style.display = "";
    document.getElementById("nameSpacesError").style.display = "";
    document.getElementById("passwordError").style.display = "";
    document.getElementById("emailExistsError").style.display = "";
    document.getElementById("registerSuccess").style.display = "";
    document.getElementById("acceptTermsError").style.display = "";
  }
  else if(!patternName.test(txtFullName.value)){
    validateRegisterFlag = false;
    document.getElementById("emptyEmailOrPasswordError").style.display = "";
    document.getElementById("wrongEmailOrPasswordError").style.display = "";
    document.getElementById("feildsRequiredError").style.display = "";
    document.getElementById("nameLengthError").style.display = "";
    document.getElementById("nameLettersError").style.display = "inline-block";
    document.getElementById("emailPatternError").style.display = "";
    document.getElementById("nameSpacesError").style.display = "";
    document.getElementById("passwordError").style.display = "";
    document.getElementById("emailExistsError").style.display = "";
    document.getElementById("registerSuccess").style.display = "";
    document.getElementById("acceptTermsError").style.display = "";
  }
  else if(!restrictedPattern.test(txtFullName.value)){
    validateRegisterFlag = false;
    document.getElementById("emptyEmailOrPasswordError").style.display = "";
    document.getElementById("wrongEmailOrPasswordError").style.display = "";
    document.getElementById("feildsRequiredError").style.display = "";
    document.getElementById("nameLengthError").style.display = "";
    document.getElementById("nameLettersError").style.display = "";
    document.getElementById("emailPatternError").style.display = "";
    document.getElementById("nameSpacesError").style.display = "inline-block";
    document.getElementById("passwordError").style.display = "";
    document.getElementById("emailExistsError").style.display = "";
    document.getElementById("registerSuccess").style.display = "";
    document.getElementById("acceptTermsError").style.display = "";
  }
  else if(!patternEmail.test(txtEmail.value)){
    validateRegisterFlag = false;
    document.getElementById("emptyEmailOrPasswordError").style.display = "";
    document.getElementById("wrongEmailOrPasswordError").style.display = "";
    document.getElementById("feildsRequiredError").style.display = "";
    document.getElementById("nameLengthError").style.display = "";
    document.getElementById("nameLettersError").style.display = "";
    document.getElementById("emailPatternError").style.display = "inline-block";
    document.getElementById("nameSpacesError").style.display = "";
    document.getElementById("passwordError").style.display = "";
    document.getElementById("emailExistsError").style.display = "";
    document.getElementById("registerSuccess").style.display = "";
    document.getElementById("acceptTermsError").style.display = "";
  }
  else if(txtPassword.value.length < 8){
    validateRegisterFlag = false;
    document.getElementById("emptyEmailOrPasswordError").style.display = "";
    document.getElementById("wrongEmailOrPasswordError").style.display = "";
    document.getElementById("feildsRequiredError").style.display = "";
    document.getElementById("nameLengthError").style.display = "";
    document.getElementById("nameLettersError").style.display = "";
    document.getElementById("emailPatternError").style.display = "";
    document.getElementById("nameSpacesError").style.display = "";
    document.getElementById("passwordError").style.display = "inline-block";
    document.getElementById("emailExistsError").style.display = "";
    document.getElementById("registerSuccess").style.display = "";
    document.getElementById("acceptTermsError").style.display = "";
  }
  else if(!termsChecked.checked){
    validateRegisterFlag = false;
    document.getElementById("emptyEmailOrPasswordError").style.display = "";
    document.getElementById("wrongEmailOrPasswordError").style.display = "";
    document.getElementById("feildsRequiredError").style.display = "";
    document.getElementById("nameLengthError").style.display = "";
    document.getElementById("nameLettersError").style.display = "";
    document.getElementById("emailPatternError").style.display = "";
    document.getElementById("nameSpacesError").style.display = "";
    document.getElementById("passwordError").style.display = "";
    document.getElementById("emailExistsError").style.display = "";
    document.getElementById("registerSuccess").style.display = "";
    document.getElementById("acceptTermsError").style.display = "inline-block";
  }else{

    document.getElementById("emptyEmailOrPasswordError").style.display = "";
    document.getElementById("wrongEmailOrPasswordError").style.display = "";
    document.getElementById("feildsRequiredError").style.display = "";
    document.getElementById("nameLengthError").style.display = "";
    document.getElementById("nameLettersError").style.display = "";
    document.getElementById("emailPatternError").style.display = "";
    document.getElementById("nameSpacesError").style.display = "";
    document.getElementById("passwordError").style.display = "";
    document.getElementById("emailExistsError").style.display = "";
    document.getElementById("registerSuccess").style.display = "inline-block";
    document.getElementById("acceptTermsError").style.display = "";

    return validateRegisterFlag;


  }




}

document.getElementById("btnLogin").onclick = function (event) {
    event.preventDefault();
    if (validateLogin()) {
            if (loginLegal()) {
            currUserArr = [];
            for(var temp=0; temp<currentUserObject.length; temp++){
                if (txtLoginEmail.value == currentUserObject[temp]["Email"]){
                    var userObject = {
                        "Full Name": currentUserObject[temp]["Full Name"],
                        Email: currentUserObject[temp]["Email"],
                        Password: currentUserObject[temp]["Password"],
                        };

                        currUserArr.push(userObject);
                        localStorage.setItem("currUser", JSON.stringify(currUserArr));
                };


        }
        window.location.href = ("books.html");
        } 
  }

};

function validateLogin() {
    let validateLoginFlag = true;
  
    if (txtLoginEmail.value == "" || txtLoginPassword.value == "") {
      validateLoginFlag = false;
      document.getElementById("emptyEmailOrPasswordError").style.display = "inline-block";
      document.getElementById("wrongEmailOrPasswordError").style.display = "";
      document.getElementById("feildsRequiredError").style.display = "";
      document.getElementById("nameLengthError").style.display = "";
      document.getElementById("nameLettersError").style.display = "";
      document.getElementById("emailPatternError").style.display = "";
      document.getElementById("nameSpacesError").style.display = "";
      document.getElementById("passwordError").style.display = "";
      document.getElementById("emailExistsError").style.display = "";
      document.getElementById("registerSuccess").style.display = "";
      document.getElementById("acceptTermsError").style.display = "";
    }

  
  
    return validateLoginFlag;
  }

function loginLegal() {
  let exist = true;

  var currentUserObject = JSON.parse(localStorage.getItem("userList"));

      for (var temp = 0; temp < currentUserObject.length; temp++) {
        if (txtLoginEmail.value == currentUserObject[temp]["Email"]) {
            if(txtLoginPassword.value == currentUserObject[temp]["Password"]){
                return exist;
            }
        }

      }
      document.getElementById("emptyEmailOrPasswordError").style.display = "";
      document.getElementById("wrongEmailOrPasswordError").style.display = "inline-block";
      document.getElementById("feildsRequiredError").style.display = "";
      document.getElementById("nameLengthError").style.display = "";
      document.getElementById("nameLettersError").style.display = "";
      document.getElementById("emailPatternError").style.display = "";
      document.getElementById("nameSpacesError").style.display = "";
      document.getElementById("passwordError").style.display = "";
      document.getElementById("emailExistsError").style.display = "";
      document.getElementById("registerSuccess").style.display = "";
      document.getElementById("acceptTermsError").style.display = "";
      exist = false;
      return exist;
    
    }
    


function uniqueID() {
    let unique = true;
    var currentUserObject = JSON.parse(localStorage.getItem("userList"));
  
    if (localStorage.length >= 0) {
      if (currentUserObject == null) {
        unique = true;
      } else {
        for (var temp = 0; temp < currentUserObject.length; temp++) {
          if (txtEmail.value == currentUserObject[temp]["Email"]) {
            document.getElementById("emptyEmailOrPasswordError").style.display = "";
            document.getElementById("wrongEmailOrPasswordError").style.display = "";
            document.getElementById("feildsRequiredError").style.display = "";
            document.getElementById("nameLengthError").style.display = "";
            document.getElementById("nameLettersError").style.display = "";
            document.getElementById("emailPatternError").style.display = "";
            document.getElementById("nameSpacesError").style.display = "";
            document.getElementById("passwordError").style.display = "";
            document.getElementById("emailExistsError").style.display = "inline-block";
            document.getElementById("registerSuccess").style.display = "";
            document.getElementById("acceptTermsError").style.display = "";
            unique = false;
          }
        }
      }
    }
  
    return unique;
  }

