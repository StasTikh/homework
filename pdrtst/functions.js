const name = "паша";
//var testName = nameField.value;
let testName = prompt("Введите имя");
nameTest = testName.toLowerCase();
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
  if(nameTest != name){
    pidor.innerHTML = `Пидора ответ! Понял, ${testName}?`
  } else { 
      pidor.innerHTML = `${testName} не пидор!`;
  }
  buttons.style.display = "none";
  restart.style.display = "inline"

});

restart.addEventListener('click', function(){
  location.reload();
})
