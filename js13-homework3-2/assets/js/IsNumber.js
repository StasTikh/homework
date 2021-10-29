function isNumber() {
    let answer1 = +sumInput.value;
    let answer2 = +termInput.value;
    let answer3 = +percentInput.value;
      
    if(Number.isNaN(answer1)) {
      message1.innerHTML = "Only numbers";
    } else if (Number.isNaN(answer2)) {
      message2.innerHTML = "Only numbers";
    } else if (Number.isNaN(answer3)){
      message3.innerHTML = "Only numbers";        
    } 
  }
  