const Category = require("../models/Category")

const category = new Category();

class categoryController {
    async create(req, res) {
        var name = req.body;
        var result = await category.create(name);
        if(result) {
            res.status(result.status);
            res.send(result)
        } else {
            res.status(500);
            return {msg: "erro"}
        }
    }

    async getAll(req, res) {
        var result = await category.getAll();
        if(result) {
            res.status(result.status);
            res.send(result);
        } else {
            res.status(500);
            return {msg: "erro"}
        }
    }

    async getById(req, res) {
        const id = Number(req.params.id);
        var result = await category.getById(id);
        if(result) {
            res.status(result.status);
            res.send(result)
        } else {
            res.status(500);
            return {msg: "erro"}
        }
    }

    async update(req, res) {
        const id = Number(req.params);
        const name = req.body;
        var result = await category.update(id, name);
        if(result) {
            res.status(result.status);
            res.send(result)
        } else {
            res.status(500);
            return {msg: "erro"}
        }
    }

    async delete(req, res) {
        const id = Number(req.params);
        var result = await category.delete(id);
        if(result) {
            res.status(result.status);
            res.send(result)
        } else {
            res.status(500);
            return {msg: "erro"}
        }
    }
}

module.exports = categoryController;
