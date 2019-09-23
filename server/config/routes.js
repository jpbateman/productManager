const productsController = require('../controllers/products');
module.exports = function(app){
    app.get('/api/products/:id', productsController.getProduct);
    app.put('/api/products/:id', productsController.update);
    app.delete('/api/products/:id', productsController.delete);
    app.post('/api/products', productsController.create);
    app.get('/api/products', productsController.index);
}