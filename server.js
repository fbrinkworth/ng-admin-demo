var express = require('express');
var app = express();

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html', 'css', 'js'],
  index: "index.html",
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
};

app.use(express.static('public', options));



var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);

});

/*

var server = require('json-server');

server.low.db = {
    "posts": [
        {
            "id": 1,
            "title": "Mouse, turning to Alice. 'What IS the fun?' said Alice..",
            "body": "Exactly as we were. My notion was that you couldn't cut off a bit of the doors of the door and.",
            "tags": [1, 3]
        },
        {
            "id": 2,
            "title": "Duchess said to herself, 'in my going out.",
            "body": "I fancy--Who's to go with the end of every line: 'Speak roughly to your little boy, And beat him when he pleases!' CHORUS. 'Wow! wow! wow!'.",
            "tags": [3, 5]
        },
        {
            "id": 3,
            "title": "MARMALADE', but to her feet in the air. She did not wish to offend the Dormouse began.",
            "body": "Duchess; 'and that's a fact.' Alice did not get hold of anything, but she stopped hastily, for the moment.",
            "tags": [1, 2]
        },
        {
            "id": 4,
            "title": "As soon as the jury had a vague sort of chance of her hedgehog. The.",
            "body": "Knave shook his head mournfully. 'Not I!' said the Dormouse; '--well.",
            "tags": []
        },
        {
            "id": 5,
            "title": "The Knave of Hearts, who only bowed and smiled in reply..",
            "body": "The players all played at once set to partners--' '--change lobsters, and retire in same order,' continued the.",
            "tags": []
        },
        {
            "id": 6,
            "title": "I don't want to get hold of its mouth and yawned once or twice, half hoping that the cause.",
            "body": "Alice. 'That's the judge,' she said to Alice, very much confused, 'I don't know one,' said.",
            "tags": [1,4]
        },
        {
            "id": 7,
            "title": "Alice. 'That's the first witness,' said the.",
            "body": "Alice. 'I wonder what they WILL do next! If they had settled down again, the Dodo suddenly called out in a shrill, loud voice, and the poor little thing howled so, that he shook both his shoes off. 'Give your evidence,' the King eagerly, and he wasn't going.",
            "tags": [3,4]
        },
        {
            "id": 8,
            "title": "Alice, very much of it appeared. 'I don't think they play at all anxious.",
            "body": "Poor Alice! It was as long as there was hardly room for YOU, and no room to grow up any more questions about it, you know--' 'What did they live at the March Hare. Visit either you like: they're both mad.' 'But I don't know,'.",
            "tags": [5,1]
        },
        {
            "id": 9,
            "title": "THEN--she found herself in Wonderland, though she knew she had gone through.",
            "body": "Mouse only growled in reply. 'That's right!' shouted the Queen, stamping on the bank, and of.",
            "tags": []
        },
        {
            "id": 10,
            "title": "Mock Turtle, and to her to wink with one eye; 'I seem to put.",
            "body": "Rabbit's voice along--'Catch him, you by the.",
            "tags": [1,4]
        },
        {
            "id": 11,
            "title": "I suppose you'll be asleep again before it's done.' 'Once.",
            "body": "Queen, 'and he shall tell you his history,' As they walked off together. Alice was not quite like the largest telescope that ever was! Good-bye, feet!' (for when she got to the law, And argued each case with MINE,' said the Duck. 'Found IT,' the Mouse replied rather impatiently: 'any shrimp.",
            "tags": [4,3]
        },
        {
            "id": 12,
            "title": "The rabbit-hole went straight on like a stalk out of THIS!' (Sounds of more broken.",
            "body": "Duchess sneezed occasionally; and as he fumbled over the edge with each hand. 'And now which is which?' she said to the game. CHAPTER IX. The Mock Turtle persisted. 'How COULD he turn them out with trying, the poor little thing sat down with wonder at the sides.",
            "tags": []
        }
    ],
    "comments": [
        {
            "id": 1,
            "post_id": 6,
            "body": "Queen, tossing her head through the wood. 'If it had lost something; and she felt sure it.",
            "created_at": "2012-08-02"
        },
        {
            "id": 2,
            "post_id": 9,
            "body": "White Rabbit: it was indeed: she was out of the ground--and I should frighten them out of its right paw round, 'lives a March Hare. 'Sixteenth,'.",
            "created_at": "2012-08-08"
        },
        {
            "id": 3,
            "post_id": 3,
            "body": "I'm not Ada,' she said, 'and see whether it's marked \"poison\" or.",
            "created_at": "2012-08-02"
        },
        {
            "id": 4,
            "post_id": 6,
            "body": "Dormouse. 'Fourteenth of March, I think I can say.' This was such a noise inside, no one else seemed inclined.",
            "created_at": "2014-09-24"
        },
        {
            "id": 5,
            "post_id": 1,
            "body": "I ought to tell me your history, you know,' the Hatter and the happy summer days. THE.",
            "created_at": "2012-08-07"
        },
        {
            "id": 6,
            "post_id": 6,
            "body": "Duchess asked, with another hedgehog, which seemed to be lost: away went Alice after it, never once considering how in the other. In the very tones of.",
            "created_at": "2012-08-09"
        },
        {
            "id": 7,
            "post_id": 5,
            "body": "While the Panther were sharing a pie--' [later editions continued as follows.",
            "created_at": "2012-08-06"
        },
        {
            "id": 8,
            "post_id": 5,
            "body": "I tell you, you coward!' and at once and put it more clearly,' Alice.",
            "created_at": "2012-08-03"
        },
        {
            "id": 9,
            "post_id": 2,
            "body": "THAT. Then again--\"BEFORE SHE HAD THIS FIT--\" you never tasted an egg!' 'I HAVE tasted eggs, certainly,' said Alice, as she spoke. Alice did not like to have it.",
            "created_at": "2012-08-06"
        },
        {
            "id": 10,
            "post_id": 3,
            "body": "I'd been the whiting,' said the Hatter, it woke up again with a T!' said the Gryphon. '--you advance twice--' 'Each with a growl, And concluded the banquet--] 'What IS the fun?' said.",
            "created_at": "2012-08-07"
        },
        {
            "id": 11,
            "post_id": 1,
            "body": "I don't want to be?' it asked. 'Oh, I'm not Ada,' she said, 'and see whether it's marked \"poison\" or not'; for she had asked it aloud; and in despair she put her hand on the end of the.",
            "created_at": "2012-08-05"
        }
    ],
    "tags": [
        {
            "id": 1,
            "name": "Sport",
            "published": 1
        },
        {
            "id": 2,
            "name": "Technology",
            "published": false
        },
        {
            "id": 3,
            "name": "Code",
            "published": true
        },
        {
            "id": 4,
            "name": "Photo",
            "published": false
        },
        {
            "id": 5,
            "name": "Music",
            "published": 1
        }
    ]
};

server.listen(3000);
*/