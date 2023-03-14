import express from "express";

const router = express.Router();

// controllers
import { register, login } from "../controllers/auth";
import { usgs, nws} from "../controllers/alerts";

router.post("/usgs", usgs);
router.post("/nws", nws);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
