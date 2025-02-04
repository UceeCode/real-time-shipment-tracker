import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ShipmentItem = ({ shipment }) => {
    const locations = {
        "New York": [40.7128, -74.0060],
        "Los Angeles": [34.0522, -118.2437],
        "Chicago": [41.8781, -87.6298],
        "Houston": [29.7604, -95.3698],
    };

    return (
        <div className="border-b last:border-none p-4 flex flex-col">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-lg font-semibold">{shipment.trackingId}</p>
                    <p className="text-gray-600">{shipment.location}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-white ${shipment.status === "Delivered" ? "bg-green-500" : shipment.status === "Out for Delivery" ? "bg-yellow-500" : "bg-blue-500"}`}>
                    {shipment.status}
                </div>
            </div>

            <div className="mt-4">
                <MapContainer center={locations[shipment.location] || [0, 0]} zoom={10} className="h-40 w-full rounded-lg">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={locations[shipment.location] || [0, 0]}>
                        <Popup>Shipment at {shipment.location}</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default ShipmentItem;
