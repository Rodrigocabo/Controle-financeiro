const dummyTransactions =[
{id: 1, name: "bolo de brigadeiro", amount: -20 },
{id: 2, name: "salario," amount: 300},
{id: 3, name: "torta de frango", amount: -10},
{id: 4, name:"camisa" amount: 150 },
]

const addTransactionIntDOM = transaction => {
const operator = transaction.amount < 0 ? '-' : '+'
console.log(operator);

</*li class="minus">
    salario <span>-$500</span><button class="delete-btn">x</button>
</li> */}
}

addTransactionIntDOM(dummyTransactions)