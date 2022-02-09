import express from 'express';
var router = express.Router();

import * as controller from '../controller/usuario.js';

router.get('/',  controller.getAll)
router.get('/:id', controller.getById)
router.post('/register', controller.register)
router.post('/login', controller.login)
router.delete('/:id', controller.remove)
router.put('/:id', controller.update)

router.get('/:id/puntuacion', controller.getPuntuacionesUsuario)
router.post('/:id/puntuacion', controller.insertPuntuacion)

export { router };