//Contador de idade (print até 18 anos)

const contador = (idade) => {
    //for(contador, logica, incremento)
    for(let i = idade; i <= 18; i++ ){
         console.log(` Sua idade é ${i}`)
     }

 }

 contador(13) 

// 15 é a prova do iF, são 6 vagas pra ADS e 20 alunos irão fazer a prova. hoje é 11

const diasQueFaltamParaProva = (dia) => {
    for(let i = dia; i <= 15; i++){
        let result = 15 - i

        if(result != 0){
            console.log(`Faltam ${result} dias para a prova!`)
            
            result++
        }
        else{
            console.log('O dia chegou!')
        }
    }
}

diasQueFaltamParaProva(11)
