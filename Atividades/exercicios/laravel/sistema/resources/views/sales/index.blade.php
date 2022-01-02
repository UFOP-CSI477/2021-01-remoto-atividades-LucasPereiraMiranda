@extends('principal')

@section('conteudo')

    <div class="alert alert-primary text-center">
        <a href="{{route('peoples.create')}}">Cadastrar</a>
    </div>

    <table class="table table-bordered table-hover table-striped">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Cidade</th>
                <th>Exibir</th>
            </tr>
        </thead>
        <tbody>
            @foreach($peoples as $c)
                <tr>
                    <td>{{ $c->id }}</td>
                    <td>{{ $c->name }}</td>
                    <td>{{ $c->city->name }}</td>
                    <td><a href="{{ route('peoples.show', $c->id)}}">Exibir</a></td>
                </tr>
            @endforeach
        </tbody>
    </table>

@endsection('conteudo')