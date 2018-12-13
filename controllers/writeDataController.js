module.exports = {
  create_product: (req,res) => {
    // console.log('CP: hit')
    const db = req.app.get('db')
    // console.log('CP: body='+req.body.name)
    db.create_product(req.body).then((whatIGetBack) => res.status(200).send(whatIGetBack)).catch(err => res.sendStatus(400))
  }
}