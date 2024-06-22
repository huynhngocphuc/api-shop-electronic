const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(config.development);

const User =  require('./user')(sequelize);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    // Đồng bộ hóa mô hình với cơ sở dữ liệu
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((error) => {
    console.error('Unable to sync database:', error);
  });

module.exports = {
  sequelize,
  User,
};