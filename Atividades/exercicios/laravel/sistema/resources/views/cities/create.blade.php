@extends('principal')

@section('conteudo')


    <form action="{{ route('cities.store') }}" method="post">

        @csrf

        <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" class="form-control" name="name" id="name">
        </div>

        <div class="form-group">
            <label for="state_id">Estado</label>

            <select name="state_id" id="state_id" class="form-control">

            @foreach($states as $e)
                <option value="{{$e->id}}">{{$e->name}}</option>
            @endforeach

            </select>

        </div>

        <div class="text-right">
            <input type="submit" value="Cadastrar" class="btn btn-primary">
            <input type="reset" value="Limpar" class="btn btn-danger">
        </div>

    </form>

    <a href="{{ route('cities.index') }}">Voltar</a>

@endsection('conteudo')