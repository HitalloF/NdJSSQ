const express= require('express')
const router = express.Router();
const Cliente = require('../models/ClienteModel')


router.post('/', async (req,res)=>{
    const {name,numero} = req.body

    const cliente = await Cliente.create({name,numero})

    res.json({cliente})
})

router.get('/',  (req,res)=>{
    const cliente =  Cliente.findAll()

    res.json({cliente})
})


module.exports = router;
