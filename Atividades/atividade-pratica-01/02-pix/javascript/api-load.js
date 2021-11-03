function fillSelectBanks(data) {
    console.log(data);
    const banks = document.getElementById('banks');
    clearSelect(banks);
    data.forEach((bank) => {
        const option = document.createElement('option');
        const { code , name } = bank;
        option.value = code;
        option.innerHTML = name;
        banks.appendChild(option);
    });
}

function loadBanks() {
    console.log('entrei aqui');
    const url = 'https://brasilapi.com.br/api/banks/v1';
    fetch(url)
        .then((response) => response.json())
        .then((data) => fillSelectBanks(data))
        .catch((error) => console.error(error.message));
}

function clearSelect(select) {
    while (select.length > 1) {
        select.remove(1);
    }
}

