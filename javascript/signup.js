
function validate(){

    var inputs = document.getElementsByClassName("input");
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    

   if(inputs[0].value == "" && inputs[1].value == ""){
       alert("Please fill in your email and password");
   }

   else if (inputs[0].value == "" || inputs[1].value == "" || !inputs[0].value.match(regx) ){
       if(!inputs[0].value.match(regx)){
        alert("Please fill in your real email");
       }
       else if(inputs[1].value == ""){
           alert("Please fill in your password");
       }
       else{
        alert("Please fill in your email");
       }
   }
    else{
        alert("Sign up successful");

       }
 }
