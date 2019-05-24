var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET products listing */
router.get('/api/items', async function (req, res, next) {
    var query = req.query.query;
    var url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + query;

    axios.get(url)
        .then(response => {
            res
                .status(response.status)
                .json(response.data.results);
        })
        .catch(error => {
            res.status(error.code)
        });
});

module.exports = router;
