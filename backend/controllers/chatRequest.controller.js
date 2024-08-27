import ChatRequest from "../models/chatRequest.model.js";
import Conversation from "../models/conversation.model.js";

export const sendChatRequest = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // Check if a request already exists
    let chatRequest = await ChatRequest.findOne({
      senderId,
      receiverId,
      status: "pending",
    });

    if (chatRequest) {
      return res.status(400).json({ message: "Chat request already sent" });
    }

    chatRequest = new ChatRequest({ senderId, receiverId });
    await chatRequest.save();

    res.status(201).json(chatRequest);
  } catch (error) {
    console.log("Error in sendChatRequest controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const respondToChatRequest = async (req, res) => {
  try {
    const { id: requestId } = req.params;
    const { status } = req.body; // 'accepted' or 'declined'

    let chatRequest = await ChatRequest.findById(requestId).populate();

    if (
      !chatRequest ||
      chatRequest.receiverId.toString() !== req.user._id.toString()
    ) {
      return res.status(404).json({ message: "Chat request not found" });
    }

    if (chatRequest.status !== "pending") {
      return res
        .status(400)
        .json({ message: "Chat request already responded to" });
    }

    chatRequest.status = status;
    await chatRequest.save();

    if (status === "accepted") {
      // Create a new conversation
      const conversation = await Conversation.create({
        participants: [chatRequest.senderId, chatRequest.receiverId],
      });
      res.status(201).json({ message: "Chat request accepted", conversation });
    } else {
      res.status(200).json({ message: "Chat request declined" });
    }
  } catch (error) {
    console.log("Error in respondToChatRequest controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllChatRequests = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log(userId);

    // Find all chat requests where the user is either the sender or receiver
    const chatRequests = await ChatRequest.find({
      $or: [{ senderId: userId }, { receiverId: userId }],
    });

    res.status(200).json(chatRequests);
  } catch (error) {
    console.log("Error in getAllChatRequests controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
