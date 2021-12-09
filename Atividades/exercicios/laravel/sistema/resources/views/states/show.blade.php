@extends('principal')

@section('conteudo')

<h1>Dados do Estado</h1>

<p>Id: {{ $state->id }}</p>
<p>Nome: {{ $state->name }}</p>
<p>Sigla: {{ $state->sigla }}</p>

<a href="{{route('states.edit', $state->id)}}">Editar</a>

<a href="{{route('states.index')}}">Voltar</a>

<form name="frmDelete"
    action="{{ route('states.destroy', $state->id)}}"
    method="post"
    onsubmit="return confirm('Confirma a exclusão do estado?');">

    @csrf
    @method('DELETE')

    <input type="submit" value="Excluir">

</form>

@endsection