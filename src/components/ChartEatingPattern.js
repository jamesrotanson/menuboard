import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Home cooking', value: 40 },
  { name: 'Office', value: 32 },
  { name: 'Dine out', value: 18 },
  { name: 'Meal delivery', value: 10 },
];

const COLORS = ['#FB6174', '#FFAE4F', '#22BCAA', '#558FFF'];

const ChartEatingPattern = () => (
    <PieChart width={400} height={264}>
        <Pie
            data={data}
            // cx={"50%"}
            // cy={"50%"}
            innerRadius={40}
            outerRadius={96}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
            // label
        >
            {
                data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
            }
        </Pie>
        <Legend 
            layout="vertical" 
            verticalAlign="middle" 
            align="right"
            formatter={(value, entry, index) => <span className="p">{value}</span>}
        />
        <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />
    </PieChart>
);

export default ChartEatingPattern;