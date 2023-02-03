import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan 2023', actual: 400, goal: 350 },
  { name: 'Feb 2023', actual: 350, goal: 300 },
  { name: 'Mar 2023', actual: 450, goal: 400 },
  { name: 'Apr 2023', actual: 500, goal: 450 },
];

const ChartSavings = () => (
  <BarChart width={424} height={320} data={data}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey='goal' fill='#E4E6EB' />
    <Bar dataKey='actual' fill='#27AE4D' />
    {/* <Tooltip cursor={{fill: '#f00'}} /> */}
    <Legend
        formatter={(value, entry, index) => <span className="p">{value}</span>}
    />
    <Tooltip cursor={{ stroke: 'red', strokeWidth: 2, fill: 'red' }} />
  </BarChart>
);

export default ChartSavings;