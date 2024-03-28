const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql
   .createPool({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
   })
   .promise();
   
//Delete - This can now be called through notes/delete
async function deleteAllNotes() {
   pool.query(`DELETE FROM notes;`);
}

//select
async function getIdNotes(id) {
   const result = await pool.query(`SELECT * FROM notes where id= ?`, [id]);
   const row = result[0];
   return row[0];
}

//Insert
async function createNotes(title, contents) {
   const [results] = await pool.query(
      `Insert into notes (title, contents) values (?,?)`,
      [title, contents]
   );
   const ids = results.insertId;
   return getIdNotes(ids);
}

// this is for saving new data whenever there is something that was saved to the document.
// const results = await createNotes("Lorem ipsum", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ratione quidem quo reprehenderit vel repellat adipisci doloribus voluptates, quos dolore tempora non eaque at, dolores ab possimus minima perspiciatis necessitatibus");
// console.log(results);

module.exports = { deleteAllNotes, getIdNotes, createNotes };
