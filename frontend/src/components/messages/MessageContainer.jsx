import Messages from "./Messages";


const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        {/* Header */}
        <div className="text-white px-4 py-2 mb-2">
          <span className=" ">To:</span>{" "}
          <span className=" font-bold ">John doe</span>
        </div>

        <Messages />
        {/* <MessageInput /> */}
      </>
    </div>
  );
};
export default MessageContainer;
