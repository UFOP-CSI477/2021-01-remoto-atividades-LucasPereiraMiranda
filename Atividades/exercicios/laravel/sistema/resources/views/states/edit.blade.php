@extends('principal')

@section('conteudo')

<form action="{{ route('states.update', $state->id)}}" method="post">

    @csrf
    @method('PUT')

    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" name="name" id="name" value="{{ $state->name }}">
    </div>

    <div class="form-group">
        <label for="sigla">Sigla</label>
        <input type="text" class="form-control" name="sigla" id="sigla" value="{{ $state->sigla }}">
    </div>

    <div class="text-right">
        <input type="submit" value="Atualizar" class="btn btn-primary">
        <input type="reset" value="Limpar" class="btn btn-danger">
    </div>

</form>

@endsection