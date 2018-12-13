module.exports = {
  read_products: function(req,res){
    const db = req.app.get('db')
    if(req.query.item){
      db.read_product({item: req.query.item}).then((results) => res.status(200).send(results)).catch(err => res.status(404).send(err.message))
    } else {
      db.read_products().then((cata) => res.status(200).send(cata)).catch(err => res.status(404).send(err.message))
    }
  }
}