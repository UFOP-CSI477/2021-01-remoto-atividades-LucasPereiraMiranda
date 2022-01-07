@extends('principal')

@section('conteudo')

    <form action="{{ route('registros.update', $registro->id) }}" method="post">

        @csrf
        @method('put')

        <div class="form-group">
            <label for="unidade_id">ID da Unidade</label>
            <input type="text" class="form-control" name="unidade_id" id="unidade_id" value="{{ $registro->unidade_id }}">
        </div>

        <div class="form-group">
            <label for="pessoa_id">ID da Pessoa</label>
            <input type="text" class="form-control" name="pessoa_id" id="pessoa_id"  value="{{ $registro->pessoa_id }}">
        </div>

        <div class="form-group">
            <label for="vacina_id">ID da Vacina</label>
            <input type="text" class="form-control" name="vacina_id" id="vacina_id"  value="{{ $registro->vacina_id }}">
        </div>

        <div class="text-right">
            <input type="submit" value="Atualizar" class="btn btn-primary">
            <input type="reset" value="Limpar" class="btn btn-danger">
        </div>

    </form>

@endsection('conteudo')