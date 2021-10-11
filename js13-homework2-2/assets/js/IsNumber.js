function isNumber() {
    let answer1 = +inputCode.value;
      
    if(Number.isNaN(answer1)){
      outputCode.innerHTML = "Only numbers"    
    } 
  }
  