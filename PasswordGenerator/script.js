const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|\\:;\"'<>,.?/";

const lengthEl = document.getElementById("length");
const lowerEl = document.getElementById("lowerCase");
const upperEl = document.getElementById("Uppercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("Symbols");
const buttonEl = document.getElementById("generate");
const passwordEl = document.getElementById("password");


buttonEl.addEventListener("click",function(){
 
     const length = lengthEl.value;
     let characters = "";
     let password = "";

     if(lowerEl.checked){
         characters+=lowercaseLetters;
     }
     if(upperEl.checked){
        characters+=uppercaseLetters;
     }
     if(numberEl.checked){
             characters+=numbers;
     }
     if(symbolEl.checked){
        characters+=symbols;
     }

     for(let i = 0;i< length;i++){
        password+=characters.charAt(Math.floor(Math.random() * characters.length));
     }

     passwordEl.value = password;

});



