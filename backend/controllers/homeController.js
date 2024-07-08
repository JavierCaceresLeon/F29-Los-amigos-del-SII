
exports.show = async (req, res) => {
    try {
        res.send('Backend on fire!');
    } catch (err) {
        res.status(500).send('Server error');
    }
}