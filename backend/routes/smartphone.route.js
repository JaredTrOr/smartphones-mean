const router = require('express').Router();
const Smartphone = require('../models/Smartphone')

router.get('/get-smartphones', async (req,res) => {
    try {
        const smartphones = await Smartphone.find()
        res.json({success: true, message: 'Se han obtenido los smartphones con éxito' ,data: smartphones})
    } catch(err) {
        res.json({success: false, message: err})
    }
})

router.get('/get-smartphone-id/:id', async (req,res) => {
    try {
        const smartphone = await Smartphone.findById(req.params.id);
        res.json({success: true, message: 'Se hab obtenido el smartphone con éxito',data: smartphone})
    } catch(err) {
        res.json({success: false, message: err})
    }
})

router.post('/create-smartphone', async (req,res) => {
    try {
        await Smartphone.create(req.body);
        res.json({success: true, message: 'El registro del smartphone se ha realizado con éxito'})
    } catch(err) {
        res.json({success: false, message: err})
    }
})

router.put('/update-smartphone/:id', async (req,res) => {
    try {
        const smartphoneActualizado = await Smartphone.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.json({success: true, message: 'La actualización del smartphone se ha realizado con éxito', smartphoneActualizado})
    } catch(err) {
        res.json({success: false, message: err})
    }
})

router.delete('/delete-smartphone/:id', async (req,res) => {
    try {
        await Smartphone.findByIdAndDelete(req.params.id)
        res.json({success: true, message: 'La eliminación del smartphone se ha realizado con éxito'})
    } catch(err) {

    }
})

module.exports = router;