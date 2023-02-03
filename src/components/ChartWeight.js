import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', Weight: 80},
  { name: 'Feb', Weight: 79},
  { name: 'Mar', Weight: 77},
  { name: 'Apr', Weight: 78},
  { name: 'May', Weight: 76},
  { name: 'Jun', Weight: 75},
];

const ChartWeight = () => {
  return (
    <AreaChart width={424} height={320} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[70, 80]}/>
        <Tooltip />
        <Legend 
            formatter={(value, entry, index) => <span className="p">{value}</span>}
        />
        <defs>
            <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0fb55c" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#0fb55c" stopOpacity={0}/>
            </linearGradient>
        </defs>
        <Area type="monotone" dataKey="Weight" stroke="#0fb55c" fillOpacity={1} fill="url(#colorWeight)" />
    </AreaChart>
  );
};

export default ChartWeight;