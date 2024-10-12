require('dotenv').config()
const JWT_SECRETE_admin = process.env.JWT_SECRETE_admin;
const JWT_SECRETE_user = process.env.JWT_SECRETE_user;

module.exports ={
    JWT_SECRETE_admin,
    JWT_SECRETE_user
}