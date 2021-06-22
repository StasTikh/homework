
randomNumber = Math.floor((Math.random() * 100) + 1);
var guessCount = 0;
var guessMax = 10;

function openGame() {
    let tag = document.querySelector('dialog');
    dialogPolyfill.registerDialog(tag);
    tag.showModal();
}

function closeGame() {
    let tag = document.querySelector('dialog');
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
        if(guessCount == 0) {
            answerOut.innerHTML = `Correct! </br> You win, number is ${guessNum}! </br> It's was ${guessCount + 1}st try.`;
            document.getElementById('myNum').value = '';
            document.getElementById('myNum').style.display = "none";
            document.getElementById('numButton').style.display = "none";
            document.getElementById('reloadButton').style.display = "block";
            answerOut.classList.remove("text-danger");
            answerOut.classList.remove("fs-4");
            answerOut.classList.add("text-success");
            answerOut.classList.add("fs-3");
        } else if (guessCount == 1) {
            answerOut.innerHTML = `Correct! </br> You win, number is ${guessNum}! </br> It's was ${guessCount + 1}nd try.`;
            document.getElementById('myNum').value = '';
            document.getElementById('myNum').style.display = "none";
            document.getElementById('numButton').style.display = "none";
            document.getElementById('reloadButton').style.display = "block";
        } else if (guessCount === 2) {
            answerOut.innerHTML = `Correct! </br> You win, number is ${guessNum}! </br> It's was ${guessCount + 1}rd try.`;
            document.getElementById('myNum').value = '';
            document.getElementById('myNum').style.display = "none";
            document.getElementById('numButton').style.display = "none";
            document.getElementById('reloadButton').style.display = "block";
        } else {
            answerOut.innerHTML = `Correct! </br> You win, number is ${guessNum}! </br> It's was ${guessCount + 1}th try.`;
            document.getElementById('myNum').value = '';
            document.getElementById('myNum').style.display = "none";
            document.getElementById('numButton').style.display = "none";
            document.getElementById('reloadButton').style.display = "block";
            answerOut.classList.remove("text-warning");
            answerOut.classList.remove("fs-4");
            answerOut.classList.add("text-success");
            answerOut.classList.add("fs-3");
        }
    } else if (guessNum < randomNumber){
        if(guessNum == "" || isSubmit == "") {
            document.getElementById('numButton').style.display = "none";
            document.getElementById('myNum').value = '';
            noNum.style.display = "block";
            noNum.innerHTML = "Enter some number, please!";
            answerOut.style.display = "none";
            guessCount = guessCount;
        } else if (guessNum == 0) {
            document.getElementById('numButton').style.display = "none";
            document.getElementById('myNum').value = '';
            noNum.style.display = "block";
            noNum.innerHTML = "From 1!";
            answerOut.style.display = "none";
            guessCount = guessCount; 
        } else {
            answerOut.innerHTML = `You wrong! </br> Number is bigger. </br> It's try number ${guessCount + 1}`;
            answerOut.classList.add("text-warning");
            answerOut.classList.add("fs-5");
            guessCount++;
            console.log(guessCount);
            document.getElementById('myNum').value = '';
        }
    } else {
        answerOut.innerHTML = `You wrong! </br> Number is smaller. </br> It's try number ${guessCount + 1}`;
        answerOut.classList.add("text-warning");
        answerOut.classList.add("fs-5");
        guessCount++;
        console.log(guessCount);
        document.getElementById('myNum').value = '';
    }
    if (guessCount == 10) {
        answerOut.innerHTML = `Sorry! </br> You lose. </br> Right number is: ${randomNumber}`;
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
        noNum.innerHTML = "*Please enter only numbers!"
        document.getElementById('numButton').style.display = "none";
    } else if(answer > 100) {
        document.getElementById('noNum').style.display = "inline";
        noNum.innerHTML = "*I said, number from 1 to 100!"
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
        noNum3.innerHTML = "*Please enter only numbers!"
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
        messagePlace.innerHTML = "Insufficent funds! Top up your balance!"
        return;
    }    

    let dice1 = generate();
    let dice2 = generate();
    
    dice1Image.src = `./assets/images/${dice1}.png`
    dice2Image.src = `./assets/images/${dice2}.png`
    
    if ((dice1 + dice2) == option) {
        if (dice1 == dice2) {
            balance = balance + (bet * 2);
            userBalance.innerHTML = balance;
            messagePlace.innerHTML = `It's: ${dice1 + dice2}! You win! Double bet: ${(bet + bet) * 2} UAH`;
            messagePlace.classList.remove("text-danger");
            messagePlace.classList.add("text-success");
            userBet.value = '';
            userOption.value = '';
            userBet.focus();
        } else {
            balance = balance + bet;
            userBalance.innerHTML = balance;
            messagePlace.innerHTML = `It's: ${dice1 + dice2}! You win! your prize: ${bet + bet} UAH`;
            messagePlace.classList.remove("text-danger");
            messagePlace.classList.add("text-success");
            userBet.value = '';
            userOption.value = '';
            userBet.focus();
        }
    } else {
        balance = balance - bet;
        userBalance.innerHTML = balance;
        messagePlace.innerHTML = `It's: ${dice1 + dice2}! You lose!`;
        messagePlace.classList.add("text-danger");
        userBet.value = '';
        userOption.value = '';
        userBet.focus();
    }
}