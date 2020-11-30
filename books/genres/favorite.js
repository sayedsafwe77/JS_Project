var productName = document.getElementById("productName");
var prosuctPrice = document.getElementById("productPrice");
var productImage = document.getElementById("productImage");

  var userFav = [];

  document.getElementById("btnFav").onclick= function(event) {

    event.preventDefault();
    var currentUser = JSON.parse(localStorage.getItem("currUser"));
    userFav = JSON.parse(localStorage.getItem("userFavoriteList"));
    
    if(validateFavoriteItems()){
      var favoriteObject = {
        "User Email": currentUser[0]["Email"],
        "Product Name": productName.innerText,
        "Product Price": productPrice.innerText,
        "Product Image": productImage.value,

    }

    userFav.push(favoriteObject);
    localStorage.setItem("userFavList", JSON.stringify(userFav));

    }
  };

  function validateFavoriteItems() {
    var exist = true;

    if(JSON.parse(localStorage.getItem("userFavList")) == null){
        userFav = [];
      console.log(JSON.parse(localStorage.getItem("userFavList")));

      return exist;
    }
    else{
        userFav = JSON.parse(localStorage.getItem("userFavList"));
    var currentUserObject = JSON.parse(localStorage.getItem("currUser"));
    for(var temp=0; temp<userFav.length; temp++){
      if(productName.innerText == userFav[temp]["Product Name"] && currentUserObject[0]["Email"] == userFav[temp]["User Email"]){
        console.log(userFav[temp]["User Email"]);
        console.log(currentUserObject[0]["Email"] );
        console.log(userFav[temp]["Product Name"] );
        console.log(productName.innerText);


        alert("You have already added this item to favorites");
        exist = false;
        break;
      }
    }    
  }


  return exist;
  }

