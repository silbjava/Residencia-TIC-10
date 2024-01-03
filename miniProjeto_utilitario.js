const lerLinha = require('readline')// LER LINHA (rl)
// const csv = require('fast-csv')
const as = require('fs')  // ARQUIVO DO SISTEMA - FILE SYSTEM(fs)
const { info } = require('console')
const leitura = as.createReadStream('listaUsuarios.csv')
const escrita = as.createWriteStream('novaLista.csv',{flags: 'w', encoding: 'utf8'})

//INTERFACE DA LISTA ORIGEM
const il = lerLinha.createInterface({
    input: leitura
})
// INTERFACE DA LISTA ATUAL
const il2 = lerLinha.createInterface({
    input: as.createReadStream('novaLista.csv')
})
// DATA PRINCIPAL P/ NEW DATA -- Preenche a nova lista com dados da lista original
const preencher = () =>{
    let situacao = false
    il2.on('line', (newData) =>{
        let newCSV = newData.split(',')
        if(newCSV.length > 0){
            situacao = true
        }
    })
    if(!situacao){
    }
    il.on('line', (data) => {
        let splitCSV = data.split(', ')
        if(splitCSV[0] !== 'Nome')
        escrita.write(splitCSV+'\n') 
    }
    )
}
// REMOVE O USUÁRIO SELECIONADO.-----(REMOVER)
const remover = (v_email) =>{
    il2.on('line', (newData) =>{
        let newCSV = newData.split(',')
        if(newCSV[1] !== v_email){
            escrita.write(splitCSV+'\n') 
        }
    }
     )
}
//FUNÇÃO QUE LISTA OS USUÁRIOS CADASTRADOS --- (LISTAR)
const listar = ( ) =>{
    console.clear()
    console.log('*************************** USUÁRIOS ******************************\n')
    il2.on('line', (newData) =>{
        let newCSV = newData.split(',')
        console.log(newCSV)
    }
    )
}
// FUNÇÃO PARA ADICONAR UM USUÁRIO -- (ADICIONAR)
const adicionar = (i_nome, i_email, i_telefone) =>{
    let cadastrado = false
    il2.on('line', (newData) =>{
        let newCSV = newData.split(',')
        if(newCSV[1]=== i_email){
            console.clear()
            cadastrado = true
        }
    }
     )
     if(!cadastrado){
        escrita.write(`${i_nome}, ${i_email}, ${i_telefone}\n`)
     }
}
//FUNÇÃO QUE ALTERA AS INFORMAÇÕES DE UM CADASTRADO -- (EDITAR/ALTERAR)
const alterar = (v_email) =>{
    il2.on('line', (newData) =>{
        let newCSV = newData.split(',')
        if(newCSV[1]=== v_email){
            console.clear()
            newCSV = 
            console.log('Cadastro alterado!\n'+`Nome: ${newCSV[0]}\n`+
        `Email: ${newCSV[1]}\n`+`Telefone: ${newCSV[2]}`)
        }
    }
     )
}
//FUNÇÃO QUE VERIFICA A SITUAÇÃO DE UM DETERMINADO CADASTRO (ENONTRAR)
const verificar = (v_email) =>{
    il2.on('line', (newData) =>{
        let newCSV = newData.split(',')
        if(newCSV[1]=== v_email){
            console.clear()
            console.log('Usuário Cadastrado!\n'+`Nome: ${newCSV[0]}\n`+
        `Email: ${newCSV[1]}\n`+`Telefone: ${newCSV[2]}`)
        }
    }
     )
}
module.exports = { preencher, remover, listar, adicionar, alterar, verificar}