function imc (peso, altura) {
    let calc = peso / altura * 2
        console.log(calc)
}
//imc(50,1.75)

function recebedorDeEmail(email) {
let principal = "terezinhadejesus@gmail.com"

    if (principal == email) {
        console.log("Seu endereço foi encontrado em nosso sistema")

    }
    else {
        console.log("Seu e-mail é inválido")
    }

}
//recebedorDeEmail("terexinhadejesus@gmail.com")

function cura(remedio) {
    let generico = "estomazil"
    
    if (generico==remedio) {
        console.log("Seu fígado foi curado")
    }

    else {
        console.log("Seu fígado continua doente")
    }
}

cura("estomazil")


