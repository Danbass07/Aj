<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>AJ's Travel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:500,600" rel="stylesheet">
        <!-- Styles -->

    </head>
    <body>
    @extends('layouts.app')
    @section('content')

    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">

              Place for simple website
              If you are Pub Owner or taxi driver please LOG IN
            </div>
        </div>
    </div>
</div>

    @endsection
    </body>
</html>
