@extends('principal')

@section('conteudo')

<form action="{{ route('pessoas.store')}}" method="post">

    @csrf

    <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" name="nome" id="nome">
    </div>

    <div class="form-group">
        <label for="sigla">Bairro</label>
        <input type="text" class="form-control" name="bairro" id="bairro">
    </div>

    <div class="form-group">
        <label for="sigla">Cidade</label>
        <input type="text" class="form-control" name="cidade" id="cidade">
    </div>

    <div class="form-group">
        <label for="sigla">Estado</label>
        <input type="text" class="form-control" name="estado" id="estado">
    </div>

    <div class="form-group">
        <label for="sigla">Data de Nascimento</label>
        <input type="date" class="form-control" name="data_nascimento" id="data_nascimento">
    </div>

    <div class="form-group">
        <label for="sigla">CPF</label>
        <input type="text" class="form-control" name="cpf" id="cpf">
    </div>

    <div class="text-right">
        <input type="submit" value="Cadastrar" class="btn btn-primary">
        <input type="reset" value="Limpar" class="btn btn-danger">
    </div>

</form>

@endsection