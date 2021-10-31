function limparSelect(campo) {
  while (campo.length > 1) {
    campo.remove(1);
  }
}

function preencherSelectEstados(data) {
  const estados = document.getElementById('estados');
  limparSelect(estados);
  data.forEach((estado) => {
    const option = document.createElement('option');
    const { id, nome, sigla } = estado;
    option.value = id;
    option.innerHTML = `${nome}-${sigla}`;
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

function carregarEstados() {
  const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
  fetch(url)
    .then((response) => response.json())
    .then((data) => preencherSelectEstados(data))
    .catch((error) => console.error(error.message));
}

function carregarCidades() {
  const estados = document.getElementById('estados');
  const estado_index = estados.selectedIndex;
  const estado_id = estados.options[estado_index].value;
  console.log('entrei aqui na marotagem');
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
