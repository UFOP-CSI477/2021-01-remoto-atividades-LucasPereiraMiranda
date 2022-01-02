@extends('principal')

@section('conteudo')

<h1>Dados da Cidade</h1>

<p>Id: {{ $city->id }}</p>
<p>Name: {{ $city->name }}</p>
<p>Estado: {{ $city->state->name }}</p>

<a href="{{route('peoples.edit', $city->id)}}">Editar</a>
<a href="{{ route('peoples.index') }}">Voltar</a>

<form name="frmDelete"
      action="{{route('peoples.destroy', $city->id)}}"
      method="post"
      onsubmit="return confirm('Confirma exclusão da Pessoa?');">

    @csrf
    @method('DELETE')

    <input type="submit" value="Excluir">

</form>
@endsection