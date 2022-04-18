

 var submit=document.getElementById("submit");
 var nameSpan1=document.getElementById("nameSpan1");
 var nameSpan2=document.getElementById("nameSpan2");
 var fName=document.getElementById("fname");
 var lName=document.getElementById("lname");
 var email=document.getElementById("email");
 var emailSpan=document.getElementById("emailSpan");
 var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;           
 var password1=document.getElementById("password1");
 var passwordSpan1=document.getElementById("passwordSpan1");
 var password2=document.getElementById("password2");
 var passwordSpan2=document.getElementById("passwordSpan2");

 function validateForm() {
 var res=true;

  if (fName.value === ""|| isFinite(fName.value)) {
    nameSpan1.style.display="inline";

    res = false;
  }
  else
  {
    nameSpan1.style.display="none";
  res=true;

  }


  
  if (lName.value === ""|| isFinite(lName.value)) {
    nameSpan2.style.display="inline";

    res = false;
  }
  else
  {
   nameSpan1.style.display="none";

  }
  

  if(!(email.value.match(mailFormat)))
  {
   emailSpan.style.display="inline";
   res = false;
   }
  else{
    emailSpan.style.display="none";
   

  }
   if(password1.value==""|| password1.value.length<8){
    passwordSpan1.style.display="inline";
   res = false;
  }
  else{
    passwordSpan1.style.display="none";
  }


  if(password2.value==""||(password2.value!==password1.value)){
    passwordSpan2.style.display="inline";
   res = false;
  }
  else{
    passwordSpan2.style.display="none";
  }

setCookie("fname", fName.value);
setCookie("lname",lName.value);
setCookie("email", email.value);
setCookie("password1", password1.value);

return res;

}
 
var emailVal= getCookie("email");
var password = getCookie("password1");


var passLoginSpan= document.getElementById("passLoginSpan");
var loginEmail=document.getElementById("loginEmail");
var loginPassword=document.getElementById("loginPassword");


  function validateLogin(){
   var res= true;


if ((emailVal===loginEmail.value)&&(password===loginPassword.value)){

  passLoginSpan.style.display="none";
res=true;
}
  else {
    passLoginSpan.style.display="inline";
    res=false;
}
 

  return res ;
}
