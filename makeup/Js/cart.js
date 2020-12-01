var productName = document.getElementById("productName");
var prosuctPrice = document.getElementById("productPrice");
var productImage = document.getElementById("productImage");

  var userCart = [];

  document.getElementById("btnCart").onclick= function(event) {

    event.preventDefault();
    var currentUser = JSON.parse(localStorage.getItem("currUser"));
    userCart = JSON.parse(localStorage.getItem("userCartList"));
    
    if(validateCartItems()){
      var cartObject = {
        "User Email": currentUser[0]["Email"],
        "Product Name": productName.innerText,
        "Product Price": productPrice.innerText,
        "Product Image": productImage.value,

    }

    userCart.push(cartObject);
    localStorage.setItem("userCartList", JSON.stringify(userCart));

    }
  };

  function validateCartItems() {
    var exist = true;

    if(JSON.parse(localStorage.getItem("userCartList")) == null){
      userCart = [];
      console.log(JSON.parse(localStorage.getItem("userCartList")));

      return exist;
    }
    else{
      userCart = JSON.parse(localStorage.getItem("userCartList"));
    var currentUserObject = JSON.parse(localStorage.getItem("currUser"));
    for(var temp=0; temp<userCart.length; temp++){
      if(productName.innerText == userCart[temp]["Product Name"] && currentUserObject[0]["Email"] == userCart[temp]["User Email"]){
        console.log(userCart[temp]["User Email"]);
        console.log(currentUserObject[0]["Email"] );
        console.log(userCart[temp]["Product Name"] );
        console.log(productName.innerText);


        alert("You have already added this item to cart");
        exist = false;
        break;
      }
    }    
  }


  return exist;
  }

