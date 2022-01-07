@extends('principal')

@section('conteudo')

    <table class="table table-bordered table-hover table-striped">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Bairro</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Data</th>
                <th>Excluir</th>
            </tr>
        </thead>
        <tbody>

            @foreach($unidades as $unidade)
                <tr>
                    <td>{{ $unidade->id }}</td>
                    <td>{{ $unidade->bairro }} </td>
                    <td>{{ $unidade->cidade }} </td>
                    <td>{{ $unidade->estado }} </td>
                    <td>{{ $unidade->data }} </td>
                    <td><form name="frmDelete"
                      action="{{ route('unidades.destroy', $unidade->id)}}"
                      method="post"
                      style="display:inline;"
                      onsubmit="return confirm('Confirma a exclusão da unidade?');">
                      @csrf
                      @method('DELETE')

                      <input type="submit" value="Excluir">

                    </form></td>
                </tr>
            @endforeach
        </tbody>
    </table>

@endsection