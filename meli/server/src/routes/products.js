const axios = require('axios');
const server = require("express").Router();

const PATH_BASE = 'https://api.mercadolibre.com/';

server.get('/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.sendStatus(500);
    } else {
        axios.get(PATH_BASE + '/items/' + id + '/description').then(resDescription => {
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
                        picture: response.data.secure_thumbnail,
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
})

module.exports = server;