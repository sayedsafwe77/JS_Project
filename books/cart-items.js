
window.addEventListener('load',function () {

    if(!JSON.parse(localStorage.getItem("currUser"))){

        alert("Please Login to view your Cart List");
            window.location.href = "login-register.html";


    }

});


var cartTable = document.getElementById("cartTable");
var cartTableBody = document.getElementById("tBody");

window.addEventListener('load',function () {

    var currentUserObject = JSON.parse(localStorage.getItem("currUser"));
    let insertedRow;


    if(JSON.parse(localStorage.getItem("userCartList")) == null){
        cartTable.style.display="";
        document.getElementById("errorMsg").style.display = "inline";

    }
    else{


        var currCartItem = JSON.parse(localStorage.getItem("userCartList"));

        cartTableBody.parentNode.removeChild(cartTableBody);
  
        let tBody = document.createElement("tbody");
        tBody.setAttribute("id", "tBody");
        cartTable.appendChild(tBody);

        for (var temp = 0; temp < currCartItem.length; temp++) {

            if(currCartItem[temp]["User Email"] == currentUserObject[0]["Email"]){

                document.getElementById("errorMsg").style.display = "";
                cartTable.style.display = "inline";

                insertedRow = tBody.insertRow(tBody.length);
                cellProductName = insertedRow.insertCell(0);
                cellProductName.innerHTML = currCartItem[temp]["Product Name"];
                cellFullName = insertedRow.insertCell(1);
                cellFullName.innerHTML = currCartItem[temp]["Product Price"];

            }
      

          }


    }

  });