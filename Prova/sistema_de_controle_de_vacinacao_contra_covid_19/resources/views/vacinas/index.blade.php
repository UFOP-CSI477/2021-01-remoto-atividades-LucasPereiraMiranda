@extends('principal')

@section('conteudo')

<table class="table table-bordered table-hover table-striped">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>País</th>
                <th>Fabricante</th>
                <th>Doses</th>
                <th>Editar</th>
            </tr>
        </thead>
        <tbody>

            @foreach($vacinas as $vacina)
                <tr>
                    <td>{{ $vacina->id }}</td>
                    <td>{{ $vacina->nome }} </td>
                    <td>{{ $vacina->pais }} </td>
                    <td>{{ $vacina->fabricante }} </td>
                    <td>{{ $vacina->doses }} </td>
                    <td><a href="{{route('vacinas.edit', $vacina->id)}}">Editar</a></td>
                </tr>
            @endforeach
        </tbody>
    </table>

@endsection