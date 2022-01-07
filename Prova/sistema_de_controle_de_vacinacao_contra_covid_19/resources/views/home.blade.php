@extends('principal')

@section('conteudo')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Seja bem-vindo(a) ao Dashboard do sistema') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    Acesse os recursos presentes na barra de navegação para realizar as operações sobre as pessoas, unidades, vacinas e registros.
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
