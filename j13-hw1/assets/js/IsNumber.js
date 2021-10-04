function isNumber() {
    let answer1 = +salary.value;
    let alert1 = document.getElementById('rateField'); 
      
    if(Number.isNaN(answer1)){
      alert1.style.display = "inline";
      alert1.innerHTML = "Only numbers"    
    } 
  }
  