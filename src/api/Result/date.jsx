import mysql from 'mysql';
const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'maketree0615',
  database: 'PUPPYTI',
});

export const sqlTest = async () => {
  await connection.connect();

  let sql = 'SELECT * FROM TBL_RST';
  let result;

  connection.query(sql, (error, data, field) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      console.log(field);

      result = data;
    }
  });

  connection.end();

  return result;
};
