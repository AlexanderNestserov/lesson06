'use strict';
let freeNumber;

freeNumber = prompt('Can you gass my favorite number from 1 to 100?');

const lessNumber = function (a) {
   let number = 56;
   
   if (a > number) {
      alert('The number is more');
      a = prompt('Can you gass my favorite number less?');
      return a;
   } 
   else if (a < number && a !== null && a !== '') {
      alert('The number is less');
      a = prompt('Can you gass my favorite number more?');
      return a;
   } 
   else if (a == number) {
      alert('You are win!!!');
      return a;
   }
   else if (a == null || a == '') {
      alert('The game is over');
      return a;
   }

   const theEnd = function (a) {
      if (isNaN(+a)) {
         alert('Enter a number');
         a = prompt('Can you gass my favorite number from 1 to 100?');
         return a;
      }
   };
   theEnd(freeNumber);
};
lessNumber(freeNumber);
