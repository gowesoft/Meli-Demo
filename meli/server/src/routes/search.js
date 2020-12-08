const axios = require('axios');
const server = require("express").Router();

const PATH_BASE = 'https://api.mercadolibre.com/';

server.get('/:searchTerm', (req, res) => {
    const { searchTerm } = req.params;

    const request = PATH_BASE + 'sites/MLA/search?q=' + searchTerm + '&limit=4';

    axios.get(request).then(response => {
        const data = response.data.results;
        const objResponse = {
            author: {
                name: '',
                lasname: ''
            },
            categories: [],
            items: []
        };
        data.map(result => {
            objResponse.items.push(
                {   
                    id: result.id,
                    title: result.title,
                    price: {
                        currency: result.currency_id,
                        amount: result.price,
                        decimals: ''
                    },
                    picture: result.thumbnail.replace('http', 'https').replace("-I", "-O"),
                    condition: result.condition,
                    free_shipping: result.shipping.free_shipping
                }
            )
        });
        res.status(200).json({ status: 'OK', results: objResponse });
    }).catch(err => res.status(500).json({
        message: 'unknown error', error: err
    }));
});

module.exports = server;