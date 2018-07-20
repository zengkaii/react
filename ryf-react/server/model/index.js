const Sequelize = require('sequelize');
// 数据库 sql
// koa 数据json obj
const sequelize = new Sequelize('antd', 'root', '19970402', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: true,
    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    define: {
        timestamps: false
    }
});
sequelize
    .authenticate()
    .then( () => {
        console.log('连接成功');
    }).catch(err => {
        console.error('连接不成功',err);
    })
module.exports = sequelize