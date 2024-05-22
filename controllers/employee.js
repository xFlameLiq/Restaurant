const { update, deleteById, findById, findAll, createEmployee } = require('../services/employee');

exports.getEmployees = async function(request, response){
    try {
        const employee = await findAll();
        response.status(200).json(employee);
    } catch(e) {
        response.status(500).json({
            message: e.message,
            messageDev: "No se han podido leer los usuarios",
            code: "500",
            error: "ERR_READ_USER"
        })
        console.error(">>> OH, error");
        console.error(e);
    }
}


exports.getEmployeeById = async function(request, response){
    try {
        const id = request.params.id;
        const employee = await findById(id);
        response.status(200).json(employee);
    } catch(e) {
        response.status(500).json({
            message: e.message,
            messageDev: "No se ha podido leer el usuario",
            code: "500",
            error: "ERR_READ_USER"
        })
        console.error(">>> OH, error");
        console.error(e);
    }
}

exports.insertEmployee = async function(request, response) {
    const {name, email, password} = request.body;
    try {
        const employee = await createEmployee({name, email, password});
        response.status(201).json(employee);
    } catch(e) {
        response.status(500).json({
            message: e.message,
            messageDev: "No se ha podido crear el usuario",
            code: "500",
            error: "ERR_CREATE_USER"
        })
        console.error(">>> OH, error");
        console.error(e);
    }
}

exports.updateEmployee = async function(request, response){
    try {
        const id = request.params.id;
        const content = request.body;
        const employee = await update(id, content);
        response.status(204).json(employee);
    } catch(e) {
        response.status(500).json({
            message: e.message,
            messageDev: "No se ha podido actualizar el usuario",
            code: "500",
            error: "ERR_UPDATE_USER"
        })
        console.error(">>> OH, error");
        console.error(e);
    }
}

exports.deleteEmployee = async function(request, response){
    try {
        const id = request.params.id;
        await deleteById(id);
        response.status(204).end();
    } catch(e) {
        response.status(500).json({
            message: e.message,
            messageDev: "No se ha podido eliminar el usuario",
            code: "500",
            error: "ERR_DELETE_USER"
        })
        console.error(">>> OH, error");
        console.error(e);
    }
}