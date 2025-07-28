"use client";
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Pazartesi',
    var: 1800,
    yok: 200,
  },
  {
    name: 'Salı',
    var: 1200,
    yok: 800,
  },
  {
    name: 'Çarşamba',
    var: 1500,
    yok: 500,
  },
  {
    name: 'Perşembe',
    var: 1000,
    yok: 1000,
  },
  {
    name: 'Cuma',
    var: 800,
    yok: 1200,
  },
  {
    name: 'Cumartesi',
    var: 2000,
    yok: 0,
  },
  {
    name: 'Pazar',
    var: 1990,
    yok: 10,
  },
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className='flex justify-between items-center'>
           <h1 className='text-lg font-semibold'>Yoklama Durumu</h1> 
           <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <YAxis tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderradius:"10px", borderColor:"Lightgray"}}/>
          <Legend 
           align='left' 
           verticalAlign='top'
           wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }}
           />
          <Bar dataKey="var" fill="#FAE27C" 
          legendType='circle'
          radius={[10,10,0,0]}/>
          <Bar dataKey="yok" fill="#C3EBFA"  
          legendType='circle'
          radius={[10,10,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart