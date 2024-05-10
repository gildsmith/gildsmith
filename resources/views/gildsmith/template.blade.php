<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <title>{{ env('APP_NAME') }}</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">

    @vite($webapp->params['app_path'])
    @vite('resources/css/gildsmith.css')

    <meta name="base-path" content="{{ $webapp->route }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    @foreach($webapp->params['meta'] ?? [] as $name => $content)
        <meta name="{{ $name }}" content="{{ $content }}">
    @endforeach
</head>
<body>
<div id="app"></div>
</body>
</html>
