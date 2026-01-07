import { io } from "socket.io-client";

const socketInit = ({ userid, token }) => {
  return io("http://localhost:5000", {
    auth: { userid, token },
  });
};

export default socketInit;
