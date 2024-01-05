const readline = require('readline')// LER LINHA (rl)
const fs = require('fs')  // ARQUIVO DO SISTEMA - FILE SYSTEM(fs)
const { log } = require('console')
const { resolve } = require('path')
const leitura = fs.createReadStream('Mini-projeto/listaUsuarios.csv')
const escrita = fs.createWriteStream('Mini-projeto/novaLista.csv',{flags: 'w', encoding: 'utf8'})
//EXPORTAÇÃO E IMPORTAÇÃO
const call = require('./main.js')
console.log(call)
//INTERFACE DA LISTA ORIGEM
const il = readline.createInterface({
    input: leitura
})

// // DATA PRINCIPAL P/ NEW DATA -- Preenche a nova lista com dados da lista original
// preencher = () =>{
//     let situacao = false
//     il2.on('line', (newData) =>{     //Verfica se a nova lista esta preenchida.
//         let newCSV = newData.split(',') 
//         if(newCSV.length > 0){
//             situacao = true
//         }
//     })
//     if(!situacao){
//     }
//     il.on('line', (data) => {
//         let splitCSV = data.split(', ')
//         if(splitCSV[0] !== 'Nome')      // Verifica se a 1ª linha contém a Id nome
//         escrita.write(splitCSV+'\n') 
//     }
//     )
// }

// REMOVE O USUÁRIO SELECIONADO.-----(REMOVER)
remover = (v_email) =>{
    il2.on('line', (newData) =>{
        // let newCSV = newData.split(',')
        // if(newCSV[1] !== v_email){
        //     escrita.write(newCSV+'\n')
        // }
        if(!newData.includes(v_email)){
            escrita.write(newData+'\n')
        }
    }
     )
}
//FUNÇÃO QUE LISTA OS USUÁRIOS CADASTRADOS --- (LISTAR)
listar = ( ) =>{
    console.clear()

    console.log('*************************** USUÁRIOS ******************************\n')
    il.on('line', (newData) =>{
        let newCSV = newData.split(',')
        if(newCSV[0] !== 'Nome'){
            console.log('Nome: '+newCSV[0]+ ' Email: '+newCSV[1]+ ' Telefone: '+newCSV[2])
        }
    }
    )
}
// FUNÇÃO PARA ADICONAR UM USUÁRIO -- (ADICIONAR)
adicionar = (i_nome, i_email, i_telefone) =>{
    let cadastrado = false
    il.on('line', (newData) =>{
        let newCSV = newData.split(',')
        if(newCSV[1]=== i_email){
            console.clear()
            cadastrado = true
            console.log('Usuário Cadastrado!')
        }
    }
     )
     if(!cadastrado){
        escrita.write(`${i_nome},${i_email},${i_telefone}\n`)
     }
}
//FUNÇÃO QUE ALTERA AS INFORMAÇÕES DE UM CADASTRADO
//FUNÇÃO QUE VERIFICA A SITUAÇÃO DE UM DETERMINADO CADASTRO (ENONTRAR)
verificar = (v_email) =>{
    il.on('line', (newData) =>{
        let newCSV = newData.split(',')
        if(newCSV[1]=== v_email){
            console.clear()
            console.log('Usuário Cadastrado!\n'+`Nome: ${newCSV[0]}\n`+
        `Email: ${newCSV[1]}\n`+`Telefone: ${newCSV[2]}`)
        }
    }
     )
}
// preencher ()
// adicionar('silvano','sil@irede.com', 85986321267)
// verificar('sergio@bol.com')
listar()
