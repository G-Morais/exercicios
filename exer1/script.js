// exercicio 1 - nivel de fome

var hungerLevel = parseInt(prompt("Qual o nivel da sua fome? "))
if (hungerLevel > 10){
    alert("o limite é 10!")
}
else if(hungerLevel < 1){
    alert("o minimo é 1!")
}
else if(hungerLevel > 7){
    alert('Hora de comer!')
  }
  else{
    alert('Podemos comer mais tarde!')
  }