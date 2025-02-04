// src/components/ShipmentTracker.jsx
import { useState, useEffect } from "react";
import ShipmentItem from "./ShipmentItem";
import { SearchIcon } from "@heroicons/react/outline";

const ShipmentTracker = () => {
    const [shipments, setShipments] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080");

        ws.onmessage = (event) => {
            const newShipment = JSON.parse(event.data);
            setShipments((prev) => [newShipment, ...prev]);
        };

        return () => ws.close();
    }, []);

    const filteredShipments = shipments.filter(shipment =>
        shipment.trackingId.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
            <h1 className="text-4xl font-extrabold text-center mb-6 text-gradient">📦 Real-Time Shipment Tracker</h1>
            
            <div className="relative mb-6">
                <SearchIcon className="absolute left-3 top-2.5 w-6 h-6 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search by Tracking ID..."
                    className="w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredShipments.length === 0 ? (
                    <p className="text-gray-500 text-center col-span-4">No matching shipments found.</p>
                ) : (
                    filteredShipments.map((shipment, index) => <ShipmentItem key={index} shipment={shipment} />)
                )}
            </div>
        </div>
    );
};

export default ShipmentTracker;
