import { useEffect, useState } from "react";
import socketInit from "./SocketServer";
import Message from "./component/Message";
import { useSelector, useDispatch } from "react-redux";

const ChatPage = () => {

  const [socket, setSocket] = useState(null);const user_id =  useSelector((state) => state.auth.userid)
const token = useSelector((state) => state.auth.token);
const userid =  useSelector((state) => state.auth.userid)
  useEffect(() => {
    if (!user_id || !token) return;

    const newSocket = socketInit({ userid, token });
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("✅ connected");
    });

    newSocket.on("connect_error", (error) => {
      console.log("❌", error.message);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [user_id, token]);

  return (
    <div>
      <h1>ChatList</h1>

      {socket && <Message socket={socket} user_id={user_id} />}
    </div>
  );
};

export default ChatPage;
