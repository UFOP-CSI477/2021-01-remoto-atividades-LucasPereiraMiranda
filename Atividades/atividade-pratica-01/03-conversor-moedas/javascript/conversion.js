
function Conversion(fromCoin,toCoin,fromCoinQuantity){
    this.fromCoin = fromCoin;
    this.toCoin = toCoin;
    this.fromCoinQuantity = fromCoinQuantity;
    return this;
}

function getSelectedContent(element){
    return element.options[element.selectedIndex].text;
}

async function handleNewConversion(){
    const fromCoinElement = document.newConversion.fromCoin;
    const ToCoinElement = document.newConversion.toCoin;

    const fromCoinContent = getSelectedContent(fromCoinElement);
    const toCoinContent = getSelectedContent(ToCoinElement);
    const quantityFromCoin = document.newConversion.quantityFromCoin.value;

    const isValid = validateFields();

    if(!isValid){
        return;
    }

    const conversion = new Conversion(fromCoinContent,toCoinContent,quantityFromCoin);
    const result = await conversionCalc(conversion);

    setConversionResult(result);
    window.alert('calculado com sucesso!');
}

function setConversionResult(conversionResult){
    const conversionResultElement = document.getElementById('conversion-result');
    conversionResultElement.innerHTML = conversionResult;
}


async function conversionCalc(conversion){
    const resume = await loadCoins(conversion.fromCoin , conversion.toCoin);
    const { bid } = resume;
    const quantityFromCoin = parseFloat(conversion.fromCoinQuantity);
    const convertedBid = parseFloat(bid);
    const result =quantityFromCoin * convertedBid;
    return result.toFixed(4);
}

function setCoinFieldReturningResume(data) {
    const nameToDisplayElement = document.getElementById('name');
    const bidToDisplayElement = document.getElementById('bid');

    const result = data[0];

    nameToDisplayElement.innerHTML = result.name;
    bidToDisplayElement.innerHTML = result.bid;

    return {
        name: result.name,
        bid: result.bid
    }

}

async function loadCoins(coinFrom, coinTo) {
    const url = `https://economia.awesomeapi.com.br/json/${coinFrom}-${coinTo}`;
    const data = await fetch(url)
        .then(status)
        .then((response) => response.json())
        .catch((error) => handleApiError(error));

    const resume = setCoinFieldReturningResume(data);
    return resume;
}
function status(res) {
    if (!res.ok) {
        return Promise.reject()
    }
    return res;
}

function handleApiError(error){
    window.alert(`A api retornou uma mensagem de error, ${error.message}`);
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
    const fromCoinElement = document.newConversion.fromCoin;
    const ToCoinElement = document.newConversion.toCoin;
    const quantityFromCoin = document.newConversion.quantityFromCoin.value;

    const isValid =
        validateIsNotDefault(fromCoinElement) &&
        validateIsNotDefault(ToCoinElement) &&
        validateIsNotEmpty(quantityFromCoin) &&
        validateIsNumber(quantityFromCoin)
    return isValid;
}


