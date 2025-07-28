"use client";

import Image from "next/image";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    name: 'Ocak',
    gelir: 4000,
    gider: 2400,
  },
  {
    name: 'Şubat',
    gelir: 3000,
    gider: 1398,
  },
  {
    name: 'Mart',
    gelir: 2000,
    gider: 9800,
  },
  {
    name: 'Nisan',
    gelir: 2780,
    gider: 3908,
  },
  {
    name: 'Mayıs',
    gelir: 1890,
    gider: 4800,
  },
  {
    name: 'Haziran',
    gelir: 2390,
    gider: 3800,
  },
  {
    name: 'Temmuz',
    gelir: 3490,
    gider: 4300,
  },
   {
    name: 'Ağustos',
    gelir: 3490,
    gider: 4300,
  },
   {
    name: 'Eylül',
    gelir: 3490,
    gider: 4300,
  },
   {
    name: 'Ekim',
    gelir: 3490,
    gider: 4300,
  },
   {
    name: 'Kasım',
    gelir: 3490,
    gider: 4300,
  },
   {
    name: 'Aralık',
    gelir: 3490,
    gider: 4300,
  },
];

const FinanceChart = () => {
  return(
             <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* TITLE */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Finans</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
        <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
        <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={20}/>
        <Tooltip />
        <Legend 
        align='center' 
           verticalAlign='top'
           wrapperStyle={{ paddingTop: '10px', paddingBottom: '30px' }}/>
        <Line 
        type="monotone" 
        dataKey="gider" 
        stroke="#C3EBFA"
        strokeWidth={3} 
        activeDot={{ r: 8 }} />
        <Line 
        type="monotone" 
        dataKey="gelir" 
        stroke="#CFCEFF"
        strokeWidth={3} 
        activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart