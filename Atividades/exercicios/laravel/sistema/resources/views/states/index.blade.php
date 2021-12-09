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

            @foreach($states as $e)
                <tr>
                    <td>{{ $e->id }}</td>
                    <td>{{ $e->name }} </td>
                    <td>{{ $e->sigla }}</td>
                    <td><a href="{{route('states.show', $e->id)}}">Exibir</a></td>
                </tr>
            @endforeach
        </tbody>
    </table>

@endsection