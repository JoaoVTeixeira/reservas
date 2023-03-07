var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/funcionarios', async function(req, res, next) {

    const funcionarios = await db.findAll("funcionarios");
    
    res.send(funcionarios)
  
  
  });
  
  router.get('/funcionarios/:id', async function(req, res, next) {
  
    const id = req.params.id;
    const db = require('../db');
    const funcionarios = await db.findOne("funcionarios", id);
    
    res.send(funcionarios)
  
  
  });
  
  router.post('/funcionarios', async function(req,res,next) {
  
    const funcionario = req.body;
  
    console.log(funcionario);
  
    db.insert("funcionarios",funcionario);
  
    res.send(funcionario);
  
  })
  
  router.put('/funcionarios/:id', async (req,res,next)=>{

    const id = req.params.id;
    const funcionario = req.body;
    
    db.updateOne('funcionarios', id, funcionario);
  
    res.send(funcionario);
  
  })
  
  router.delete('/funcionario/apagar/:id', async function(req,res,next) {
  
    const funcionario = req.params.id;
  
    console.log(funcionario);
  
    db.deleteDb("funcionarios",funcionario);
  
    res.send("Deletado com sucesso");
  
  })
  
  
  router.get('/clientes', async function(req, res, next) {
  
    const clientes = await db.findAll("clientes");
    
    res.send(clientes)
  
  
  });
  
  router.get('/clientes/:id', async function(req, res, next) {
  
    const id = req.params.id;
    const clientes = await db.findOne("clientes", id);
    
    res.send(clientes)
  
  
  });
  
  router.post('/clientes', async function(req,res,next) {
    
    const cliente = req.body;
  
    //console.log(cliente);
  
    db.insert("clientes", cliente);
    
    res.send(cliente)
  
  })
  
  router.put('/clientes/:id', async (req,res,next)=>{

    const id = req.params.id;
    const cliente = req.body;
    
    db.updateOne('clientes', id, cliente);
  
    res.send(cliente);
  
  })
  
  router.delete('/clientes/apagar/:id', async function(req,res,next) {
  
    const cliente = req.params.id;
  
    db.deleteDb("clientes",cliente)
  
  
    res.send("deletado com sucesso!")
  
  })



  
module.exports = router;
