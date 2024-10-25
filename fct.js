 

function generateRandomCode(length = 6) {
   const characters ="azertyuiopqsdfghjklmwxcvbn0123456789AZERTYUIOPQSDFGHJKLMWNBXVC";
   let Code = '';

   for (let i = 0; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * characters.length);
       Code += characters[randomIndex];
   }

   return Code;
}


let code = generateRandomCode(6);
function showRandomCode() {
   // Generate the random code
   const code = generateRandomCode(6);
   
   // Display the code in the input box
   document.getElementById("captcha1").value = code;
}


// check user's input
let userInp = document.getElementById("UserInput1");
let captchaVal = document.getElementById("captcha1");

let condition0 = false;
let condition1 =false;

function checkInp(){
   if(userInp.value == captchaVal.value){
      document.getElementById('linkads').style.display ="block";
      condition0 = true;
   }else{
      alert("captcha is wrong");
      condition0 = false;
   }
}

function go1(){
   if(condition0 == true){
      window.location.href=("second.html");
   }
   else{
      alert("please check the captcha");
   }
}

function go2(){
   if(condition0 == true){
      window.location.href=("third.html");
   }
   else{
      alert("please check the captcha");
   }
}

function shownext(){
   document.getElementById("next1").style.display ="block";
   document.getElementById('linkads').style.display ="none";
   document.getElementById('code1').style.display ="inline-block";
}










function finalycode(length = 14) {
   const letters = 'HB';
   const characters = letters + '0123456789azertyuiopqsdfghjklmwxcvbnAZERTYUIOPMLKJHGFDSQWXCVBN';
   let randomCode = '';
   
   // Ensure the first two characters are always letters
   randomCode += letters[Math.floor(Math.random() * letters.length)];
   randomCode += letters[Math.floor(Math.random() * letters.length)];
   
   // Generate the remaining characters
   for (let i = 2; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * characters.length);
       randomCode += characters[randomIndex];
   }

   return randomCode;
}

function showRandomCode2() {
   // Generate the random code
   const code2 = generateRandomCode(14);
   
   // Display the code in the input box
   document.getElementById("codeshow").innerHTML = code2;
}

