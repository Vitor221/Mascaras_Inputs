const campo = document.querySelector('input')

campo.addEventListener('keypress', somenteNum)

campo.addEventListener('blur', APIcep)

function APIcep() {
  var cep = document.getElementById('campoCEP')
  var formatCEP = cep.value.replace('-', '')
  var error = document.getElementById('error-message')

  if(formatCEP.length < 8){
    var error = document.getElementById('error-message')
    error.innerHTML = 'CEP inválido!'
  } else {
    var error = document.getElementById('error-message')
    error.innerHTML = ''
  }

  const showData = (result) => {
    for(const campo in result) {
      if(document.querySelector('#' + campo)){
        document.querySelector("#" + campo).value = result[campo]
      }
    }
  }
  var url = `https://viacep.com.br/ws/${formatCEP}/json/`
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }

  fetch(url, options)
  .then(response =>  { response.json()
    .then( data => {showData(data)})
  })
  .catch(error => console.log('ERROR: ' + error,message))
}

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