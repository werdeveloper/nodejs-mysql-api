const mysql = require('mysql');
const config = require('config');
const mysqlDbConfig = config.get('mysql');

    pool = mysql.createPool(
        {
            connectionLimit: mysqlDbConfig.connectionLimit,
            host: mysqlDbConfig.host,
            user: mysqlDbConfig.user,
            password: mysqlDbConfig.password,
            database: mysqlDbConfig.database
        }
    ); 

exports.executeQuery = (q, params, cb) => { //cb is callback function
    pool.getConnection((err, conn) => {
        if (!!err) {
            console.log(`Error: ${err.message} ${err.stack}`);
            return;
        }

        conn.query(q, params, (e, rows, fields) => {
            conn.release();
            if (typeof cb === 'function')
                cb(e, rows);
        });
    });
};