@extends('principal')

@section('conteudo')

<h1>Dados do Registro</h1>

<p>Id: {{ $registro->id }}</p>
<p>Id da pessoa: {{ $registro->pessoa_id }}</p>
<p>Id da Vacina: {{ $registro->vacina_id }}</p>
<p>Id da unidade: {{ $registro->unidade_id }}</p>

<a href="{{route('registros.edit', $registro->id)}}">Editar</a>
<a href="{{ route('registros.index') }}">Voltar</a>

<form name="frmDelete"
      action="{{route('registros.destroy', $registro->id)}}"
      method="post"
      onsubmit="return confirm('Confirma exclusão do registro?');">

    @csrf
    @method('DELETE')

    <input type="submit" value="Excluir">

</form>
@endsection