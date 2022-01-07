@extends('principal')

@section('conteudo')
<a href="{{ route('registros.create') }}">Cadastrar novo registro</a>
    <table class="table table-bordered table-hover table-striped">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Id da pessoa</th>
                <th>Id da Vacina</th>
                <th>Id da unidade</th>
                <th>Data</th>
                <th>Exibir</th>
            </tr>
        </thead>
        <tbody>

            @foreach($registros as $registro)
                <tr>
                    <td>{{ $registro->id }}</td>
                    <td>{{ $registro->pessoa_id }} </td>
                    <td>{{ $registro->vacina_id }} </td>
                    <td>{{ $registro->unidade_id }} </td>
                    <td>{{ $registro->data }} </td>
                    <td><a href="{{route('registros.show', $registro->id)}}">Exibir</a></td>
                </tr>
            @endforeach
        </tbody>
    </table>

@endsection


<!-- <form name="frmDelete"
                      action="{{ route('registros.destroy', $registro->id)}}"
                      method="post"
                      style="display:inline;"
                      onsubmit="return confirm('Confirma a exclusão da unidade?');">
                      @csrf
                      @method('DELETE')

                      <input type="submit" value="Excluir">

                    </form> -->