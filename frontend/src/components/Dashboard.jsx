
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const manholes = [
  {
    id: "MH-001",
    position: [28.6139, 77.2090],
    status: "safe",
    summary: "CH₄: 0.8%, Filters: Healthy, Methane: Normal"
  },
  {
    id: "MH-002",
    position: [28.6145, 77.2050],
    status: "warning",
    summary: "CH₄: 2.5%, Filters: Clogged, Methane: Reduced"
  },
  {
    id: "MH-003",
    position: [28.6100, 77.2100],
    status: "danger",
    summary: "CH₄: 5.2%, Filters: Failure, Methane: Spike"
  }
];

const statusColor = {
  safe: "bg-green-500",
  warning: "bg-yellow-400",
  danger: "bg-red-500"
};

const Dashboard = () => {
  return (
  <div className="flex min-h-screen bg-gradient-to-t from-slate-500 to-slate-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white/80 backdrop-blur-md border-r border-slate-200 p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text text-transparent">Smart Shield</h2>
        <nav className="flex flex-col gap-4">
          <a className="font-semibold text-blue-600" href="#">Dashboard</a>
          <a className="text-slate-700" href="#">Real-time Monitoring</a>
          <a className="text-slate-700" href="#">Analytics</a>
          <a className="text-slate-700" href="#">Maintenance</a>
          <a className="text-slate-700" href="#">Reports</a>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8 flex flex-col gap-8">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text text-transparent mb-4">
          Tamil Nadu Overview
        </h1>
        {/* Map Section */}
        <div className="rounded-2xl overflow-hidden shadow-card border border-slate-200 bg-white/80 backdrop-blur-md" style={{ height: 400 }}>
          <MapContainer center={[11.1271, 78.6569]} zoom={7} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {manholes.map(mh => (
              <Marker key={mh.id} position={mh.position}>
                <Popup>
                  <div>
                    <div className={`inline-block w-3 h-3 rounded-full mr-2 ${statusColor[mh.status]}`}></div>
                    <strong>{mh.id}</strong>
                    <div className="text-xs mt-1">{mh.summary}</div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white/90 rounded-xl shadow-card p-6 text-center">
            <div className="text-2xl font-bold text-slate-500">3</div>
            <div className="text-slate-600">Total Manholes</div>
          </div>
          <div className="bg-white/90 rounded-xl shadow-card p-6 text-center">
            <div className="text-2xl font-bold text-yellow-400">1</div>
            <div className="text-slate-600">Warning</div>
          </div>
          <div className="bg-white/90 rounded-xl shadow-card p-6 text-center">
            <div className="text-2xl font-bold text-red-500">1</div>
            <div className="text-slate-600">Danger</div>
          </div>
          <div className="bg-white/90 rounded-xl shadow-card p-6 text-center">
            <div className="text-2xl font-bold text-green-500">1</div>
            <div className="text-slate-600">Safe</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
