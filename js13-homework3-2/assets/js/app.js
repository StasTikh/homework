function to2(num) {
    return Math.floor(num*100) / 100;
}

function monthCreator(day, body, bodyPayment, percentPayment, monthlyPayment){
    
    this.day = day;
    this.body = body;
    this.bodyPayment = bodyPayment;
    this.percentPayment = percentPayment;
    this.monthlyPayment = monthlyPayment;
    

    
}

function annuityCalc() {
    let amount = +sumInput.value; 
    let term = +termInput.value; 
    let percent = +percentInput.value;
    let mRate = percent / (100 * 12);
    let monthPay = to2(amount * mRate / (1 - Math.pow(1 + mRate, -term)));
    let overPay = to2((monthPay * term) - amount);
    console.log(amount, overPay, amount+overPay);
    var m = 0;
    
    for (m = 1; m<=term; m++){
        if(m == term) {
            monthPay = amount;
        }
        let bodyPart = to2(monthPay - (amount * mRate));
        let percentPay = to2(amount * mRate);
        amount = to2(amount - bodyPart);
        console.log(`Body: ${amount}, Body payment: ${bodyPart}, Rate payment: ${percentPay}, Monthly payment: ${monthPay}`);

        
        var allPay = new monthCreator(m, amount, bodyPart, percentPay, monthPay);
        
        //console.log(Object.values(allPay));

        
          
    }
    //console.log(allPay);
    console.log(Object.values(allPay));

}
