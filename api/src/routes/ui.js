import { Router } from "express";
import instance from "../ethers.js";
const router = Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Certificate DApp" });
});

router.get("/issue", function (req, res) {
  res.render("issue", { title: "Certificate DApp" });
});

router.get("/fetch", async function (req, res) {
  let query = req.query;
  console.log(query);

  try {
    const result = await instance.Certificates(query.certificateID);
    console.log(result);
    res.render("view", {
      title: "Certificate DApp",
      id: query.certificateID,
      name: result[0],
      course: result[1],
      grade: result[2],
      date: result[3],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
