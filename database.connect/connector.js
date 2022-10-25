const mysql = require('mysql');

//เชื่อมดาต้าเบส
const connect = mysql.createConnection({
    host: 'localhost',
    database: 'cpudb',
    port: 3306,
    user: 'root',
    password: 'ppgdmild',
});

connect.connect;
module.exports = connect;
