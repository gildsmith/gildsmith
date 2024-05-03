<?php

use Gildsmith\HubApi\Facades\Gildsmith;
use Gildsmith\HubApi\Router\Web\WebApplication;

Gildsmith::registerFallbackWebApplication(new WebApplication(
    identifier: 'storefront',
    route: '/',
    template: 'gildsmith.template',
    params: [
        'app_path' => 'node_modules/@gildsmith/storefront-client/src/app.js',
    ],
));
