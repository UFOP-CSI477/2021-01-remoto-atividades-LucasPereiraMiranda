@extends('principal')

@section('conteudo')

<h1>Dados da Cidade</h1>

<p>Id: {{ $city->id }}</p>
<p>Name: {{ $city->name }}</p>
<p>Estado: {{ $city->state->name }}</p>

<a href="{{route('cities.edit', $city->id)}}">Editar</a>
<a href="{{ route('cities.index') }}">Voltar</a>

<form name="frmDelete"
      action="{{route('cities.destroy', $city->id)}}"
      method="post"
      onsubmit="return confirm('Confirma exclusão da Cidade?');">

    @csrf
    @method('DELETE')

    <input type="submit" value="Excluir">

</form>
@endsection