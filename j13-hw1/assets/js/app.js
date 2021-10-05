function taxCalc(){

  let income = +salary.value;
  const singleTaxDeduction = 12550;
  let approximat = income - singleTaxDeduction;
  let totalIncome = 0;
  let totalRate = 0;
  console.log(approximat);

  let rate1 = 0;
  let rate2 = 0;
  let rate3 = 0;
  let rate4 = 0;
  let rate5 = 0;
  let rate6 = 0;
  let rate7 = 0;
  
  

  const firstGroupTax = 0.1;
  const secondGroupTax = 0.12;
  const thirdGroupTax = 0.22;
  const fourthGroupTax = 0.24;
  const fifthGroupTax = 0.32;
  const sixthGroupTax = 0.35;
  const seventhGroupTax = 0.37;

  

  if(income <= singleTaxDeduction) {
    
    rateField.innerHTML = "Your rate is: 0";
    finalRateField.innerHTML = `Your clear income is: ${income}`;
  }

  if(income > singleTaxDeduction) {
     if(approximat > 0 && approximat <= 9951){
        rate1 = approximat * firstGroupTax;
        totalIncome = income - rate1;
        rateField.innerHTML = `Your rate is: ${rate1.toFixed(3)}`;
        finalRateField.innerHTML = `Your clear income is: ${totalIncome.toFixed(3)}`;
     } else if(approximat > 9951 && approximat <= 40525) {
        rate1 =  9950 * firstGroupTax; //995
        rate2 = (approximat - 9951) * secondGroupTax;
        totalRate = rate1+rate2;
        totalIncome = income - totalRate;
        rateField.innerHTML = `Your rate is: ${totalRate.toFixed(3)}`;
        finalRateField.innerHTML = `Your clear income is: ${totalIncome.toFixed(3)}`;
     } else if(approximat >= 40526 && approximat <= 86375) {
        rate1 =  9950 * firstGroupTax; //995
        rate2 = 30574 * secondGroupTax; //3669
        rate3 = ((approximat - 9951) - 30574) * thirdGroupTax;
        totalRate = rate1+rate2+rate3;
        totalIncome = income - totalRate;
        rateField.innerHTML = `Your rate is: ${totalRate.toFixed(3)}`;
        finalRateField.innerHTML = `Your clear income is: ${totalIncome.toFixed(3)}`;
     }  else if(approximat >= 86376 && approximat <= 164925){
        rate1 =  9950 * firstGroupTax; //995
        rate2 = 30574 * secondGroupTax; //3669
        rate3 = 45849 * thirdGroupTax; //10086,78
        rate4 = (approximat - 9951 - 30574 - 45849) * fourthGroupTax;
        totalRate = rate1+rate2+rate3+rate4;
        totalIncome = income - totalRate;       
        rateField.innerHTML = `Your rate is: ${totalRate.toFixed(3)}`;
        finalRateField.innerHTML = `Your clear income is: ${totalIncome.toFixed(3)}`;
     } else if(approximat >= 164926 && approximat <= 209425){
        rate1 =  9950 * firstGroupTax; //995
        rate2 = 30574 * secondGroupTax; //3669
        rate3 = 45849 * thirdGroupTax; //10086,78
        rate4 = 78549 * fourthGroupTax; //18851
        rate5 = (approximat - 9951 - 30574 - 45849 - 78549) * fifthGroupTax;
        totalRate = rate1+rate2+rate3+rate4+rate5;
        totalIncome = income - totalRate;
        rateField.innerHTML = `Your rate is: ${totalRate.toFixed(3)}`;
        finalRateField.innerHTML = `Your clear income is: ${totalIncome.toFixed(3)}`;
     }  else if(approximat >= 209426 && approximat <= 523600){
        rate1 =  9950 * firstGroupTax; //995
        rate2 = 30574 * secondGroupTax; //3669
        rate3 = 45849 * thirdGroupTax; //10086,78
        rate4 = 78549 * fourthGroupTax; //18851
        rate5 = 44499 * fifthGroupTax; //14239
        rate6 = (approximat - 9951 - 30574 - 45849 - 78549 - 44499) * sixthGroupTax;
        totalRate = rate1+rate2+rate3+rate4+rate5+rate6;
        totalIncome = income - totalRate;
        rateField.innerHTML = `Your rate is: ${totalRate.toFixed(3)}`;
        finalRateField.innerHTML = `Your clear income is: ${totalIncome.toFixed(3)}`;     
     }  else if(approximat >= 523601){
        rate1 =  9950 * firstGroupTax; //995
        rate2 = 30574 * secondGroupTax; //3669
        rate3 = 45849 * thirdGroupTax; //10086,78
        rate4 = 78549 * fourthGroupTax; //18851
        rate5 = 44499 * fifthGroupTax; //14239
        rate6 = 314174 * sixthGroupTax; 
        rate7 = (approximat - 9951 - 30574 - 45849 - 78549 - 44499 - 314174) * seventhGroupTax;
        totalRate = rate1+rate2+rate3+rate4+rate5+rate6+rate7;
        totalIncome = income - totalRate;
        rateField.innerHTML = `Your rate is: ${totalRate.toFixed(3)}`;
        finalRateField.innerHTML = `Your clear income is: ${totalIncome.toFixed(3)}`;
        
     } 
  }

  }
