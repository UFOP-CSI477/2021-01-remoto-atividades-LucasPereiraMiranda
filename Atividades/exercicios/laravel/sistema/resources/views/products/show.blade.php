@extends('principal')

@section('conteudo')

<h1>Dados do Produto</h1>

<p>Id: {{ $product->id }}</p>
<p>Nome: {{ $product->name }}</p>
<p>Um: {{ $product->um }}</p>

<a href="{{route('products.edit', $product->id)}}">Editar</a>

<a href="{{route('products.index')}}">Voltar</a>

<form name="frmDelete"
    action="{{ route('products.destroy', $product->id)}}"
    method="post"
    onsubmit="return confirm('Confirma a exclusão do produto?');">

    @csrf
    @method('DELETE')

    <input type="submit" value="Excluir">

</form>

@endsection