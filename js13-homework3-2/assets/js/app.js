function to2(num) {
    return Math.floor(num*100) / 100;
}

function monthCreator(month, body, bodyPayment, percentPayment, monthlyPayment){
    
    this.month = month;
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
    
let arr = [];

    for (m = 1; m<=term; m++){
        if(m == term) {
            monthPay = amount;
        }
        let bodyPart = to2(monthPay - (amount * mRate));
        let percentPay = to2(amount * mRate);
        amount = to2(amount - bodyPart);
        console.log(`Body: ${amount}, Body payment: ${bodyPart}, Rate payment: ${percentPay}, Monthly payment: ${monthPay}`);

        
        
        var allPay = new monthCreator(m, amount, bodyPart, percentPay, monthPay);
        arr.push(allPay);          
    }
    
    paymentTable.innerHTML += arr.map(item => `
                                <tr><td>${item.month}</td>
                                <td>${item.body}</td>
                                <td>${item.bodyPayment}</td>
                                <td>${item.percentPayment}</td>
                                <td>${item.monthlyPayment}</td></tr>
                            ` ).join('');
    
    console.log(arr);
}
