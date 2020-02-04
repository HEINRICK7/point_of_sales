const User = require('../models/User')
exports.store = async(req, res)=>{

    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
        if(!user){
            user = await User.create({ name, email, password })
             .then(data =>{
                res.status(200).json(data)})
              .catch(e =>{
                res.status(500).send({message:'Falha ao Criar Usuário'})
                })
         }       
};
exports.index = async(req, res)=>{
    await User.find(req.body)
      .then(data =>{
        res.status(200).json(data)})
      .catch(e =>{
        res.status(400).send(e)
    })
  };
  exports.show = async(req, res)=>{
    await User.findById(req.params.id)
      .then(data =>{
        res.status(200).json(data)})
      .catch(e =>{
        res.status(400).send({message:'Usuário não Cadastrado ou ID Incorreto'})
      })
};
exports.update = async(req, res)=>{
    await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(data =>{
      res.status(200).json({message:'Usuário Atualizado com Sucesso'})})
    .catch(e =>{
      res.status(400).send({message:'Falha ao Atualizar o Usuário'})
    })
};
exports.destroy = async(req, res)=>{
    await User.findByIdAndRemove(req.params.id)
    .then(data =>{
      res.status(200).json({message:'Usuário Deletado com Sucesso'})
    }).catch(e =>{
      res.status(400).send(e)
    })
};
