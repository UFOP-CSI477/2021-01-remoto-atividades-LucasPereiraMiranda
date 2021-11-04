

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

function handleHistory(){
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

function addTransactionInHistoryTable(tableBodyElement,transaction){
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
    moneyAmounthShow.innerHTML = `<td>${transaction.moneyAmounth}</td>`;
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

function omitTransactionsTable(){
    const tableElement = document.getElementById('table');
    tableElement.className += " omit";
}

handleHistory();

