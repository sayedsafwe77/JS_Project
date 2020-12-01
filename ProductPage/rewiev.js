// function formdata() {

//     var name = document.getElementById("name").value;
//     var reviewname = document.getElementById("reviewname").innerHTML;


//     var paragraph = document.getElementById("para").value;
//     var review = document.getElementById("review").innerHTML;
//     document.getElementById("review").innerHTML = name.concat(" review is ".concat(paragraph));

// }






var submitreview = document.getElementById("submitreview");


var name = document.getElementById("name");
var email = document.getElementById("email");
var para = document.getElementById("para");



var userArr = [];
var currUserArr = [];
var currentUserObject = [];

window.addEventListener('load', function () {

    if (localStorage.length == 0) {
        currentUserObject = []
    } else {
        currentUserObject = JSON.parse(localStorage.getItem("userList"));
        for (var temp = 0; temp < currentUserObject.length; temp++) {
            var userObject = {
                name: currentUserObject[temp]["name"],
                email: currentUserObject[temp]["email"],
                para: currentUserObject[temp]["para"],
            };
            userArr.push(userObject);
        }
    }
});

// var table = document.getElementById("mytable");
// var row, cell1, cell2, i;
document.getElementById("submitreview").onclick = function () {
    if (validateRegister()) {
        if (localStorage.length == 0) {
            userArr = [];
        }
        if (uniqueID()) {
            var userObject = {
                name: name.value,
                email: email.value,
                para: para.value,
            };

            userArr.push(userObject);
            localStorage.setItem("userList", JSON.stringify(userArr));
            location.reload();










                // row = table.insertRow(1);
                // cell1 = row.insertCell(0);
                // cell2 = row.insertCell(1);

                // cell1.innerHTML = name.value;
                // cell2.innerHTML = para.value;
            





        }
    } else {
        alert("Please fill all information");
    }
};

function validateRegister() {
    let validateRegisterFlag = true;


    if (name.value == "") {
        validateRegisterFlag = false;
    }
    if (email.value == "") {
        validateRegisterFlag = false;
    }
    if (para.value == "") {
        validateRegisterFlag = false;
    }


    return validateRegisterFlag;
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
                if (email.value == currentUserObject[temp]["email"]) {
                    alert("Email already exists, Enter another Email");
                    unique = false;
                }
            }
        }
    }

    return unique;
}



document.getElementById("btnDisplay").onclick = function () {
    if (localStorage.length > 0) {
      var currentTable = document.getElementById("infoTable");
      var currentTBody = document.getElementById("infoTableBody");
      currentTBody.parentNode.removeChild(currentTBody);
  
      let tBody = document.createElement("tbody");
      tBody.setAttribute("id", "infoTableBody");
      var currentTable = document.getElementById("infoTable");
      currentTable.appendChild(tBody);
      let insertedRow;
  
      document.getElementById("infoTable").style.display = "inline";
      document.getElementById("errMsg").style.display = "";
      var currentUserObject = JSON.parse(localStorage.getItem("userList"));
  
      for (var temp = 0; temp < currentUserObject.length; temp++) {
     
        insertedRow = tBody.insertRow(tBody.length);
        cellname = insertedRow.insertCell(0);
        cellname.innerHTML = currentUserObject[temp]["name"];
        cellpara = insertedRow.insertCell(1);
        cellpara.innerHTML = currentUserObject[temp]["para"];
      }
    } else {
      document.getElementById("infoTable").style.display = "";
      document.getElementById("errMsg").style.display = "inline";
    }
  };
  
