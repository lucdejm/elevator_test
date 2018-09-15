var express = require('express');
var router = express();


router.listen(5000, function () {
    console.log("Server is running on port 5000")
});
  
router.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET floor */
router.get('/floor', function(req, res) {
    const data = require("./data/data.json");
    res.status(500).json(data);
});


module.exports = router;
