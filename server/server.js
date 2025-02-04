const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
    console.log("Client connected");

    setInterval(() => {
        const shipmentUpdate = {
            trackingId: "SHIP" + Math.floor(Math.random() * 1000),
            status: ["In Transit", "Out for Delivery", "Delivered"][Math.floor(Math.random() * 3)],
            location: ["New York", "Los Angeles", "Chicago", "Houston"][Math.floor(Math.random() * 4)],
            timestamp: new Date().toLocaleTimeString(),
        };
        ws.send(JSON.stringify(shipmentUpdate));
    }, 5000);

    ws.on("close", () => console.log("Client disconnected"));
});

console.log("WebSocket server running on ws://localhost:8080");
