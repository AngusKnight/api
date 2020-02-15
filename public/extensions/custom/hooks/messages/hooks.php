<?php

return [
    'actions' => [
        'item.create.feedback_messages' => function ($data) {
          $content = 'New feedbackk message has arrived: ' . $data['message'];
          notify('borgosity@gmail.com', 'New Feedback Message', $content);
        }
      ]
];
