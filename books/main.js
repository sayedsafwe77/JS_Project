var loginForm = document.getElementById("login");  
var registerForm = document.getElementById("register");  
var btnSwitch = document.getElementById("btn");
var btnCart = document.getElementById("btnCart");

        
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


document.getElementById("btnRegister").onclick = function () {
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
      location.reload();
    }
  } else {
    alert("Please fill all information");
  }
};

function validateRegister() {
  let validateRegisterFlag = true;


  if (txtFullName.value == "") {
    validateRegisterFlag = false;
  }
  if (txtEmail.value == "") {
    validateRegisterFlag = false;
  }
  if (txtPassword.value == "") {
    validateRegisterFlag = false;
  }


  return validateRegisterFlag;
}

document.getElementById("btnLogin").onclick = function (event) {
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
                        location.reload();
                }
                };

        }
    
    } 
  };

function validateLogin() {
    let validateLoginFlag = true;
  
    if (txtLoginEmail.value == "") {
        validateLoginFlag = false;
    }
    if (txtLoginPassword.value == "") {
        validateLoginFlag = false;
    }
  
  
    return validateLoginFlag;
  }

function loginLegal() {
  let exist = true;
//   var re = new RegExp("^([0-9]{3}-[0-9]{7})$");
  var currentUserObject = JSON.parse(localStorage.getItem("userList"));

      for (var temp = 0; temp < currentUserObject.length; temp++) {
        if (txtLoginEmail.value == currentUserObject[temp]["Email"]) {
            if(txtLoginPassword.value == currentUserObject[temp]["Password"]){
                return exist;
            }
        }

      }
      alert("Wrong Email Or Password");
      exist = false;
      return exist;
    
    }


function uniqueID() {
    let unique = true;
  //   var re = new RegExp("^([0-9]{3}-[0-9]{7})$");
    var currentUserObject = JSON.parse(localStorage.getItem("userList"));
  
    if (localStorage.length >= 0) {
      if (currentUserObject == null) {
        unique = true;
      } else {
        for (var temp = 0; temp < currentUserObject.length; temp++) {
          if (txtEmail.value == currentUserObject[temp]["Email"]) {
            alert("Email already exists, Enter another Email");
            unique = false;
          }
        }
      }
    }
  
    return unique;
  }
  





// document.getElementById("btnReset").onclick = function () {
//   txtID.value = "";
//   txtFullName.value = "";
//   txtEmail.value = "";
//   txtPhone.value = "";
//   txtAge.value = "";
// };

// document.getElementById("btnDisplay").onclick = function () {
//   if (localStorage.length > 0) {
//     var currentTable = document.getElementById("infoTable");
//     var currentTBody = document.getElementById("infoTableBody");
//     currentTBody.parentNode.removeChild(currentTBody);

//     let tBody = document.createElement("tbody");
//     tBody.setAttribute("id", "infoTableBody");
//     var currentTable = document.getElementById("infoTable");
//     currentTable.appendChild(tBody);
//     let insertedRow;

//     document.getElementById("infoTable").style.display = "inline";
//     document.getElementById("errMsg").style.display = "";
//     var currentUserObject = JSON.parse(localStorage.getItem("userList"));

//     for (var temp = 0; temp < currentUserObject.length; temp++) {
//       /*       console.log(JSON.parse(localStorage.getItem(localStorage.key(temp))));
//       console.log(currentUserObject["ID"]); */

//       insertedRow = tBody.insertRow(tBody.length);
//       cellID = insertedRow.insertCell(0);
//       cellID.innerHTML = currentUserObject[temp]["ID"];
//       cellFullName = insertedRow.insertCell(1);
//       cellFullName.innerHTML = currentUserObject[temp]["Full Name"];
//       cellEmail = insertedRow.insertCell(2);
//       cellEmail.innerHTML = currentUserObject[temp]["Email"];
//       cellPhone = insertedRow.insertCell(3);
//       cellPhone.innerHTML = currentUserObject[temp]["Telephone"];
//       cellAge = insertedRow.insertCell(4);
//       cellAge.innerHTML = currentUserObject[temp]["Age"];
//     }
//   } else {
//     document.getElementById("infoTable").style.display = "";
//     document.getElementById("errMsg").style.display = "inline";
//   }
// };
