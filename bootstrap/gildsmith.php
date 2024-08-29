<?php

use Gildsmith\CoreApi\Facades\Gildsmith;
use Gildsmith\CoreApi\Router\Web\AppBuilder;

Gildsmith::app()
    ->param('app_path', 'node_modules/@gildsmith/storefront-web/src/app.js');

Gildsmith::app('dashboard')
    ->route('dashboard')
    ->param('app_path', 'node_modules/@gildsmith/dashboard-web/src/app.js')
    ->param('meta', ['robots' => 'noindex, nofollow'])
    ->restricted('admin');
