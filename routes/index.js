const bodyParser = require('body-parser');
const cors = require('cors');
const gold = require('./controllers/goldController');
const verifyToken =  require("../util/verifyToken");
const customer = require('./controllers/customerController');
const shop = require('./controllers/shopController');
const admin = require('./controllers/adminController');
const money = require('./controllers/moneyController');

exports = module.exports = function (app) {
    app.use(cors());

// app.post('/api/gold', gold.app.post);
// app.delete('/api/gold/:id', gold.app.delete);
// app.get('/api/all', gold.app.get());
// app.put('/api/gold', gold.app.put);
//
// app.post('/api/customer', customer.app.post);
// app.delete('/api/customer/:id', customer.app.delete);
// app.get('/api/allCustomers', customer.app.get());
// app.put('/api/customer', customer.app.put);
//
// app.post('/api/shop', shop.app.post);
// app.delete('/api/shop/:id', shop.app.delete);
// app.get('/api/allShops', shop.app.get());
// app.put('/api/shops', shop.app.put);
//
// app.post('/api/', admin.app.post);
// app.delete('/api//:id', admin.app.delete);
// app.get('/api/', admin.app.get());
// app.put('/api/', admin.app.put);
//
// app.post('/api/', money.app.post);
// app.delete('/api//:id', money.app.delete);
// app.get('/api/', money.app.get());
// app.put('/api/', money.app.put);

    // app.post('/api/todos', gold.app.post);
    // app.delete('/api/todo/:id', gold.app.delete);
    // app.get('/api/allTodos', gold.app.get());
    // app.put('/api/todos', gold.app.put);

};