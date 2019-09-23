const mongoose = require('mongoose');
const Product = mongoose.model('Product');
module.exports = {
    index(req, res){
        Product.find()
            .then(products => {
                console.log('index method in controller...');
                res.json({products})
            })
            .catch(console.log); 
    },
    create(req, res){
        Product.create(req.body)
            .then(product => res.json({product}))
            .catch(e => {
                const errors = [];
                for(key in e.errors){
                    errors.push(e.errors[key].message);
                }
                res.json({errors })
            });  
    },
    delete(req, res){
        Product.findByIdAndDelete(req.params.id)
            .then(() => res.json({status: 'success'}))
            .catch(e => res.json({ errors: e}))
    },
    update(req, res){
        Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
            .then(product => res.json({product}))
            .catch(e => {
                const errors = [];
                for(key in e.errors){
                    errors.push(e.errors[key].message);
                }
                res.json({errors })
            }); 
    },
    getProduct(req, res){
        Product.findById(req.params.id)
            .then(product => {
                console.log(product);
                res.json({product})
            })
            .catch(e => res.json({errors: e}))
    }

}