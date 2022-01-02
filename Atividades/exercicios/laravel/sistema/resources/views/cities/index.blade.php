@extends('principal')

@section('conteudo')

    <div class="alert alert-primary text-center">
        <a href="{{route('cities.create')}}">Cadastrar</a>
    </div>

    <table class="table table-bordered table-hover table-striped">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Estado</th>
                <th>Exibir</th>
            </tr>
        </thead>
        <tbody>
            @foreach($cities as $c)
                <tr>
                    <td>{{ $c->id }}</td>
                    <td>{{ $c->name }}</td>
                    <td>{{ $c->state->name }}-{{ $c->state->sigla }}</td>
                    <td><a href="{{ route('cities.show', $c->id)}}">Exibir</a></td>
                </tr>
            @endforeach
        </tbody>
    </table>

@endsection('conteudo')