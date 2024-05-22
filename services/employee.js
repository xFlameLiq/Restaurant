const Employee = require("../models/employee");
const { hash } = require("./security");

exports.findAll = async function () {
  return Employee.findAll({
    attributes:{
      exclude: ['password']
    }
  });
;
};
exports.findAllActives = function () {
  return Employee.findAll({
    where: {
      status: true,
    },
  });
};

exports.findById = async function (id) {
  const employee = await Employee.findByPk(id);
  if(employee)
        delete employee.dataValues.password;
  return employee;
};

exports.createEmployee = async function (data) {
  data.password = await hash(data.password);
  const employee = await Employee.create(data);
  delete employee.dataValues.password;
  return employee;
};

exports.deleteById = async function (id) {
  const employee = await Employee.findByPk(id);
  await employee.destroy();
};

exports.update = async function (id, data) {
  if(data.password)
    data.password = await hash(data.password);
  await Employee.update(data, {
    where: {
      id: id,
    },
  });
};

exports.findByUsername = function (email) {
  return Employee.findOne({
      where: {
          email
      },
  });
};
