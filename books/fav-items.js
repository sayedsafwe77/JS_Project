var favTable = document.getElementById("favTable");
var favTableBody = document.getElementById("tBody");

window.addEventListener('load',function () {

    var currentUserObject = JSON.parse(localStorage.getItem("currUser"));
    let insertedRow;


    if(JSON.parse(localStorage.getItem("userFavList")) == null){
        favTable.style.display="";
        document.getElementById("errorMsg").style.display = "inline";

    }
    else{


        var currFavoriteItem = JSON.parse(localStorage.getItem("userFavList"));

        favTableBody.parentNode.removeChild(favTableBody);
  
        let tBody = document.createElement("tbody");
        tBody.setAttribute("id", "tBody");
        favTable.appendChild(tBody);

        for (var temp = 0; temp < currFavoriteItem.length; temp++) {

            if(currFavoriteItem[temp]["User Email"] == currentUserObject[0]["Email"]){

                document.getElementById("errorMsg").style.display = "";
                favTable.style.display = "inline";

                insertedRow = tBody.insertRow(tBody.length);
                cellProductName = insertedRow.insertCell(0);
                cellProductName.innerHTML = currFavoriteItem[temp]["Product Name"];
                cellFullName = insertedRow.insertCell(1);
                cellFullName.innerHTML = currFavoriteItem[temp]["Product Price"];

            }
      

          }


    }

  });