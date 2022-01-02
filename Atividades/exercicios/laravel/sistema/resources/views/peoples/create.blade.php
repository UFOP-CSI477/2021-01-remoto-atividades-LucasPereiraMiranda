@extends('principal')

@section('conteudo')


    <form action="{{ route('peoples.store') }}" method="post">

        @csrf

        <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" class="form-control" name="name" id="name">
        </div>

        <div class="form-group">
            <label for="city_id">Cidade</label>

            <select name="city_id" id="city_id" class="form-control">

            @foreach($cities as $e)
                <option value="{{$e->id}}">{{$e->name}}</option>
            @endforeach

            </select>

        </div>

        <div class="text-right">
            <input type="submit" value="Cadastrar" class="btn btn-primary">
            <input type="reset" value="Limpar" class="btn btn-danger">
        </div>

    </form>

    <a href="{{ route('peoples.index') }}">Voltar</a>

@endsection('conteudo')