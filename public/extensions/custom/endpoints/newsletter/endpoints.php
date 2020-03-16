<?php
use Directus\Application\Http\Request;
use Directus\Application\Http\Response;
use Directus\Services\ItemsService;

return [
    'subscribed' => [
        'method' => 'GET',
        'handler' => function (Request $request, Response $response) {
            // Get all answers from DB
            $itemsService = new ItemsService($this);

            $query = $request->getQueryParams();
            $results = $itemsService->findAll('newsletter_subscribers', $query);
            $subcribers = [];
            foreach ($results['data'] as $value) {
                $subcribers[] = [
                    'id' => $value['id'],
                    'subscribed' => $value['subscribed']
                ];
            }

            return $response->withJson($subcribers);
        }
    ],
];