
function Transaction(sendBank,receiveBank,typePixKey,pixKeyContent,operationType,moneyAmounth,transactionDate){
    this.sendBank = sendBank;
    this.receiveBank = receiveBank;
    this.typePixKey = typePixKey;
    this.pixKeyContent = pixKeyContent;
    this.operationType = operationType;
    this.moneyAmounth= moneyAmounth;
    this.transactionDate = transactionDate;
    return this;
}

function valid(){}


function addTransactionToLocalStorage(pixTransaction){
    const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
    const updatedTransactions = [...transactions,pixTransaction];
    localStorage.setItem('transactions',JSON.stringify(updatedTransactions));
    console.log('items atualizados',  JSON.parse(localStorage.getItem('transactions')));
}


function getSelectedContent(element){
    return element.options[element.selectedIndex].text;
}

function handleNewTransaction(){
    const sendBankElement = document.newTransaction.sendBank;
    const receiveBankElement = document.newTransaction.receiveBank;
    const typePixKeyElement = document.newTransaction.typePixKey;
    const operationTypeElement = document.newTransaction.operationType;

    const sendBank = getSelectedContent(sendBankElement);
    const receiveBank = getSelectedContent(receiveBankElement);
    const pixKeyContent = document.newTransaction.PixKeyContent.value;
    const moneyAmounth = document.newTransaction.moneyAmounth.value;
    const transactionDate = document.newTransaction.transactionDate.value;
    const typePixKey = getSelectedContent(typePixKeyElement);
    const operationType = getSelectedContent(operationTypeElement);

    // valid();
    const pixTransaction = new Transaction(sendBank,receiveBank,typePixKey,pixKeyContent,operationType,moneyAmounth,transactionDate);
    addTransactionToLocalStorage(pixTransaction);
}