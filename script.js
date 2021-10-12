'use strict';

const isNum = function (num) {
   return !isNaN(parseFloat(num)) && isFinite(num);
};
const game = function () {
   const randomNumber = Math.floor(Math.random() * 100);
   console.log(randomNumber);
   return function repeat() {
      let userNumber = prompt('Your Number?');
      if (isNum(userNumber)) {
         if (userNumber > randomNumber) {
            alert('The number is more');
            repeat();
         } else if (userNumber < randomNumber) {
            alert('The number is less');
            repeat();
         }
         else {
            alert('You are win!!!');
         }
      }
      else if
         (userNumber === null) {
         alert('The game is over');
      } else {
         repeat();
      }
   };

};

let a = game();
a();

