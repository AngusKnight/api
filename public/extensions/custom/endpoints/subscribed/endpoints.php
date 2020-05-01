<?php
use Directus\Application\Http\Request;
use Directus\Application\Http\Response;
use Directus\Services\ItemsService;

return [
    '' => [
        'method' => 'GET',
        'handler' => function (Request $request, Response $response) {
            
            $itemsService = new ItemsService($this);
            $params = $request->getQueryParams();
            $query = [
                'filter' => [
                    'email' => ['=' => $params['email']]
                ]
            ];

            $results = $itemsService->findAll('newsletter_subscribers', $query);
            $subscribed = [
                'subscribed' => sizeof($results['data']) > 0
            ];

            return $response->withJson($subscribed);
        }
    ],
];