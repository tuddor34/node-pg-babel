import {Sequelize, DataTypes} from 'sequelize';
import user from "./user";
import message from "./message";

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        port: 5435
    }
);


const models = {
    User: user(sequelize, DataTypes),
    Message: message(sequelize, DataTypes)
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models)
    }
});

export {sequelize}

export default models;