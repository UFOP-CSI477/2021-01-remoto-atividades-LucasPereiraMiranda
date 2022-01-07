@extends('principal')

@section('conteudo')

<form action="{{ route('vacinas.update', $vacina->id)}}" method="post">

    @csrf
    @method('PUT')

    <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" class="form-control" name="nome" id="nome" value="{{ $vacina->nome }}">
    </div>

    <div class="form-group">
        <label for="pais">País</label>
        <input type="text" class="form-control" name="pais" id="pais" value="{{ $vacina->pais }}">
    </div>

    <div class="form-group">
        <label for="fabricante">Fabricante</label>
        <input type="text" class="form-control" name="fabricante" id="fabricante" value="{{ $vacina->fabricante }}">
    </div>

    <div class="form-group">
        <label for="doses">Doses</label>
        <input type="text" class="form-control" name="doses" id="doses" value="{{ $vacina->doses }}">
    </div>


    <div class="text-right">
        <input type="submit" value="Atualizar" class="btn btn-primary">
        <input type="reset" value="Limpar" class="btn btn-danger">
    </div>

</form>

@endsection