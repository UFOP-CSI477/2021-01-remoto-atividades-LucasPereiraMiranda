
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



    const isValid = validateFields();

    if(!isValid){
        return;
    }

    const pixTransaction = new Transaction(sendBank,receiveBank,typePixKey,pixKeyContent,operationType,moneyAmounth,transactionDate);
    addTransactionToLocalStorage(pixTransaction);

    window.alert('Transação registrada com sucesso!');
}


function validateIsNotEmpty(content) {
    if (content === 0) {
        window.alert(`O campo está vazio!`);
        return false;
    }
    return true;
}

function validateIsNotDefault(inputField){
    const value = getSelectedContent(inputField)
    console.log(value);
    if (value == '-') {
        window.alert(`Escolha uma opção corretamente!`);
        inputField.value = '';
        inputField.focus();
        return false;
    }
    return true;
}

function validateIsNumber(content) {
    if (isNaN(parseInt(content))) {
        window.alert(`O campo não é um número!`);
        return false;
    }
    return true;
}

const validateFields = () => {
    const {
        sendBank: sendBankElement,
        receiveBank: receiveBankElement,
        typePixKey: typePixKeyElement,
        operationType: operationTypeElement
    } = document.newTransaction;
    const pixKeyContent = document.newTransaction.PixKeyContent.value;
    const moneyAmounthContent = document.newTransaction.moneyAmounth.value;

    const isValid =
        validateIsNotDefault(sendBankElement) &&
        validateIsNotDefault(receiveBankElement) &&
        validateIsNotDefault(typePixKeyElement) &&
        validateIsNotDefault(operationTypeElement) &&
        validateIsNotEmpty(pixKeyContent) &&
        validateIsNumber(moneyAmounthContent);
    return isValid;
}