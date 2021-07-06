function isNumber() {
    let answer1 = +startNum.value;
    let answer2 = +endNum.value;
    let alert1 = document.getElementById('noNum');
    let alert2 = document.getElementById('noNum2');
    
    if(Number.isNaN(answer1)){
        alert1.style.display = "inline";
        alert1.innerHTML = "Ввод только чисел"    
    } else if (Number.isNaN(answer2)) {
        alert2.style.display = "inline";
        alert2.innerHTML = "Ввод только чисел";
    } else {
        alert1.style.display = "none";
        alert2.style.display = "none";
    }

}

function startCount() {
    let startC = +startNum.value;
    let endC = +endNum.value
    let sum = 0;
    for (let i = startC; i <= endC; i++) {
        sum += i;
    }
    answerF.style.display = "inline";
    answerField.innerHTML = `Сумма чисел от ${startC} до ${endC} равна: ${sum}`;

}
