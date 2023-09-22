<!DOCTYPE html>
<html lang="es">
<head>
    <style>
        .title {
            width: 100%
        }
        h1 {
            text-align: center;
            color: #2E5DA7;
            width: 100%;
        }
        .ctn1 div {
            display: inline-block;
        }
        .separator {
            width: 80%;
            margin: 0 auto;
            border-bottom: 2px solid #2E5DA7;
        }
        .img1 {
            width: 100%;
            height: 100%;
            margin-bottom: 20px;
        }
        .img1 img {
            width: 70%;
            display: block;
            margin: 0 auto;
        }
        .cuerpo{
            width: 100%;
        }
        .cuerpo div {
            width: 100%;
            display: inline-block;
            margin-bottom: 40px;
        }

        .info {
            width: 50%;
        }

        .info p {
            font-size: 18px;
        }

        .img2 {
            width: 25%;
        }

        .img2 img {
            width: 250px;
        }

        .btn-ctn {
            margin: 20px auto;
            color: white !important;
            width: 50%;
            text-align: center;
        }


        .btn-llamar {
            width: 20%;
            text-decoration: none;
            display: block;
            background: #2E5DA7;
            padding: 10px 20px;
            color: white !important;
            border-radius: 8px;
            margin: 0 auto;
            margin-bottom: 20px;
            text-align: center;
            transition: all .3s;
        }

        .carrito{
            margin-top: 15px;
            font-weight: bold;
        }

        .btn-llamar:hover {
            background-color: #000;
        }
    </style>
</head>

<body>
    <div class="ctn1">
        <div class="img1">
            <img src="https://radiologiadental.opticasintegra.com/assets/logo-4717f647.png">
        </div>

        <div class="title">
            <h1>¡Queremos contactarte!</h1>
        </div>
    </div>
    <div class="separator">
    </div>
    <div class="cuerpo">
        <div class="info">
            <p>Nombres: {{$nombres}}</p>
            <p>Correo: {{$email}}</p>
            <p>Celular: <a>{{$celular}}</a></p>
            <p>Asunto: {{$asunto}}<p/>
            <p>Mensaje: {{$mensaje}}<p/>
        </div>
    </div>
</body>

</html>