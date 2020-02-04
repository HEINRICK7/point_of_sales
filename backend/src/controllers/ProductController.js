const Product = require('../models/Product');

  exports.store= async(req, res)=> {
  const { product_id, name, price, quantity, due_date } = req.body;

  await Product.create({
    product_id,
    name,
    price,
    quantity,
    due_date
  })
    .then(data =>{
      res.status(200).send({message: 'Produto salvo com sucesso'}).json(data)})
    .catch(() =>{
      res.status(500).send({message:'Falha ao Criar Produto'})
    })
    
  };
exports.index = async(req, res)=>{
    await Product.find(req.body)
      .then(data =>{
        res.status(200).json(data)})
      .catch(e =>{
        res.status(400).send(e)
    })
  };
exports.show = async(req, res)=>{
    await Product.findById(req.params.id)
      .then(data =>{
        res.status(200).json(data)})
      .catch(() =>{
        res.status(400).send({message:'Produto não Cadastrado ou ID Incorreto'})
      })
};
exports.update = async(req, res)=>{
    await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(() =>{
      res.status(200).json({message:'Produto Atualizado com Sucesso'})})
    .catch(() =>{
      res.status(400).send({message:'Falha ao Atualizar o Produto'})
    })
};
exports.destroy = async(req, res)=>{
    await Product.findByIdAndRemove(req.params.id)
    .then(() =>{
      res.status(200).json({message:'Produto Deletado com Sucesso'})
    }).catch(e =>{
      res.status(400).send(e)
    })
};

