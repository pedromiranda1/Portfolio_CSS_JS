const nomeElemento = document.querySelector("#nome");
const nome = nomeElemento.textContent; 
nomeElemento.textContent = ""; 

let i = 0;
setInterval(function() {
  if (i < nome.length) {
    nomeElemento.textContent += nome.charAt(i);
    i++;
  }
}, 80);
