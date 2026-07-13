import { Router } from 'express';
import {
    register,
    login,
    getUser,
    deleteUser,
    updateUser,
    addRole,
    deleteRole,
    changePassword
} from '../controllers/accounting.controller.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);

router.get('/user/:login', getUser);
router.delete('/user/:login', deleteUser);
router.patch('/user/:login', updateUser);

router.patch('/user/:login/role/:role', addRole);
router.delete('/user/:login/role/:role', deleteRole);

router.patch('/password', changePassword);

export default router;