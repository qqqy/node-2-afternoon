module.exports = {
  create_product: (req,res) => {
    // console.log('CP: hit')
    const db = req.app.get('db')
    // console.log('CP: body='+req.body.name)
    db.create_product(req.body).then((whatIGetBack) => res.status(200).send(whatIGetBack)).catch(err => res.sendStatus(400))
  } ,

  update_product: function(req,res){
    console.log(`UP: hit, operating on ${req.params.id} with new_text: "${req.params.new_text}"`)
    const db = req.app.get('db')
    const { id , new_text } = req.params
    db.update_product({product_id: id , description: new_text}).then((whatIGetBack) => res.status(200).send(whatIGetBack)).catch(err => res.status(400).send(err.message))
  } ,

  delete_product: function(req, res){
    console.log(`DP: Operating on ${req.params.id}`)
    db = req.app.get('db')
    db.delete_product({product_id: req.params.id}).then((whatIGetBack) => res.status(200).send(whatIGetBack)).catch(err => res.status(400).send(err.message))
  }
}