
function validate(){

    var inputs = document.getElementsByClassName("input");
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

   if(inputs[0].value == "" && inputs[1].value == ""){
       alert("Please fill in your email and password");
   }

   else {
       if(inputs[0].value.match(regx)){
        alert("correct password");
       }
       else{
           alert("incorrect password");
       }
   }
}