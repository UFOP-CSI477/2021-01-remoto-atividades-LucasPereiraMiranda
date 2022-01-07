@extends('principal')

@section('conteudo')

    <a href="{{ route('pessoas.create') }}">Cadastrar nova pessoa</a>

    <table class="table table-bordered table-hover table-striped">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Bairro</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Data Nascimento</th>
                <th>CPF</th>
            </tr>
        </thead>
        <tbody>

            @foreach($pessoas as $pessoa)
                <tr>
                    <td>{{ $pessoa->id }}</td>
                    <td>{{ $pessoa->nome }} </td>
                    <td>{{ $pessoa->bairro }} </td>
                    <td>{{ $pessoa->cidade }} </td>
                    <td>{{ $pessoa->estado }} </td>
                    <td>{{ $pessoa->data_nascimento }} </td>
                    <td>{{ $pessoa->cpf }} </td>
                </tr>
            @endforeach
        </tbody>
    </table>

@endsection