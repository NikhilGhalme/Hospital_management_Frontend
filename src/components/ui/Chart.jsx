import React from "react";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart as RechartsLineChart, Line } from "recharts";

// Sample data for demonstration
const sampleData = [
  { name: "Jan", patients: 30 },
  { name: "Feb", patients: 45 },
  { name: "Mar", patients: 60 },
];

export const BarChart = ({ data = sampleData, title }) => (
  <div className="chart-container">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <RechartsBarChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="patients" fill="#8884d8" />
    </RechartsBarChart>
  </div>
);

export const LineChart = ({ data = sampleData, title }) => (
  <div className="chart-container">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <RechartsLineChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="patients" stroke="#8884d8" />
    </RechartsLineChart>
  </div>
);
