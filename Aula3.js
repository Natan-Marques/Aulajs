//Contador de idade (print até 18 anos)

const contador = (idade) => {
    //for(contador, logica, incremento)
    for(let i = idade; i <= 18; i++ ){
         console.log(` Sua idade é ${i}`)
     }

 }

 contador(13) 

// 15 é a prova do iF, são 6 vagas pra ADS e 20 alunos irão fazer a prova. hoje é 11

const diasRestantes = (day) => {

    for(let i = day; i <= 15; i++){
        console.log(`Faltam ${i} dias para a sua prova`)
    }
}

diasRestantes(11)