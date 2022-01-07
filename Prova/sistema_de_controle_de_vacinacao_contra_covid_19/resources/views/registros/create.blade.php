@extends('principal')

@section('conteudo')

<form action="{{ route('registros.store')}}" method="post">

    @csrf

    <div class="form-group">
        <label for="unidade_id">ID da unidade</label>
        <input type="text" class="form-control" name="unidade_id" id="unidade_id">
    </div>

    <div class="form-group">
        <label for="pessoa_id">ID da pessoa</label>
        <input type="text" class="form-control" name="pessoa_id" id="pessoa_id">
    </div>

    <div class="form-group">
        <label for="vacina_id">ID da vacina</label>
        <input type="text" class="form-control" name="vacina_id" id="vacina_id">
    </div>

    <div class="form-group">
        <label for="data">Data</label>
        <input type="date" class="form-control" name="data" id="data">
    </div>

    <div class="text-right">
        <input type="submit" value="Cadastrar" class="btn btn-primary">
        <input type="reset" value="Limpar" class="btn btn-danger">
    </div>

</form>

@endsection