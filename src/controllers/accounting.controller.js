import * as accountingService from '../services/accounting.service.js';

export const register = async (req, res) => {
    const user = await accountingService.register(req.body);
    return res.status(201).json(user);
}

export const login = async (req, res) => {
    const user = await accountingService.login(req.headers.authorization);
    return res.json(user);
}

export const getUser = async (req, res) => {
    const user = await accountingService.getUser(req.params.login);
    return res.json(user);
}

export const deleteUser = async (req, res) => {
    const user = await accountingService.deleteUser(req.params.login);
    return res.json(user);
}

export const updateUser = async (req, res) => {
    const user = await accountingService.updateUser(req.params.login, req.body);
    return res.json(user);
}

export const addRole = async (req, res) => {
    const user = await accountingService.addRole(
        req.params.login,
        req.params.role
    );
    return res.json(user);
}

export const deleteRole = async (req, res) => {
    const user = await accountingService.deleteRole(
        req.params.login,
        req.params.role
    );
    return res.json(user);
}

export const changePassword = async (req, res) => {
    const user = await accountingService.changePassword(req.body);
    return res.json(user);
}