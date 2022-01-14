
function validate(){

    var inputs = document.getElementsByClassName("input");
   
   if(inputs[0].value == "" && inputs[1].value == ""){
       alert("Please fill in your username and password");
   }

   else if(inputs[0].value == ""){
        alert("Please fill in your username");
    }

    else if(inputs[1].value == ""){
        alert("Please fill in your password");
    }

    else{
        alert("Login successful");

    }
}