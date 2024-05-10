<?php

use Gildsmith\HubApi\Facades\Gildsmith;
use Gildsmith\HubApi\Router\Web\WebApplication;

Gildsmith::registerFallbackWebApplication(new WebApplication(
    identifier: 'storefront',
    route: '',
    template: 'gildsmith.template',
    params: ['app_path' => 'node_modules/@gildsmith/storefront-client/src/app.js'],
));


Gildsmith::registerWebApplication(new WebApplication(
    identifier: 'dashboard',
    route: 'dashboard',
    template: 'gildsmith.template',
    params: [
        'app_path' => 'node_modules/@gildsmith/dashboard-client/src/app.js',
        'meta' => ['robots' => 'noindex, nofollow'],
    ],
    restricted: ['admin']
));
