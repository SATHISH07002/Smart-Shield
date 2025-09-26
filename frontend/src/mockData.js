// Sample mockup dataset for SIH dashboard (filtration & methane extraction)

export const manholes = [
  {
    id: "MH-001",
    location: "Sector 21, City Center",
    status: "safe",
    gas: {
      CH4: 0.8, // %
      CO: 5,    // ppm
      H2S: 0.2, // ppm
      O2: 20.8, // %
    },
    filters: {
      dust: "OK",
      coalescing: "OK",
      ptfe: 98, // % integrity
      ironSponge: 40, // % saturation
      activatedCarbon: 80, // % remaining
    },
    methane: {
      flow: 2.1, // L/min
      pressure: 1.2, // bar
      tank: "available"
    },
    device: {
      battery: 92, // %
      comm: "online",
      sensor: "OK"
    },
    logs: [
      { time: "2025-09-25T10:00:00Z", event: "Methane extraction started" },
      { time: "2025-09-25T12:00:00Z", event: "Dust filter checked" }
    ]
  },
  {
    id: "MH-002",
    location: "Zone 3, Industrial Area",
    status: "warning",
    gas: {
      CH4: 2.5,
      CO: 18,
      H2S: 0.7,
      O2: 19.5,
    },
    filters: {
      dust: "Clogged",
      coalescing: "Needs Change",
      ptfe: 85,
      ironSponge: 80,
      activatedCarbon: 20,
    },
    methane: {
      flow: 1.0,
      pressure: 0.8,
      tank: "available"
    },
    device: {
      battery: 60,
      comm: "online",
      sensor: "OK"
    },
    logs: [
      { time: "2025-09-25T09:00:00Z", event: "Warning: Dust filter clogged" },
      { time: "2025-09-25T11:30:00Z", event: "Methane flow reduced" }
    ]
  },
  {
    id: "MH-003",
    location: "Old Town, Main Road",
    status: "danger",
    gas: {
      CH4: 5.2,
      CO: 40,
      H2S: 2.1,
      O2: 17.2,
    },
    filters: {
      dust: "Clogged",
      coalescing: "Needs Change",
      ptfe: 60,
      ironSponge: 95,
      activatedCarbon: 5,
    },
    methane: {
      flow: 0.2,
      pressure: 0.3,
      tank: "full"
    },
    device: {
      battery: 30,
      comm: "offline",
      sensor: "Damaged"
    },
    logs: [
      { time: "2025-09-25T08:00:00Z", event: "Danger: Methane spike detected" },
      { time: "2025-09-25T08:30:00Z", event: "Device offline" }
    ]
  }
];
