const axios = require('axios');
const server = require("express").Router();

const PATH_BASE = 'https://api.mercadolibre.com';

server.get('/', (req, res) => {
    const searchTerm = req.query.q;
    const limit = 4;

    const request = `${PATH_BASE}/sites/MLA/search?q=${searchTerm}&limit=${limit}`;

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
                    free_shipping: result.shipping.free_shipping,
                    address: {
                        city_name: result.address.city_name,
                        state_name: result.address.state_name
                    }
                }
            )
        });
        res.status(200).json({ status: 'OK', results: objResponse });
    }).catch(err => res.status(500).json({
        message: 'unknown error', error: err
    }));
});

server.get('/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.sendStatus(500);
    } else {
        axios.get(`${PATH_BASE}/items/${id}/description`).then(resDescription => {
            axios.get(PATH_BASE + '/items/' + id).then(response => {
                const objResponse = {
                    author: {
                        name: '',
                        lastname: ''
                    },
                    item: {
                        id: response.data.id,
                        title: response.data.title,
                        price: {
                            currency: response.data.currency_id,
                            amount: response.data.price,
                            decimals: ''
                        },
                        picture: response.data.pictures[0].secure_url,
                        condition: response.data.condition,
                        free_shipping: response.data.shipping.free_shipping,
                        sold_quantity: response.data.sold_quantity,
                        description: resDescription.data.plain_text
                    }
                }
                res.status(200).json({ results: objResponse });
            }).catch(err => res.status(404));
        }).catch(err => res.status(404));
    }
});

module.exports = server;