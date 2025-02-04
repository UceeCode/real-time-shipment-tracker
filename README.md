# Real-Time Shipment Tracker

This project is a real-time shipment tracking application built with React.js and WebSockets. It allows you to view shipment statuses, track their locations on a map, and search for specific shipments by their tracking ID.

## Features:
- Real-time shipment tracking via WebSockets.
- Display of shipments with status indicators (Delivered, Out for Delivery, etc.).
- Interactive map with shipment locations using React-Leaflet.
- Responsive UI with smooth microinteractions and animations.
- Search functionality to filter shipments by tracking ID.
- Customizable and beautiful design using TailwindCSS.

## Technologies:
- **React.js**: JavaScript library for building the user interface.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **WebSockets**: For real-time communication between the server and client.
- **React-Leaflet**: For displaying shipment locations on an interactive map.

---

## Prerequisites

Ensure that you have the following installed on your machine:

- **Node.js** (v14 or higher): [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js): [npm documentation](https://docs.npmjs.com/)
- **WebSocket server**: If you don't have one running, use any basic WebSocket server for simulating shipment updates.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/shipment-tracker.git
cd shipment-tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

### 3. Start WebSocket Server

```bash
npm install ws
node server.js
```