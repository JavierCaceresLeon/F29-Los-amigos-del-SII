const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.post('/api/cliente', clientController.createClient);
router.get('/api/cliente', clientController.getClients);
router.get('/api/cliente/:rut', clientController.getClientByRut);
router.put('/api/cliente/:rut_sel', clientController.updateClient);
router.delete('/api/cliente/:rut_sel', clientController.deleteClient);

module.exports = router;
