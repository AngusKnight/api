<?php
use Directus\Application\Http\Request;
use Directus\Application\Http\Response;
use Directus\Services\ItemsService;

return [
    '' => [
        'method' => 'GET',
        'handler' => function (Request $request, Response $response) {
            // Get all answers from DB
            $itemsService = new ItemsService($this);

            $params = $request->getQueryParams();
            $programs = $itemsService->findAll('products', $params);

            return $response->withJson($programs);
        }
    ],
];