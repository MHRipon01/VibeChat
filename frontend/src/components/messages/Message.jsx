import { useAuthContext } from "../../context/AuthContext"; 
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;

// <div className="chat chat-end">
//   <div className="chat-image avatar">
//     <div className="w-[40px] text-white border-white border-2 rounded ">
//       <img
//         src="https://i.ibb.co/SNq8N8H/image.png"
//         alt="Tailwind css chat bubble component"
//         className="w-[10px] h-1 border-red-700 border-2"
//       />
//     </div>
//   </div>
//   <div className="chat-bubble text-white bg-blue-500">
//     Hey! What is upppppp!
//   </div>
//   <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
//     12:42
//   </div>
// </div>
