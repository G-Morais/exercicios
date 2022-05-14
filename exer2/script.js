// exercicio 2 - media notas
var n1 = parseInt(prompt("informe a primeira nota: "))
var n2 = parseInt(prompt("informe a segunda nota: "))
var n3 = parseInt(prompt("informe a terceira e ultima nota: "))
//utilizei math.floor para arrendondar
var m = Math.floor((n1 + n2 + n3) / 3)

if(m >= 7){
  resultado = "Você passou! Sua média foi: " + m
}
else if(m >= 5){
  resultado = "Passou raspando! Sua média foi: " + m
}
else {
  resultado = "Reprovado! Precisa estudar mais, sua média foi: " + m
}

alert(resultado)
