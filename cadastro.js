//****Cria sistema para cadastro e divulgação de eventos****

//Declaração e atribuição de valores para as variáveis:
let dataAtual = new Date();
let dataInicioEvento = new Date("2021, 10, 30");
let dataFimEvento = new Date("2021, 11, 03");
let nomeEvento = "Congresso Brasileiro de Tecnologia";
let nomePalestrante = "Gabriela Lima";
let idadeParticipante = "25";
let nomeParticipante = "Lucas Gomes";
let listaPalestrantes = ["Ana Silva", "Carlos Alberto"];
let listaParticipantes = ["Alice Araújo", "Breno Dias", "Carlos Lopes", "Daniela Faria", "Elisa Soares", "Frederico Lemos"];


//Verifica se a data do evento e o nome são válidos e simula entrada de dados:
    console.log("Insira a data de início do evento: ")
if (dataInicioEvento > dataAtual) {
    console.log("A data de início do evento foi cadastrada com sucesso!") 
    console.log("Insira a data de fim do evento: ")
    if (dataFimEvento > dataInicioEvento) {
        console.log("A data de fim do evento foi cadastrada com sucesso!") 
        if (nomeEvento !== undefined) {
            console.log("O evento " + nomeEvento + " foi cadastrado com sucesso.")
        } else {
            console.log("Insira um nome válido para o evento.")
        }
    } else {
        console.log("A data de fim do evento precisa ser posterior à data de início.")
    }
} else {
    console.log("A data do evento precisa ser posterior à data atual")
}

//Testa se o palestrante pode ser cadastrado, simula entrada de dados para palestrante e lista palestrantes cadastrados
console.log("Insira o nome do evento: ")
if (nomeEvento !== undefined) {
    console.log("Insira o nome do(a) palestrante: ")
    if (nomePalestrante !== undefined) {
        console.log("Palestrante " + nomePalestrante + " cadastrado(a) com sucesso!")
        listaPalestrantes.push(nomePalestrante)
        console.log(listaPalestrantes)
    } else {
        console.log("Insira um nome válido para o(a) palestrante.")
    }
} else {
    console.log("O evento ainda não foi cadastrado.")
}

//Testa se o participante pode ser cadastrado, simula entrada de dados e lista o nome e o número de participantes cadastrados
console.log("Insira o nome do evento: ")
if (nomeEvento !== undefined) {
    if (listaParticipantes.length < 100) {
        console.log("Insira a idade do participante: ")
        if (idadeParticipante >= 18) {
            console.log("Insira o nome completo do participante: ")
            if (nomeParticipante !== undefined) {
                console.log("Participante " + nomeParticipante + " cadastrado(a) com sucesso.")
                listaParticipantes.push(nomeParticipante)
                console.log(listaParticipantes)
                console.log("Número de participantes cadastrados: " + listaParticipantes.length)
            } else {
                console.log("Insira um nome válido para o(a) participante.")
            }
        } else {
            console.log("O participante precisa ter mais que 18 anos.")
        }
    } else {
        console.log("A quantidade máxima de participantes para esse evento foi atingida.")
    }
} else {
    console.log("O evento ainda não foi cadastrado.")
}





