<?php

use Gildsmith\CoreApi\Facades\Gildsmith;

Gildsmith::app()
    ->template('gildsmith::storefront')
    ->param('app_path', 'node_modules/@gildsmith/storefront-web/src/app.js');

Gildsmith::app('dashboard')
    ->route('dashboard')
    ->template('gildsmith::dashboard')
    ->param('app_path', 'node_modules/@gildsmith/dashboard-web/src/app.js')
    ->param('meta', ['robots' => 'noindex, nofollow'])
    ->restrictedTo('admin');
