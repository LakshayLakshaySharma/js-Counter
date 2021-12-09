let number = document.getElementById("number");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let reset = document.getElementById("reset");
let int = 0;

add.addEventListener("click",function(){
  int += 1;
  number.innerHTML = int;
  if(int == 1){
    number.style.color = "green";
  }
})

sub.addEventListener("click", function(){
  int-= 1;
  number.innerHTML  = int;
  if(int > 1){
    number.style.color = "red";
  }
});

reset.addEventListener("click", function(){
  int = 0;
  number.innerHTML = int;
  if(int == 0){
    number.style.color = "black";
  }
})