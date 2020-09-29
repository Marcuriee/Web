var number = 0;
var counter = document.getElementById("counter");
function add(){
   number++;
    counter.innerHTML = number;
  }
function subtract(){
  if (number > 0 ) {
   number--;
   counter.innerHTML = number;
   }
  }
