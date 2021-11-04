function fillSelectBanks(data,selectId) {
    let index = 0;
    const banks = document.getElementById(selectId);
    clearSelect(banks);
    data.forEach((bank) => {
        const option = document.createElement('option');
        const { name } = bank;
        option.value = index;
        option.innerHTML = name;
        banks.appendChild(option);
        index += 1;
    });
}

async function loadBanks() {
    const url = 'https://brasilapi.com.br/api/banks/v1';
    const data = await fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error.message));

    fillSelectBanks(data,'sendBank');
    fillSelectBanks(data,'receiveBank');
}

function clearSelect(select) {
    while (select.length > 1) {
        select.remove(1);
    }
}

