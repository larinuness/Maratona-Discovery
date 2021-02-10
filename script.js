const Modal = {
    open(){
        //Abrir o modal e add o active
        document.querySelector('.modal-overlay').classList.add('active');

    },
    close() {
       //fechar o modal e remover o active
       document.querySelector('.modal-overlay').classList.remove('active');
    }
}

const Transaction = {

    income(){
        //Somar as entradas
    },

    expenses(){
       //Somar as saidas
    },

    total(){
        //Entradas - saidas

    }

}

const transactions = [{
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '30/01/2021'

},
{
    id: 2,
    description: 'Venda Mercado Livre',
    amount: 10000,
    date: '10/02/2021'
},
{
    id: 3,
    description: 'Internet',
    amount: -15000,
    date: '05/02/2021'
}
]


const DOM = {

    addTransaction(transaction,index){
        console.log()
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction()

    },

    innerHTMLTransaction() {
        
        const html = `
        
        <td class="description">${transaction.description}</td>
        <td class="expenses">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td><img src="./images/minus.svg" alt="Remover transação" /></td>
        `
        return html
    }
}

DOM.addTransaction(transactions[0])