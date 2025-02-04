const connectWebSocket = (onMessageReceived) => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onmessage = (event) => {
        onMessageReceived(JSON.parse(event.data));
    };

    return ws;
};

export default connectWebSocket;
