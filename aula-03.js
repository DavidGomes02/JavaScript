//  const nomes = ['joão', 'maria', 'josé' ]


// console.log(nomes);

// for (const nome of nomes) {
//     console.log(nome);
// 

//add novo elemento no final da lista
// nomes.push('rafinha')

// //Remove o primeiro elemento da lista
// nomes.shift()
// nomes.shift()


//Remove o ultimo elemento da lista
// nomes.pop()

//add o ultima ao primeiro lugar na fila
// nomes.unshift('josé')

const nomes = ['joão', 'maria', 'josé' ]

const resultado = nomes.find((nome) => {
    return nome === 'josés'
})

console.log(resultado);