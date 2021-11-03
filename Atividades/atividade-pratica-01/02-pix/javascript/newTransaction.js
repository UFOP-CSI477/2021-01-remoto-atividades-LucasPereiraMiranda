
function Transaction(bank,typePixKey,pixKeyContent,operationType,moneyAmounth,transactionDate){
    this.bank = bank;
    this.typePixKey = pixKeyContent;
    this.operationType = operationType;
    this.moneyAmounth= moneyAmounth;
    this.transactionDate = transactionDate;
    return this;
}

function valid(){}


function addTransactionToHistory(pixTransaction){
    document.getElementById()
}

function getSelectedContent(index,select){
    document.newTransaction.banks.value
}

function handleNewTransaction(){
    const bank = document.newTransaction.banks.valueOf();
    const typePixKey = document.newTransaction.typePixKey.value;
    const pixKeyContent = document.newTransaction.PixKeyContent.value;
    const operationType = document.newTransaction.operationType.value;
    const moneyAmounth = document.newTransaction.moneyAmounth.value;
    const transactionDate = document.newTransaction.transactionDate.value;
    // valid();
    const pixTransaction = new Transaction(bank,typePixKey,pixKeyContent,operationType,moneyAmounth,transactionDate);
    console.log(pixTransaction);
    addTransactionToHistory(pixTransaction);
}

function carregarDadosFormulario() {
    const bank = document.newTransaction.banks;
    const sobrenome = document.frmDados.sobrenome.value;

    const pessoa = new Pessoa(nome,sobrenome);

    console.log(pessoa);

    window.alert(`Dados carregados com sucesso ${pessoa.nome} ${pessoa.sobrenome}`);

    const object = {
        name: pessoa.nome,
        lastName: pessoa.sobrenome,
        address:{
            street: 'Rua Capitão Bernando',
            number: '100'
        }
    }
    console.log(object);
}