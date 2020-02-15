<?php

use Directus\Services\MailService;

return [
    'actions' => [
        'item.create.feedback_messages' => function ($data) {
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
            $mailService = new MailService($this->container);
            $mailService->send($email);
        }
      ]
];
