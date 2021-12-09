@extends('principal')

@section('conteudo')

<form action="{{ route('products.update', $product->id)}}" method="post">

    @csrf
    @method('PUT')

    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" name="name" id="name" value="{{ $product->name }}">
    </div>

    <div class="form-group">
        <label for="um">Um</label>
        <input type="text" class="form-control" name="um" id="um" value="{{ $product->um }}">
    </div>

    <div class="text-right">
        <input type="submit" value="Atualizar" class="btn btn-primary">
        <input type="reset" value="Limpar" class="btn btn-danger">
    </div>

</form>

@endsection