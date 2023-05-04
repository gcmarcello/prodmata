const router = require("express").Router();

import pool from "../database/database";

router.get("/", async (req: any, res: any) => {
  const beats = await pool.query("SELECT * FROM beats");
  return res
    .status(200)
    .json({ message: "Beats encontrados com sucesso.", data: beats.rows });
});

router.post("/", async (req: any, res: any) => {
  const { beatName, beatVideo, beatImage, beatPrice } = req.body;
  console.log(beatName, beatVideo, beatImage, beatPrice);
  const newBeat = await pool.query(
    "INSERT INTO beats (beat_name, beat_video_url, beat_img, beat_price) VALUES ($1,$2,$3,$4) RETURNING *",
    [beatName, beatVideo, beatImage, beatPrice]
  );

  return res
    .status(200)
    .json({ message: "Beat inserido com sucesso.", data: newBeat.rows[0] });
});

router.delete("/:id", async (req: any, res: any) => {
  const beatId = req.params.id;
  const deletedBeat = await pool.query("DELETE FROM beats WHERE beat_id = $1", [
    beatId,
  ]);

  if (deletedBeat.rowCount === 0) {
    return res.status(404).json({ message: "Beat não encontrado." });
  }

  return res.status(200).json({ message: "Beat deletado com sucesso." });
});

module.exports = router;
