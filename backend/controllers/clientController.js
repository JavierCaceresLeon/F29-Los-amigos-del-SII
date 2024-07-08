const Client = require('../models/Client');

exports.createClient = async (req, res) => {
    const { rut, nombre, direccion, telefono, email } = req.body;
    try {
        const newClient = new Client({ rut, nombre, direccion, telefono, email });
        await newClient.save();
        res.send(`Cliente ${nombre} creado con éxito`);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.send(clients);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getClientByRut = async (req, res) => {
    const rut = req.params.rut;
    try {
        const client = await Client.findOne({ rut });
        if (client) {
            res.send(client);
        } else {
            res.status(404).send('Cliente no encontrado');
        }
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.updateClient = async (req, res) => {
    const rut_sel = req.params.rut_sel;
    const { rut, nombre, direccion, telefono, email } = req.body;
    try {
        const client = await Client.findOneAndUpdate({ rut: rut_sel }, { rut, nombre, direccion, telefono, email }, { new: true });
        if (client) {
            res.send(`Cliente ${nombre} actualizado con éxito`);
        } else {
            res.status(404).send('Cliente no encontrado');
        }
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.deleteClient = async (req, res) => {
    const rut_sel = req.params.rut_sel;
    try {
        const client = await Client.findOneAndDelete({ rut: rut_sel });
        if (client) {
            res.send(`Cliente ${rut_sel} eliminado con éxito`);
        } else {
            res.status(404).send('Cliente no encontrado');
        }
    } catch (err) {
        res.status(500).send('Server error');
    }
};
