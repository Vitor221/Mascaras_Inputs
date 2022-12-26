const campo = document.querySelector('input')

campo.addEventListener('keypress', somenteNum)

function somenteNum(e){
  let somNum = (e.which) ? e.which : e.keyCode

  if(somNum > 31 && (somNum < 48 || somNum > 57))

  e.preventDefault();
}

campo.addEventListener('keypress', (e) => {
  let charInput = campo.value.length
  var v = e.target.value

  if(charInput < 1){

    campo.value += '('

  }else if (charInput >= 3 && charInput <= 3){

    campo.value += ') '

  } else if(charInput === 10){
    campo.value += '-'
  }
})