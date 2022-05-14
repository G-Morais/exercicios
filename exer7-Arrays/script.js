//Vamos testar alguns arrays

var alunos = ['gabriel', 'igor', 'maria', 'julia'];
//tambem pode ser criado como var alunos = new Array('gabriel', 'igor', 'maria', 'julia');
//array começa no 0

//o .length puxa o numero de dados(neste caso 4 alunos) dessa array
//entao se eu adicionar mais alunos no array, o codigo vai acompanhar
for(var i = 0; i < alunos.length; i++){
    console.log(alunos[i])
}

//outras formas
/*for (var i in alunos){
    console.log(alunos[i])
}

for(var aluno of alunos){
    console.log(aluno)
}*/