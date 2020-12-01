
window.addEventListener('load',function () {

    if(JSON.parse(localStorage.getItem("currUser"))){

        var currUser = JSON.parse(localStorage.getItem("currUser"));
        document.getElementById("NameTop").textContent = currUser[0]["Full Name"];
        document.getElementById("displayName").textContent = currUser[0]["Full Name"];
        document.getElementById("displayEmail").textContent = currUser[0]["Email"];


    }
    else{
            alert("Please login to view user profile");
            window.location.href = "login-register.html";
        }



});

