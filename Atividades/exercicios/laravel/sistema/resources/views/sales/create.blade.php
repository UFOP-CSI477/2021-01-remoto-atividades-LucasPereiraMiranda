@extends('principal')

@section('conteudo')


    <form action="{{ route('sales.store') }}" method="post">

        @csrf

        <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" class="form-control" name="name" id="name">
        </div>

        <div class="form-group">
            <label for="product_id">Produto</label>

            <select name="product_id" id="product_id" class="form-control">

            @foreach($product as $e)
                <option value="{{$e->id}}">{{$e->name}}</option>
            @endforeach

            </select>

        </div>

        <div class="form-group">
            <label for="pessoa_id">Pessoa</label>

            <select name="pessoa_id" id="pessoa_id" class="form-control">

            @foreach($people as $e)
                <option value="{{$e->id}}">{{$e->name}}</option>
            @endforeach

            </select>

        </div>

        <div class="text-right">
            <input type="submit" value="Cadastrar" class="btn btn-primary">
            <input type="reset" value="Limpar" class="btn btn-danger">
        </div>

    </form>

    <a href="{{ route('sales.index') }}">Voltar</a>

@endsection('conteudo')