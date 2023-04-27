const router = require("express").Router();

import pool from "../database/database";

router.get("/", async (req: any, res: any) => {
  const beats = await pool.query("SELECT * FROM beats");
  console.log(beats.rows);
  return res
    .status(200)
    .json({ message: "Beats encontrados com sucesso.", data: beats.rows });
});

module.exports = router;
