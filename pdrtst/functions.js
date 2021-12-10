let name = "паша";
Let testName = prompt("Введите имя").toLowerCase();
function pidorTest(){
  testField.style.display = "inline";
  header.style.display = "none"
}

yes.addEventListener('click', function(){
  pidor.innerHTML = "Ха-ха-ха! Пидор!"
  buttons.style.display = "none";
  restart.style.display = "inline"
});

no.addEventListener('click', function(){
  if(testName == !name){
    pidor.innerHTML = "Пидора ответ!"
  } else { 
      pidor.innerHTML = "Не пидор";
  }
  buttons.style.display = "none";
  restart.style.display = "inline"

});

restart.addEventListener('click', function(){
  location.reload();
})
