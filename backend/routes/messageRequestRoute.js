import express from "express";
import {
  getAllChatRequests,
  respondToChatRequest,
  sendChatRequest,
} from "../controllers/chatRequest.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/chat-request/:id", protectRoute, sendChatRequest);
router.post("/chat-request/respond/:id", protectRoute, respondToChatRequest); // Respond to chat request
router.get("/chat-requests", protectRoute, getAllChatRequests);

export default router;
