

function getTransactionsFromLocalStorage(){
    const transactions =  JSON.parse(localStorage.getItem('transactions'));
    if(!transactions){
        localStorage.setItem('transactions',JSON.stringify([]));
    }
    return transactions || [];
}

function getNumberTransactions(transactions){
    return transactions.length;
}

function handleTable(){
    const transactions = getTransactionsFromLocalStorage();
    const numberTransactions = getNumberTransactions(transactions);
    if(numberTransactions===0){
        omitTransactionsTable();
    }
    setTransactionsHistoryTable(transactions);
}

function setTransactionsHistoryTable(transactions){
    const tableBodyElement = document.getElementById('tableBody-show');
    transactions.forEach(transaction =>{
        addTransactionInHistoryTable(tableBodyElement,transaction);
    });
}

function moneyMaskToBRL(money){
    const moneyConvertedToNumber = parseInt(money);
    return moneyConvertedToNumber.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function addTransactionInHistoryTable(tableBodyElement,transaction){
    const masckedMoney = moneyMaskToBRL(transaction.moneyAmounth);
    const tableRowElement = document.createElement('tr');
    tableRowElement.innerHTML = '<tr></tr>';

    const sendBankShow = document.createElement('td');
    const receiveBankShow = document.createElement('td');
    const pixKeyTypeShow = document.createElement('td');
    const pixKeyContentShow = document.createElement('td');
    const operationTypeShow = document.createElement('td');
    const moneyAmounthShow = document.createElement('td');
    const transactionDateShow = document.createElement('td');

    sendBankShow.innerHTML = `<td scope="row">${transaction.sendBank}</td>`;
    receiveBankShow.innerHTML = `<td>${transaction.receiveBank}</td>`;
    pixKeyTypeShow.innerHTML = `<td>${transaction.typePixKey}</td>`;
    pixKeyContentShow.innerHTML = `<td>${transaction.pixKeyContent}</td>`;
    operationTypeShow.innerHTML = `<td>${transaction.operationType}</td>`;
    moneyAmounthShow.innerHTML = `<td>${masckedMoney}</td>`;
    transactionDateShow.innerHTML = `<td>${transaction.transactionDate}</td>`;

    tableRowElement.appendChild(sendBankShow);
    tableRowElement.appendChild(receiveBankShow);
    tableRowElement.appendChild(pixKeyTypeShow);
    tableRowElement.appendChild(pixKeyContentShow);
    tableRowElement.appendChild(operationTypeShow);
    tableRowElement.appendChild(moneyAmounthShow);
    tableRowElement.appendChild(transactionDateShow);

    tableBodyElement.appendChild(tableRowElement);
}

function handleTotal(){
    const transactions = getTransactionsFromLocalStorage();
    const total = getTotalTransactions(transactions);

    const balanceElement = document.getElementsByClassName('balance').item(0);
    balanceElement.innerHTML = moneyMaskToBRL(total);

    if(total < 0){
        balanceElement.classList.add('negative-amount');
    }
}

function getTotalTransactions(transactions){
    const total = transactions.reduce((sum, transaction)=>{
        if(transaction.operationType === 'Receber'){
            return sum + parseInt(transaction.moneyAmounth);
        }
        return sum - parseInt(transaction.moneyAmounth);
    },0);

    return total;
}

function omitTransactionsTable(){
    const tableElement = document.getElementById('table');
    tableElement.className += " omit";
}

function handleHistory(){
    handleTable();
    handleTotal();
}


