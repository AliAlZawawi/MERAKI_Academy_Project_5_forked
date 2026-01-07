// controllers/messageHandler.js
const messageHandler = (socket, io) => {
  socket.on("message", (data) => {
    console.log("📩 message:", data);

    // إرسال للمستقبِل
    io.to("room-" + data.to).emit("message", data);

    // إرسال للمرسِل (عرض فوري)
    io.to("room-" + data.from).emit("message", data);
  });
};

module.exports = messageHandler;
