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

            $query = [
                'filter' => [
                    'sold' => ['=' => false]
                    ]
            ];
            $results = $itemsService->findAll('artwork', $query);
            $products = [];
            foreach ($results['data'] as $value) {
                $products[] = [
                    'id' => $value['id'],
                    'name' => $value['title'], 
                    'description' => $value['description'],
                    'price' => $value['price'],
                    'image' => $value[''],
                    'url' => '/products',
                    'weight' => $value['parcel_weight'],
                    'width' => $value['parcel_width'],
                    'height' => $value['parcel_height'],
                    'length' => $value['parcel_length']
                ];
            }

            return $response->withJson($products);
        }
    ],
];