const dbs = require('../database/dbs');

class Category {

    async create(name) {
        try {
            var category = await dbs.insert({name: name});

            if(category.length > 0) {
                return {data: category[0], msg: "Categoria criada", status: 200}
            }

            return { msg: "Falha ao criar categoria.", status: 500 };
        } catch (err) {
            console.log(err);
            return {msg: "Erro", status: 500};
        }
    }

    async getAll() {
        console.log("Executando getAll...");
        try {
            var categories = await dbs.select().table('Categories');
            if (categories.length > 0) {
                return {data: categories, msg: "Lista de categorias", status: 200};
            }
            return {msg: "Nenhuma categoria encontrada", status: 200};
        } catch (err) {
            console.log(err);
            return {msg: "Erro", status: 500};
        }
    }

    async getById(id) {
        try {
            var category = await dbs.where({id: id}).first().table("Categories");
            if(category.length > 0) {
                return {data: category[0], msg: "Categoria encontrada", status: 200}
            }

            return {msg: "Nenhuma categoria encontrada", status: 400}
        } catch (err) {
            console.log(err);
            return {msg: "Erro", status: 500};
        }
    }

    async update(id, name) {
        try {
            var result = await dbs.where({id: id}).update(name).table('Category');
            if(result > 0 ) {
                const categoryUpdated = await dbs.where({id: id}).first().table('Category');
                return {data: categoryUpdated, msg: "Categoria editada", status: 200}
            }

            return {msg: "Categoria não encontrada", status: 400}
        } catch (err) {
            console.log(err);
            return {msg: "Erro", status: 500};
        }
    }

    async delete(id) {
        try {
            var categoryDeleted = await dbs.where({id: id}).delete().table('Category');
            if(categoryDeleted.length) {
                return {msg: "Categoria deletada", status: 200}
            }

            return {msg: "Categoria não encontrada", status: 400}
        } catch (err) {
            console.log(err);
            return {msg: "Erro", status: 500};
        }
    }
}

module.exports = Category;