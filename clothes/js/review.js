var submitreview = document.getElementById("submitreview");
var comment = document.getElementById("comment");
var productName = document.getElementById("productName");

var userComment = [];
var currUserArr = [];
var currentUserObject = [];

function validateComment() {
    let validateRegisterFlag = true;

    if (comment.value == "") {
        validateRegisterFlag = false;
        alert("Fill comment feild");

    }
    else{
        return validateRegisterFlag;
    }
}


window.addEventListener('load', () => {

  if(JSON.parse(localStorage.getItem("userComments")) == null){
    document.getElementById("errorMsg").style.display = "inline";
  }
  else{
    document.getElementById("infoTable").style.display = "inline";

    document.getElementById("errorMsg").style.display = "";
    var currentCommentObject = JSON.parse(localStorage.getItem("userComments"));

    if (currentCommentObject.length > 0) {

      }
      var currentTBody = document.getElementById("infoTableBody");

      let insertedRow;
  
      for (var temp = 0; temp < currentCommentObject.length; temp++) {
        if(currentCommentObject[temp]["Product Name"] == productName.textContent){

        insertedRow = currentTBody.insertRow(currentTBody.length);
        cellname = insertedRow.insertCell(0);
        cellname.innerHTML = currentCommentObject[temp]["name"];
        cellpara = insertedRow.insertCell(1);
        cellpara.innerHTML = currentCommentObject[temp]["para"];
        cellpara = insertedRow.insertCell(2);
        cellpara.innerHTML = currentCommentObject[temp]["Product Name"];
      }}

  }



});
document.getElementById("submitreview").onclick = function (event) {

    event.preventDefault();

    if(JSON.parse(localStorage.getItem("currUser")) == null){
      alert("Please Login to add comments");
    }


    else{
      var currentUserObject = JSON.parse(localStorage.getItem("currUser"));
    
    if(JSON.parse(localStorage.getItem("userComments")) == null){
      var currentCommentObject = [];
      document.getElementById("errorMsg").style.display = "";

    }else{
      var currentCommentObject = JSON.parse(localStorage.getItem("userComments"));

    }


    if (validateComment()) {
      document.getElementById("infoTable").style.display = "inline";


        var userObject = {
          name: currentUserObject[0]["Full Name"],
          para: comment.value,
          "Product Name": productName.textContent
      };
  

    currentCommentObject.push(userObject);
    localStorage.setItem("userComments", JSON.stringify(currentCommentObject));

      var currentTBody = document.getElementById("infoTableBody");

      let insertedRow;
  
        insertedRow = currentTBody.insertRow(currentTBody.length);
        cellname = insertedRow.insertCell(0);
        cellname.innerHTML = currentUserObject[0]["Full Name"];
        cellpara = insertedRow.insertCell(1);
        cellpara.innerHTML = comment.value;
        cellpara = insertedRow.insertCell(2);
        cellpara.innerHTML = productName.textContent;


        comment.value ="";  

    }  
  }
};