import { Router } from "express";
import instance, { contract, abi } from "../ethers.js";
const router = Router();

router.post("/issue", async function (req, res) {
  let body = req.body;
  console.log(body);

  try {
    const trx = await instance.issue(
      body.id,
      body.name,
      body.course,
      body.grade,
      body.date,
    );
    res.status(201).json(trx);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.get("/fetch", async function (req, res) {
  let query = req.query;
  console.log(query);

  try {
    const result = await instance.Certificates(query.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.get("/abi", async function (req, res) {
  try {
    res.status(200).json({ contract, abi });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

export default router;
