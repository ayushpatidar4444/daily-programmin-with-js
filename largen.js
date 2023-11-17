

let Promis = new Promise(function(myResolve, myReject) {
    let i= 10+20;
  
  
    if (i == 30) {
      myResolve("good morning");
    } else {
      myReject("Error");
    }
  });
  
  console.log(Promis) 
  