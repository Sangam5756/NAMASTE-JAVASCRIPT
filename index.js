


// currying 
function multiply(a){

  return function (b){
    return a*b;
  }
}

for(let j=1; j<=10; j++){
  console.log("table of " , j)
  let multiple2 = multiply(j);

  for(let i =1; i<=10; i++){
    console.log(multiple2(i));
    
  }
}