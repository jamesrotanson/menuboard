import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip, Label } from 'recharts';

const data = [
  { nutrition: 'Carbohydrate', User1: 400, User2: 600, },
  { nutrition: 'Protein', User1: 580, User2: 640, },
  { nutrition: 'Fat', User1: 410, User2: 200, },
  { nutrition: 'Vitamins', User1: 220, User2: 500,},
  { nutrition: 'Minerals', User1: 450, User2: 320, },
];

const ChartNutrition = () => {
  return (
    <RadarChart outerRadius={90} width={424} height={320} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <PolarGrid />
        <PolarAngleAxis dataKey="nutrition" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="User1" dataKey="User1" stroke="#FCC150" fill="#FCC150" fillOpacity={0.6} />
        <Radar name="User2" dataKey="User2" stroke="#F5756C" fill="#F5756C" fillOpacity={0.6} />
        <Label/>
        <Legend 
            formatter={(value, entry, index) => <span className="p">{value}</span>}
        />
        <Tooltip/>
    </RadarChart>
    // <AreaChart width={424} height={320} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    //     <CartesianGrid strokeDasharray="3 3" />
    //     <XAxis dataKey="name" />
    //     <YAxis />
    //     <Tooltip />
    //     <Legend 
    //         formatter={(value, entry, index) => <span className="p">{value}</span>}
    //     />
    //     <defs>
    //         <linearGradient id="colorCarbohydrate" x1="0" y1="0" x2="0" y2="1">
    //         <stop offset="5%" stopColor="#7074D0" stopOpacity={0.8}/>
    //         <stop offset="95%" stopColor="#7074D0" stopOpacity={0}/>
    //         </linearGradient>
    //         <linearGradient id="colorProtein" x1="0" y1="0" x2="0" y2="1">
    //         <stop offset="5%" stopColor="#FF8D8D" stopOpacity={0.8}/>
    //         <stop offset="95%" stopColor="#FF8D8D" stopOpacity={0}/>
    //         </linearGradient>
    //         <linearGradient id="colorFat" x1="0" y1="0" x2="0" y2="1">
    //         <stop offset="5%" stopColor="#FCC150" stopOpacity={0.8}/>
    //         <stop offset="95%" stopColor="#FCC150" stopOpacity={0}/>
    //         </linearGradient>
    //     </defs>
    //     <Area type="monotone" dataKey="Carbohydrate" stroke="#7074D0" fillOpacity={1} fill="url(#colorCarbohydrate)" />
    //     <Area type="monotone" dataKey="Protein" stroke="#FF8D8D" fillOpacity={1} fill="url(#colorProtein)" />
    //     <Area type="monotone" dataKey="Fat" stroke="#FCC150" fillOpacity={1} fill="url(#colorFat)" />
    // </AreaChart>
  );
};

export default ChartNutrition;