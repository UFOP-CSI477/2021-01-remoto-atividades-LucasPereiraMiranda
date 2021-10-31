function limparSelect(campo) {
  while (campo.length > 1) {
    campo.remove(1);
  }
}

function preencherSelectRegioes(data) {
  const regioes = document.getElementById('regioes');
  limparSelect(regioes);
  data.forEach((regiao) => {
    const option = document.createElement('option');
    const { id, nome, sigla } = regiao;
    option.value = id;
    option.innerHTML = `${nome} - ${sigla}`;
    regioes.appendChild(option);
  });
}

function preencherSelectEstados(data) {
  const estados = document.getElementById('estados');
  limparSelect(estados);
  data.forEach((estado) => {
    const option = document.createElement('option');
    const { id, nome, sigla } = estado;
    option.value = id;
    option.innerHTML = `${nome} - ${sigla}`;
    estados.appendChild(option);
  });
}

function preencherSelectCidades(data) {
  const cidades = document.getElementById('cidades');
  limparSelect(cidades);
  data.forEach((cidade) => {
    const option = document.createElement('option');
    const { id, nome } = cidade;
    option.value = id;
    option.innerHTML = nome;
    cidades.appendChild(option);
  });
}

function carregarRegioes() {
  const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes';
  fetch(url)
    .then((response) => response.json())
    .then((data) => preencherSelectRegioes(data))
    .catch((error) => console.error(error.message));
}

function carregarEstados() {
  const regioes = document.getElementById('regioes');
  const regiao_index = regioes.selectedIndex;
  const regiao_id = regioes.options[regiao_index].value;
  const estados = document.getElementById('estados');
  limparSelect(estados);

  if (regiao_id == '') {
    return;
  }
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiao_id}/estados`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => preencherSelectEstados(data))
    .catch((error) => console.error(error.message));
}

function carregarCidades() {
  const estados = document.getElementById('estados');
  const estado_index = estados.selectedIndex;
  const estado_id = estados.options[estado_index].value;
  const cidades = document.getElementById('cidades');
  limparSelect(cidades);

  if (estado_id == '') {
    return;
  }
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado_id}/municipios`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => preencherSelectCidades(data))
    .catch((error) => console.error(error.message));
}
