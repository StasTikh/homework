(function(){
    let button = document.getElementById("btn");
    let answerF = document.getElementById("answerField");
    let small = document.getElementById("small");
    let big = document.getElementById("big");
    let win = document.getElementById("win");
    let restart = document.getElementById("restartGame");  
    let numGuess = 0;
    let low = 0;
    let high = 101;
    let tryA = Math.floor( (low + high)/2 );
  
    button.addEventListener("click", function(){
      answerF.innerHTML = tryA;
      button.style.display = "none";
      small.style.display = "block";
      big.style.display = "block";
      win.style.display = "block";
    }); 
        
    
    
    
    function search(){return Math.floor( (low + high)/2 );}       

    
    small.addEventListener('click', function(){
        high = Number(answerF.innerHTML);
        answerF.innerHTML = search();
        numGuess++;
        if (numGuess == 10) {
          small.style.display = "none";
          big.style.display = "none";
          win.style.display = "none";
          restart.style.display = "block";
          document.getElementById("winField").innerHTML = `Попытки закончились, я проиграл!`;    
        } else if( search() == 0) {
          small.style.display = "none";
          big.style.display = "none";
          win.style.display = "none";
          restart.style.display = "block";
          answerF.innerHTML = `Нельзя меньше 1!`;
          document.getElementById("winField").innerHTML = `Правила для кого написаны?`;
        }  
      });
      
      big.addEventListener('click', function(){
        low = Number(answerF.innerHTML);    
        answerF.innerHTML = search();
        numGuess++;
        if (numGuess == 10) {
          small.style.display = "none";
          big.style.display = "none";
          win.style.display = "none";
          restart.style.display = "block";
          document.getElementById("winField").innerHTML = `Попытки закончились, я проиграл!`;    
        } else if( search() == 100) {
          small.style.display = "none";
          big.style.display = "none";
          win.style.display = "none";
          restart.style.display = "block";
          document.getElementById("winField").innerHTML = `О! Ты правда загадал 100? Это редкость`;
        }  
      });

      
    
    win.addEventListener("click", function(){
        small.style.display = "none";
        big.style.display = "none";
        this.style.display = "none";
        restart.style.display = "block";    
        document.getElementById("winField").innerHTML = `Победа! Я угадал с ${numGuess +1} раза!`;   
      });

    restart.addEventListener("click", function(){
        location.reload();   
      });
     
  })();