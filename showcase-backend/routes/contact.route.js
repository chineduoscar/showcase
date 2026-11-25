import express from "express";
import {
  sendMessage,
  getAllMessages,
} from "../controller/contact.controller.js";
import { sayHello, sayWelcome } from "../middleware/test.js";
import { authenticate } from "../middleware/authenticate.middleware.js";
import { authorize } from "../middleware/roles.middleware.js";

const router = express.Router();

router.post("/", sayHello, sayWelcome("John"), sendMessage);
router.get("/", authenticate, authorize("admin"), getAllMessages);

export default router;
