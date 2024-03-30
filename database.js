// const mysql = require("mysql2");
// const dotenv = require("dotenv");
// dotenv.config();

 



// const conn = mysql.createConnection({
//       host: process.env.DATABASE_HOST,
//       user: process.env.DATABASE_USER,
//       password: process.env.DATABASE_PASSWORD,
//       database: process.env.DATABASE,
//    })

   
//    conn.connect();
//    async function checkConnection() {
//       conn.query(`SELECT * FROM notes;`);
//    }
   
//    connection.query('SELECT * from users', function(err, rows, fields) {
//       if(err) console.log(err);
//       console.log('The solution is: ', rows);
//       connection.end();
//   });
 
// //Delete - This can now be called through notes/delete
// async function deleteAllNotes() {
//    conn.query(`DELETE FROM notes;`);
// }

// //select
// async function getIdNotes(id) {
//    const result = await conn.query(`SELECT * FROM notes where id= ?`, [id]);
//    const row = result[0];
//    return row[0];
// }

// //Insert
// async function createNotes(title, contents) {
//    const [results] = await conn.query(
//       `Insert into notes (title, contents) values (?,?)`,
//       [title, contents]
//    );
//    const ids = results.insertId;
//    return getIdNotes(ids);
// } 

// // // this is for saving new data whenever there is something that was saved to the document.
// // const results =  createNotes("Lorem ipsum", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ratione quidem quo reprehenderit vel repellat adipisci doloribus voluptates, quos dolore tempora non eaque at, dolores ab possimus minima perspiciatis necessitatibus");
// // console.log(results);

// module.exports = { deleteAllNotes, getIdNotes, createNotes, checkConnection };
