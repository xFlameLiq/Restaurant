const { findByUsername } = require("../services/employee");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.login = async (request, response) => {
    const { email, password } = request.body;
    const user = await findByUsername(email);

    if(!user || !bcrypt.compareSync(password, user.password)) {
        return response.status(400).json({
            message: "Usuario o contraseña inválidos",
            messageDev: "No se encontró el usuario en la base de datos",
            code: "ERR_AUTH",
        })
    }

    const token = jwt.sign({id: user.id, name: user.name}, process.env.JWT_SECRET);
    response.status(200).json({
        code: "SUCCESS_AUTH",
        jwt: token,
    });

};