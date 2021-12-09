@extends('principal')

@section('conteudo')

    <a href="{{ route('products.create') }}">Cadastrar</a>

    <table class="table table-bordered table-hover table-striped">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Um</th>
                <th>Exibir</th>
            </tr>
        </thead>
        <tbody>

            @foreach($products as $product)
                <tr>
                    <td>{{ $product->id }}</td>
                    <td>{{ $product->name }} </td>
                    <td>{{ $product->um }}</td>
                    <td><a href="{{route('products.show', $product->id)}}">Exibir</a></td>
                </tr>
            @endforeach
        </tbody>
    </table>

@endsection