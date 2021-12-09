@extends('principal')

@section('conteudo')

<form action="{{ route('products.store')}}" method="post">

    @csrf

    <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" class="form-control" name="name" id="name">
    </div>

    <div class="form-group">
        <label for="um">Um</label>
        <input type="text" class="form-control" name="um" id="um">
    </div>

    <div class="text-right">
        <input type="submit" value="Cadastrar" class="btn btn-primary">
        <input type="reset" value="Limpar" class="btn btn-danger">
    </div>

</form>

@endsection