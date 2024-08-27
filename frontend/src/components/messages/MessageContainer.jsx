import { TiMessages } from "react-icons/ti";
import Messages from "./Messages";
import MessageInput from "./messageInput";

const MessageContainer = () => {
  const isChatSelected = true; // Renamed the boolean variable

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {isChatSelected ? (
        <>
          {/* Header */}
          <div className="text-white px-4 py-2 mb-2">
            <span className=" ">To:</span>{" "}
            <span className=" font-bold ">John doe</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      ) : (
        <NoChatSelected /> // Use the component here
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
