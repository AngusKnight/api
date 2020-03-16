<?php

use Directus\Hook\HookInterface;
use Directus\Hook\Payload;

class ReceivedMessageSendMail
{
    public function __invoke(array $data)
    {
        try {
            $container = \Directus\Application\Application::getInstance()->getContainer();
            $email[] = [
                'to' => 'borgosity@gmail.com',
                'subject' => 'New Feedback Message', 
                'body' => '<p>A new message has arrive from {{name}} their email address is {{email}}.</p> <br> <p>{{message}}</p>',
                'type' => 'html',
                'data' => [ 
                    'name' => $data['name'],
                    'email' => $data['email'],
                    'message' => $data['message']
                ]
            ]; 
            $mailService = new \Directus\Services\MailService($container);
            $mailService->send($email);
        } 
        catch (\Exception $e) {
            $container = \Directus\Application\Application::getInstance();
            $logger = $container->fromContainer('logger');
            $logger->error($e);
        }
    }
}