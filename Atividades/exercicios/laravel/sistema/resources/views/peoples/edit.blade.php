@extends('principal')

@section('conteudo')

    <form action="{{ route('cities.update', $city->id) }}" method="post">

        @csrf
        @method('put')

        <div class="form-group">
            <label for="nome">Nome</label>
            <input type="text" class="form-control" name="nome" id="nome" value="{{ $city->nome }}">
        </div>

        <div class="form-group">
            <label for="state_id">Estado</label>

            <select name="state_id" id="state_id" class="form-control">

            @foreach($cities as $e)
                <option value="{{$e->id}}"

                @if($city->state_id == $e->id)
                    selected
                @endif

                >{{$e->nome}}</option>
            @endforeach

            </select>

        </div>

        <div class="text-right">
            <input type="submit" value="Atualizar" class="btn btn-primary">
            <input type="reset" value="Limpar" class="btn btn-danger">
        </div>

    </form>

@endsection('conteudo')