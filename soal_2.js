const express = require("express");
const router = express.Router();
const pool = require("./queries.js"); // Mengimpor pool dari queries.js

router.get("/:name/:namaId?", (request, response) => {
  const tableName = request.params.name;
  const namaId = request.params.namaId;

  // Inisialisasi klausa WHERE sebagai string kosong
  let whereClause = '';

  // Membentuk klausa WHERE berdasarkan namaId jika namaId tersedia
  if (tableName === "film_list" && namaId) {
    // Periksa apakah namaId berupa angka atau string
    if (!isNaN(namaId)) {
      whereClause = `WHERE fid=${namaId}`;
    } else {
      whereClause = `WHERE category='${namaId}'`;
    }
  }

  // Menjalankan kueri SQL ke database
  const query = `SELECT * FROM ${tableName} ${whereClause}`;
  pool.query(query, (error, result) => {
    if (error) {
      console.error(error);
      response.status(500).send("Terjadi kesalahan dalam permintaan.");
    } else {
      response.send(result.rows);
    }
  });
});

module.exports = router;

