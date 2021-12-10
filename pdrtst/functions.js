
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
  pidor.innerHTML = "Пидора ответ!"
  buttons.style.display = "none";
  restart.style.display = "inline"

});

restart.addEventListener('click', function(){
  location.reload();
})