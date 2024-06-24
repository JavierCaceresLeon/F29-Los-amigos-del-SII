const request = require('supertest');
const app = require('../index');

describe('API Endpoints', () => {
    describe('GET /', () => {
        it('should return Hello World', async () => {
            const res = await request(app).get('/');
            expect(res.statusCode).toBe(200);
            expect(res.text).toBe('Hello World!');
        });
    });

    describe('POST /login', () => {
        it('should authenticate user with correct credentials', async () => {
            const res = await request(app)
                .post('/login')
                .send({ username: 'user00', password: 'password' });
            expect(res.statusCode).toBe(200);
            expect(res.text).toBe('Username: user00 logged in successfully');
        });

        it('should fail to authenticate user with incorrect credentials', async () => {
            const res = await request(app)
                .post('/login')
                .send({ username: 'user00', password: 'wrongpassword' });
            expect(res.statusCode).toBe(401);
            expect(res.text).toBe('Authentication failed');
        });
    });

    describe('POST /api/cliente', () => {
        it('should create a new client', async () => {
            const newClient = { rut: '98765432-1', nombre: 'Maria Lopez', direccion: 'Calle 456', telefono: '87654321', email: 'maria@example.com' };
            const res = await request(app)
                .post('/api/cliente')
                .send(newClient);
            expect(res.statusCode).toBe(200);
            expect(res.text).toBe(`Cliente ${newClient.nombre} creado con exito`);
        });
    });

    describe('GET /api/cliente', () => {
        it('should get all clients', async () => {
            const res = await request(app).get('/api/cliente');
            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual(expect.any(Array));
        });
    });

    describe('GET /api/cliente/:rut', () => {
        it('should get a client by RUT', async () => {
            const res = await request(app).get('/api/cliente/12345678-9');
            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('rut', '12345678-9');
        });

        it('should return 404 for a non-existent client', async () => {
            const res = await request(app).get('/api/cliente/nonexistent-rut');
            expect(res.statusCode).toBe(404);
            expect(res.text).toBe('Cliente no encontrado');
        });
    });

    describe('PUT /api/cliente/:rut_sel', () => {
        it('should update an existing client', async () => {
            const updatedClient = { rut: '12345678-9', nombre: 'Juan Perez Updated', direccion: 'Calle 789', telefono: '12345678', email: 'updated@example.com' };
            const res = await request(app)
                .put('/api/cliente/12345678-9')
                .send(updatedClient);
            expect(res.statusCode).toBe(200);
            expect(res.text).toBe(`Cliente ${updatedClient.nombre} actualizado con exito`);
        });

        it('should return 404 for a non-existent client', async () => {
            const updatedClient = { rut: 'nonexistent-rut', nombre: 'No Name', direccion: 'No Address', telefono: 'No Phone', email: 'no@example.com' };
            const res = await request(app)
                .put('/api/cliente/nonexistent-rut')
                .send(updatedClient);
            expect(res.statusCode).toBe(404);
            expect(res.text).toBe('Cliente no encontrado');
        });
    });

    describe('DELETE /api/cliente/:rut_sel', () => {
        it('should delete an existing client', async () => {
            const res = await request(app).delete('/api/cliente/12345678-9');
            expect(res.statusCode).toBe(200);
            expect(res.text).toBe('Cliente 12345678-9 eliminado con exito');
        });

        it('should return 404 for a non-existent client', async () => {
            const res = await request(app).delete('/api/cliente/nonexistent-rut');
            expect(res.statusCode).toBe(404);
            expect(res.text).toBe('Cliente no encontrado');
        });
    });
});
