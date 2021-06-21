
var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessCount = 0;
var answerNumber = 10;
function startGame() { 

    let userGuess = +tryAnswer.value;
    
    if (userGuess === 50) {
        document.getElementById('correctAnswer').style.display = "block";
        document.getElementById('userGuess').innerHTML = userGuess;
      
    } else {
        document.getElementById('correctAnswer').classList.add = "text-danger";
        document.getElementById('correctAnswer').innerHTML = "Wrong";
        
        
    }
    
    if(userGuess < randomNumber) {
        document.getElementById('correctAnswer').style.display = "block";
        document.getElementById('howClose').style.display = "block";
        document.getElementById('howClose').innerHTML = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
        document.getElementById('correctAnswer').style.display = "block";
        document.getElementById('howClose').style.display = "block";
        document.getElementById('howClose').innerHTML = 'Last guess was too high!';
    }
    
    guessCount++;
    document.getElementById('tryAnswer').value = '';
    
    if (guessCount === 10) {
        document.getElementById('correctAnswer').innerHTML = "GAME OVER!!!";
        document.getElementById('correctAnswer').classList.add = "text-danger";
        document.getElementById('howClose').style.display = "none";
        let tag = document.querySelector('dialog');
        
        setTimeout(function(){
            tag.close();
        }, 1000);
    }
}
 

function openGame() {
    let tag = document.querySelector('dialog');
    tag.showModal();
}

function closeGame() {
    let tag = document.querySelector('dialog');
    tag.close();
}


function isNumber() {
    let answer = +tryAnswer.value;
    if(Number.isNaN(answer)){
        document.getElementById('noNum').style.display = "inline";
        noNum.innerHTML = "*Please enter only numbers!"
    } else {
        document.getElementById('noNum').style.display = "none";
    }

}
