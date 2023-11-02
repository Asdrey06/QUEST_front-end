import { useEffect, useState } from "react";
import pusher from "../pusher";
import { useRef } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { RootState } from "../pages/_app";

function ChatComponent({ userType, sender, id }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  console.log(messages);

  const formatTimeAgo = (date) => {
    return moment(date).fromNow();
  };

  const channelName = "quest-livechat";

  useEffect(() => {
    const channel = pusher.subscribe(channelName);

    channel.bind("message", (data) => {
      console.log(data);
      // Handle incoming messages and add them to the state
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: data.message, sender: data.sender },
      ]);
    });

    // Don't forget to unsubscribe when the component unmounts
    return () => {
      channel.unbind();
      pusher.unsubscribe(channelName);
    };
  }, [channelName]);

  console.log(message);

  console.log(sender);

  console.log(id);

  let isSending = false;

  const requestinfo = useSelector(
    (state: RootState) => state.openrequest.value
  );

  console.log(requestinfo.id);
  const sendMessage = () => {
    if (isSending) {
      // Already sending a message, skip this request
      return;
    }

    isSending = true;
    const clientMessage = {
      message: message,
      sender: sender,
      userType: userType,
      id: id,
    };

    fetch("https://https://quest-backend-six.vercel.app/sendmessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clientMessage),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Message sent successfully
        setMessage("");
        isSending = false;
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        isSending = false;
      });
  };

  const [chats, setChats] = useState([]);

  console.log(chats);

  useEffect(() => {
    fetch("https://https://quest-backend-six.vercel.app/request/openRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: requestinfo.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result);
        console.log(data.result.fromConcierge);
        setChats(data.result.chat);
      })
      .catch((error) => {
        console.error("Error fetching concierge:", error);
      });
  }, []);

  const messagesRef = useRef(null);

  console.log(userType);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  console.log(sender);

  const displayChat = chats.map((data, i) => {
    return (
      <li
        key={i}
        className="sent-message flex flex-col border-2 border-neutral-400 mt-1 mb-1 p-3 rounded-lg"
      >
        <div className="flex flex-row w-full justify-between items-center">
          <p className="text-black text-sm">
            <p className="text-lg text-[#069668]">{data.firstname}</p>
          </p>
          <p className="text-black text-sm font-extralight italic">
            {formatTimeAgo(data.date)}
          </p>
        </div>
        <div>
          <p className="text-black font-light">{data.message}</p>
        </div>
      </li>
    );
  });

  return (
    <div className="h-full flex flex-col">
      <ul ref={messagesRef} className="overflow-y-auto flex-grow">
        {displayChat}
        {messages.map((msg, index) => (
          <div
            className="sent-message flex flex-col border-2 border-neutral-400 mt-1 mb-1 p-3 rounded-lg"
            key={index}
          >
            {msg.sender}
            {/* Display sender based on userType */}
            <p className="text-black font-light">{msg.message}</p>
          </div>
        ))}
      </ul>
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow border-2 w-full rounded-l-lg p-2"
        />
        <button
          type="submit"
          className="bg-emerald-500 text-white p-2 rounded-r-lg"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatComponent;
