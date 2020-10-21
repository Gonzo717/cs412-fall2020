var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//     // res.render('ps3View', { string: "Hey There!"} );
//     console.log('Got ${req.query.string} on ${req.url} ${req.method}');
// });

router.route('/')
    .get((req, res, next) => {
        console.log(`Got ${req.query.string} on ${req.url} ${req.method}`);
        res.render('ps3View', req.query );
    })
    .post((req, res, next) => {
        console.log(`Got ${req.body.word} and ${req.body.word.length} on ${req.method}`);
        res.render('ps3View', {'word': req.body.word, 'len':req.body.word.length })
    })

module.exports = router;
