const cors = require('cors');
const bodyParser = require('body-parser');

const verifyToken =  require("../util/verifyToken");

// Import Route Controllers
const gold = require('./controllers/Gold/goldController');
const customer = require('./controllers/Customer/customerController');
const shop = require('./controllers/Shop/shopController');
const admin = require('./controllers/Admin/adminController');
const money = require('./controllers/Money/moneyController');

// Setup Route Bindings
exports = module.exports = function (app) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());

    app.post('/api/admin', admin.post);
    app.delete('/api/admin/:id', admin.delete);
    app.get('/api/admin', admin.get);
    app.put('/api/admin/:id', admin.put);
    app.get('/api/admin/:id', admin.single);

    app.post('/api/customer', customer.post);
    app.delete('/api/customer/:id', customer.delete);
    app.get('/api/customer', customer.get);
    app.put('/api/customer/:id', customer.put);
    app.get('/api/customer/:id', customer.single);

    app.post('/api/gold', gold.post);
    app.delete('/api/gold/:id', gold.delete);
    app.get('/api/all', gold.get);
    app.put('/api/gold/:id', gold.put);
    app.get('/api/gold/:id', gold.single);

    app.post('/api/money', money.post);
    app.delete('/api/money/:id', money.delete);
    app.get('/api/money', money.get);
    app.put('/api/money/:id', money.put);
    app.get('/api/money/:id', money.single);

    app.post('/api/shop', shop.post);
    app.delete('/api/shop/:id', shop.delete);
    app.get('/api/Shop', shop.get);
    app.put('/api/shop', shop.put);
    app.get('/api/shop/:id', shop.single);

};