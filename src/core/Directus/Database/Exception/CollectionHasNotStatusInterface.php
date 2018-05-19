<?php

namespace Directus\Database\Exception;

use Directus\Exception\Exception;

class CollectionHasNotStatusInterface extends Exception
{
    public function __construct($collection)
    {
        parent::__construct(
            sprintf('"%s" collection has not status interface', $collection)
        );
    }
}
