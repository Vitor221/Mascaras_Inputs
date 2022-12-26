const campo = document.querySelector('input')

campo.addEventListener('keypress', somenteNum)

function somenteNum(e){
  let somNum = (e.which) ? e.which : e.keyCode

  if(somNum > 31 && (somNum < 48 || somNum > 57))

  e.preventDefault();
}

campo.addEventListener('keypress', (e) => {
  let charInput = campo.value.length

  if(charInput === 5){
    
    campo.value += '-'
  }
})