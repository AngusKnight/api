<?php

namespace Directus\Services;

use Directus\Hash\HashManager;
use Directus\Util\StringUtils;

class UtilsService extends AbstractService
{
    public function hashString($string, $hasher, array $options = [])
    {
        $this->validate([
            'string' => $string
        ], [
            'string' => 'required|string'
        ]);

        $options['hasher'] = $hasher;
        /** @var HashManager $hashManager */
        $hashManager = $this->container->get('hash_manager');
        $hashedString = $hashManager->hash($string, $options);

        return [
            'data' => [
                'hash' => $hashedString
            ]
        ];
    }

    public function randomString($length, $options = [])
    {
        $this->validate(['length' => $length], ['length' => 'numeric']);

        // TODO: Add more options
        $randomString = StringUtils::randomString($length);

        return [
            'data' => [
                'random' => $randomString
            ]
        ];
    }
}
