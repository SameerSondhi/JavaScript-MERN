const Product = require("../models/product.model")

module.exports.testApi = (req, res) => {
    res.json({Status: 'I made it capt.'})
}

//Create
module.exports.createProduct = (req, res) => {
    const newProduct = req.body
    
    Product.create(newProduct)
    .then(superProduct => res.json(superProduct))
    .catch(err => res.json(err))
}

//Read all
module.exports.getAllProducts = (req, res) => {
   Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.json(err))
};

//Read One
module.exports.oneProduct = (req, res) => {
    const idFromParams = req.params.id
    Product.findOne({_id: idFromParams})
    .then((one) => res.json(one))
    .catch(err => res.json(err))
}

//Update
module.exports.updateProduct = (req,res) => {
    const idFromParams = req.params.id
    const updateValue = req.body
    Product.findOneAndUpdate({_id: idFromParams}, updateValue, {new: true})
    .then(updatedProduct =>  res.json(updatedProduct))
    .catch(err => res.json(err))
}
//Delete
module.exports.deleteProduct = (req, res) => {
    // const idFromParams = req.params.id;
    Product.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}


