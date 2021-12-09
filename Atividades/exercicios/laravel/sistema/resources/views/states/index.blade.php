@extends('principal')

@section('conteudo')

    <a href="{{ route('states.create') }}">Cadastrar</a>

    <table class="table table-bordered table-hover table-striped">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Sigla</th>
                <th>Exibir</th>
            </tr>
        </thead>
        <tbody>

            @foreach($states as $state)
                <tr>
                    <td>{{ $state->id }}</td>
                    <td>{{ $state->name }} </td>
                    <td>{{ $state->sigla }}</td>
                    <td><a href="{{route('states.show', $state->id)}}">Exibir</a></td>
                </tr>
            @endforeach
        </tbody>
    </table>

@endsection