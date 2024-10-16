// exericese 1:
// --------------
// write a javascript program to check two number and return true if one of the number is 100
// or if the sum of the two number is 100  


// function test (a ,b){
//  if(a==100 || b ==100 || a+b==100){
//     return true

//  }
//  else {
//     return false
//  }
 
// }
// const result = test(40,60)
// console.log(result)
// -------------------------
// exericise 2:
// -------------
// write a javascript program to get the extension of a filename.

// const hello = (str) => str.slice(str.lastIndexOf('.'))

// console.log(hello('hello.html'))
// console.log(hello('chhshshdfhdth.js'))
// console.log(hello('hello.css'))
// ------------------------------------
// exericise 3:
// -------------------
// write a javascript program to get the current date . Expectec output : mm-dd-yyyy, mm/dd/yyyy/ or dd-mm-yyyy, dd/mm/yyyy/

// const Formatdate = (date= new Date())=>{
//  const days= date.getDate();
//  const months= date.getMonth();
//  const years= date.getFullYear();
//  return `${days}/${months}/${years}`
// }
// console.log(Formatdate())
// --------------------------------
// Exercise 4 :

// ---------------------------------

// write a javasscript program to create a new String adding "new!" in front of given String if the given sting begins with new! already then return the original string 


// const addnew = (str)=>
//     str.indexOf('new!')=== 0 ? str : `new! ${str}`;
// console.log(addnew( 'new! office'))
// ---------------------------------------------

// Exercise 5:
// -----------
// write a javascript program to creat a new string  from a given string taking the first 3 characters and  the last 3 characters of a string and adding together the string length must be 3 or more , of not , the original string is returned


// const makenewString = (str)=>
//     str.lenght < 3 ? str : str.slice(0, 3)+str.slice(-3);

// console.log(makenewString('sdfjaskjfk'))
// -----------------------------------------------------------

// exercise 6: 
// --------------

// write a javascript program to extract the first half of a string if even length 


// const firsthalf = (str) => str.slice(0, str.length / 2);
// console.log(firsthalf('hello'))
// --------------------------------------------------------------
 
// exercise 7:
// ---------------

// WRITE A JAVASCRIP   program to concatenate two strings except their first CharacterData. 


// const addString = (str1, str2)=>
//      str1.slice(1)+str2.slice(1);
// console.log(addString('abddd','sfsf'))
// --------------------------------------------------- 


// const newvalue=(a,b)=> (100-a) < (100-b)? a:b ;

//  console.log( newvalue(40,60))

//  console.log( newvalue(78,60))

//  console.log( newvalue(40,90))

// exercise :8
// ----------------
// write a javascript program to check a given string contains 2 to 4 occurrences of a specified chaaracter. 

// const countchars= (str, char)=>str.split('').filter(ch => ch === char).length;
// const contains3 = (str, char)=> countchars(str, char) >= 2 && countchars(str, char) <= 4;
//  console.log(contains3('oooh!',  'o'))
//  console.log(contains3('oooh!',  'o'))
//  console.log(contains3('ooooh!',  'o'))
//  console.log(contains3('oh!',  'o'))
// =============================================
// let animationRunning = false;
// let timeoutIds = [];

// document.getElementById('button').addEventListener('click', function() {
//     const animationContainer = document.getElementById('animationContainer');

//     if (!animationRunning) {
//         // Start the animation
//         animationRunning = true;
//         for (let i = 0; i < 200; i++) {
//             const timeoutId = setTimeout(() => {
//                 const heart = document.createElement('div');
//                 heart.classList.add('heart');
//                 heart.style.left = `${Math.random() * 100}%`;
//                 animationContainer.appendChild(heart);

//                 // Remove the heart after animation ends
//                 setTimeout(() => {
//                     heart.remove();
//                 }, 4000);
//             }, i * 200);
//             timeoutIds.push(timeoutId);
//         }
//     } else {
//         // Stop the animation and remove all hearts
//         animationRunning = false;
//         timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
//         timeoutIds = [];
//         animationContainer.querySelectorAll('.heart').forEach(heart => heart.remove());
//     }
// });
