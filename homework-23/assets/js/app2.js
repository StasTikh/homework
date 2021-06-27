
randomNumber = Math.floor((Math.random() * 100) + 1);
var guessCount = 0;
var guessMax = 10;

function openGame() {
    let tag = document.getElementById('dialog1');
    dialogPolyfill.registerDialog(tag);
    tag.showModal();
}

function closeGame() {
    let tag = document.getElementById('dialog1');
    tag.close();
    document.getElementById('outAnswer').style.display = "none";
    guessCount = 0;
    location.reload();    
}

function openGame2() {
    let tag2 = document.getElementById('dialog2');
    dialogPolyfill.registerDialog(tag2);
    tag2.showModal();
}

function closeGame2() {
    let tag = document.getElementById('dialog2');
    tag.close();
    document.getElementById('outAnswer').style.display = "none";
    guessCount = 0;
    location.reload(); 
}

function guessGame(){ 
    let guessNum = document.getElementById('myNum').value;
    let answerOut = document.getElementById('outAnswer');
    let isSubmit = document.getElementById('submitForm').value;
    document.getElementById('outAnswer').style.display = "block";
   
    if (guessNum == randomNumber) {
            answerOut.innerHTML = `Верно! </br> Ты отгадал - мое число ${guessNum}! </br> Это была ${guessCount + 1}-я попытка.`;
            document.getElementById('myNum').value = '';
            document.getElementById('myNum').style.display = "none";
            document.getElementById('numButton').style.display = "none";
            document.getElementById('reloadButton').style.display = "block";
            reloadButton.focus();
            answerOut.classList.remove("text-warning");
            answerOut.classList.remove("fs-4");
            answerOut.classList.add("text-success");
            answerOut.classList.add("fs-3");
    } else if (guessNum < randomNumber){
        if(guessNum == "" || isSubmit == "") {
            document.getElementById('numButton').style.display = "none";
            document.getElementById('myNum').value = '';
            noNum.style.display = "block";
            noNum.innerHTML = "*Нужно ввести номер!";
            answerOut.style.display = "none";
            guessCount = guessCount;
            myNum.focus();
        } else {
            answerOut.innerHTML = `Ты не угадал! </br> Мой номер больше. </br> Это попытка номер: ${guessCount + 1}`;
            answerOut.classList.add("text-warning");
            answerOut.classList.add("fs-5");
            guessCount++;
            console.log(guessCount);
            document.getElementById('myNum').value = '';
            myNum.focus();
        }
    } else {
        answerOut.innerHTML = `Ты не угадал! </br> Мой номер меньше. </br> Это попытка номер: ${guessCount + 1}`;
        answerOut.classList.add("text-warning");
        answerOut.classList.add("fs-5");
        guessCount++;
        console.log(guessCount);
        myNum.value = '';
        myNum.focus();
    }
    if (guessCount == 10) {
        answerOut.innerHTML = `Прости! </br> Ты проиграл. </br> Правильный номер: ${randomNumber}`;
        answerOut.classList.add("text-danger");
        answerOut.classList.add("fs-3");
        document.getElementById('myNum').style.display = "none"
        document.getElementById('numButton').style.display = "none"
    }
}

function isNumber() {
    let answer = +myNum.value;
    if(Number.isNaN(answer)){
        document.getElementById('noNum').style.display = "inline";
        noNum.innerHTML = "*Пожалуйста, вводи только цифры!"
        document.getElementById('numButton').style.display = "none";
    } else if(answer > 100) {
        document.getElementById('noNum').style.display = "inline";
        noNum.innerHTML = "*Я же написал - до 100!"
        document.getElementById('numButton').style.display = "none";
    } else if(answer == 0) {
        document.getElementById('noNum').style.display = "inline";
        noNum.innerHTML = "*От 1!";
        document.getElementById('numButton').style.display = "none";
    } else {
        document.getElementById('noNum').style.display = "none";
        document.getElementById('numButton').style.display = "block";
    }

}

function isNumber2() {
    let answer = +userBet.value;
    let answer2 = +userOption.value
     if(Number.isNaN(answer) || Number.isNaN(answer2)){
        noNum3.style.display = "inline";
        noNum3.innerHTML = "*Пожалуйста, вводи только цифры!"
        gameButton.style.display = "none";
    } else {
        noNum3.style.display = "none";
        gameButton.style.display = "block";
    }

}

function newGame() {
    location.reload();
    
}


function generate() {
    let randNumber = Math.floor((Math.random() * 6) + 1);
    
    return randNumber;
}
    
var buttonGame = document.getElementById('gameButton');
var balance = 10000;
var balanceField = document.getElementById('userBalance');
    


function playGame() {
    let bet = +userBet.value;
    let option = +userOption.value;
    
    if(bet > balance) {
        messagePlace.innerHTML = "Недостаточно средств! Пополните баланс!"
        return;
    }
    
    if (userBet.value == ""){
        messagePlace.innerHTML = "Нужно сделать ставку!"
    }

    let dice1 = generate();
    let dice2 = generate();
    
    dice1Image.src = `./assets/images/${dice1}.png`
    dice2Image.src = `./assets/images/${dice2}.png`
    
    if ((dice1 + dice2) == option) {
        if (dice1 == dice2) {
            balance = balance + (bet * 2);
            userBalance.innerHTML = balance;
            messagePlace.innerHTML = `Выпало: ${dice1 + dice2}! Ставка сыграла! Двойной выигрыш: ${(bet + bet) * 2}`;
            messagePlace.classList.remove("text-danger");
            messagePlace.classList.add("text-success");
            userBet.value = '';
            userOption.value = '';
            userBet.focus();
        } else {
            balance = balance + bet;
            userBalance.innerHTML = balance;
            messagePlace.innerHTML = `Выпало: ${dice1 + dice2}! Ставка сыграла! Выигрыш: ${bet + bet}`;
            messagePlace.classList.remove("text-danger");
            messagePlace.classList.add("text-success");
            userBet.value = '';
            userOption.value = '';
            userBet.focus();
        }
    } else {
        balance = balance - bet;
        userBalance.innerHTML = balance;
        messagePlace.innerHTML = `Выпало: ${dice1 + dice2}! Ставка не сыграла!`;
        messagePlace.classList.add("text-danger");
        userBet.value = '';
        userOption.value = '';
        userBet.focus();
    }
}   



// function randomPic() {
//     let randNumber1 = Math.floor((Math.random() * 6) + 1);
//     let randNumber2 = Math.floor((Math.random() * 6) + 1);

//     for (i = 0; i < 5; i++ ) {
//         dice1Image.src = `./assets/images/${randNumber1}.png`
//         dice2Image.src = `./assets/images/${randNumber2}.png`
//     }
// }