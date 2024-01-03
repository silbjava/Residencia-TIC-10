const fs = require('fs').promises

const usersString = fs.readFile('./users.csv', 'utf-8', 'r')

const addressString = fs.readFile('./address.csv', 'utf-8', 'r')

usersString.then((usersList) => {
    
})

addressString.then((addressList) =>{
   
})

Promise.all([usersString, addressString]).then((uniqueList) =>{
    //-------- LISTA DE USUÁRIO - SLICE---------------
    let userList = []
    userList.push(uniqueList[0].slice(12,27).replace('1,', 'Usuário: '))
    userList.push(uniqueList[0].slice(31,43).replace('2,', 'Usuário: '))
    userList.push(uniqueList[0].slice(47,60).replace('3,', 'Usuário: '))
    userList.push(uniqueList[0].slice(64,78).replace('4,', 'Usuário: '))
    //-------- LISTA DE ENDEREÇO - SLICE---------------
    let addressList = []
    addressList.push(uniqueList[1].slice(25,56).replace('1,2,', 'Endereço: ').split(',')) 
    addressList.push(uniqueList[1].slice(57,87).replace('2,3,', 'Endereço: ').split(','))
    addressList.push(uniqueList[1].slice(88,110).replace('3,1,', 'Endereço: ').split(','))
    addressList.push(uniqueList[1].slice(111,140).replace('4,4,', 'Endereço: ').split(','))
    for(i = 0; i < 4; i++){
        console.log(userList[i]+'\n'+addressList[i][0]+', '+ addressList[i][1]+'\n')
    }
})
