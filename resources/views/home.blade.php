@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"> <b> Bienvenido {{ Auth()->user()->name }}</b></div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">

                                <div class="card" style="width:18rem;">
                                    <img width="150" height="200"
                                        src="https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2017/03/27/58d9a6a7c3a99.r_1490658994165.0-569-1624-1381.jpeg"
                                        class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h3 style="text-align: justify">Solicitar Servicio</h3>
                                        <p class="card-text">Servicio personalizado de transporte</p>
                                        <button class="btn btn-primary"  onclick="hizoClick()">Solicitar</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card" style="width:18rem;">
                                    <img width="150" height="200"
                                        src="https://ecosdelcombeima.com/sites/default/files/rutas17.jpg"
                                        class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h3 class="card-title">Rutas de Buses</h3>
                                        <p class="card-text">Ver rutas y ubicacion de buses en tiempo real</p>
                                        <a href="" class="btn btn-primary">Ver </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card" style="width:18rem;">
                                    <img width="150" height="200"
                                        src="https://www.sharecrf.com/assets/soluciones/registros-bedae0ddfc28b0c8e249c65698cc3b64ff7edd5f9524b450edc5ba99514f1864.png"
                                        class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h3 class="card-title">Historial de servicios</h3>
                                        <p class="card-text">Ver historial de transportes privados</p>
                                        <a href="" class="btn btn-primary">Ver Historial</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card" style="width:18rem;">
                                    <img width="150" height="200"
                                        src="data:image/jpeg;base64,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"
                                        class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h3 class="card-title">Eres conductor?</h3>
                                        <p class="card-text">Registrate para trabajar con nosotros</p>
                                        <a href="" class="btn btn-primary">Registro</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

<br><br>

@section('js')
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js"></script>

    <script>
        function hizoClick() {
            var nombre = document.getElementById("nombre").value;
            var correo = document.getElementById("correo").value;
            if (nombre == "" || correo == "") {
                alert("Debes compeltar ambos campos");
            } else {
                alert("Enviado");
            }
        }
    </script>

@endsection
