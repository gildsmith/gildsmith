<?php

use Gildsmith\HubApi\Facades\Gildsmith;
use Gildsmith\HubApi\Router\Web\AppBuilder;

Gildsmith::app()
    ->param('app_path', 'node_modules/@gildsmith/storefront-client/src/app.js');

Gildsmith::app('dashboard')
    ->route('dashboard')
    ->param('app_path', 'node_modules/@gildsmith/dashboard-client/src/app.js')
    ->param('meta', ['robots' => 'noindex, nofollow'])
    ->restricted('admin');
