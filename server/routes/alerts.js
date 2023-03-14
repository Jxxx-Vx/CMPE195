import express from "express";

const router = express.Router();

// controllers
import { usgs, nws} from "../controllers/alerts";

router.post("/usgs", usgs);
router.post("/nws", nws);

module.exports = router;
