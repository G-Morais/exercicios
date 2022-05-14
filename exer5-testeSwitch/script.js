// exercicio 5 - media notas porem aprendendo como funciona o switch
var n1 = parseInt(prompt("informe a primeira nota: "))
var n2 = parseInt(prompt("informe a segunda nota: "))
var n3 = parseInt(prompt("informe a terceira e ultima nota: "))
//utilizei math.floor para arrendondar
var m = Math.floor((n1 + n2 + n3) / 3)
resultado = ''
if(m >= 8){
  resultado = "Ótimo"
}
else if(m >= 5){
  resultado = "Regular"
}
else {
  resultado = "Reprovado"
}

alert('Média '+ m + ', resultado: ' + resultado)

switch(resultado){
    case "Ótimo":
        alert("Parabéns, você é um ótimo aluno!")
        break;

    case "Regular":
        alert("muito bom, mas pode melhorar!")
        break;

    case "Reprovado":
        alert("Você veio mesmo as aulas?")
        break;

    default:
        alert("Houve algum erro")
        break;

}


/*resultado = "Você passou! Sua média foi: " + m
}
else if(m >= 5){
  resultado = "Passou raspando! Sua média foi: " + m
}
else {
  resultado = "Reprovado! Precisa estudar mais, sua média foi: " + m*/