import React from "react";
import Table from "./components/Table";
import type { UserData } from "./types";

const mockData: UserData[] = [
  { id: 1, name: 'Jessica' },
  { id: 2, name: 'Alexander' },
  { id: 3, name: 'Vivien' },
];

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>List of users</h1>
      <Table data={mockData} />
    </div>
  );
}

export default App;
