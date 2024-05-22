const express = require('express');
const router = express.Router();
const {
    getAdmin,
    getAdminById,
    insertAdmin,
    updateAdmin,
    deleteAdmin,
} = require('../controllers/admin');
const AdminSchema = require('../validations/admin');
const validator = require('../middlewares/validator');
const jwtValidator = require('../middlewares/jwt');

router.get('/admins',jwtValidator, getAdmin);
router.get('/admins/:id',jwtValidator ,validator.params(AdminSchema.paramsSchema) , getAdminById);
router.post('/admins', validator.body(AdminSchema.createAdminSchema), insertAdmin);
router.put('/admins/:id',jwtValidator ,validator.params(AdminSchema.paramsSchema), validator.body(AdminSchema.updateAdminSchema), updateAdmin);
router.delete('/admins/:id', jwtValidator,validator.params(AdminSchema.paramsSchema), deleteAdmin);
    
module.exports = router;
