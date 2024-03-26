import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const pool = mysql
   .createPool({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
   })
   .promise();

//select
export async function getIdNotes(id) {
   const result = await pool.query(`SELECT * FROM notes where id= ?`, [id]);
   const row = result[0];
   return row[0];
}

//Insert
export async function createNotes(title, contents) {
   const [results] = await pool.query(
      `Insert into notes (title, contents) values (?,?)`,
      [title, contents]
   );
   const ids = results.insertId;
   return getIdNotes(ids);
}

//Delete
export function deleteAllNotes() {
   pool.query(`DELETE FROM notes;`);
}

// this is for saving new data whenever there is something that was saved to the document.
// const results = await createNotes("Lorem ipsum", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ratione quidem quo reprehenderit vel repellat adipisci doloribus voluptates, quos dolore tempora non eaque at, dolores ab possimus minima perspiciatis necessitatibus");
// console.log(results);
