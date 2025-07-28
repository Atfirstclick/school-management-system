"use client";
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
   {
    name: 'Toplam',
    count: 2000,
    fill: 'white',
  },
  {
    name: 'Kızlar',
    count: 1000,
    fill: '#c3ebfa',
  },
  {
    name: 'Erkekler',
    count: 1000,
    fill: '#fae27c',
  },
  
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};


const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* TITLE */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Öğrenci</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        {/* CHART */}
        <div className='relative w-full h-[75%]'>
            <ResponsiveContainer >
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/maleFemale.png" alt="" width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
        </div>
        {/* BOTTOM */}
        <div className='flex justify-center gap-16'>
           <div className='flex flex-col gap-1'>
            <div className='w-5 h-5 bg-KmlSky rounded-full'>
            </div>
            <h1 className='font-bold'>1000</h1>
            <h2 className='text-xs text-gray-300'>Erkek (%50)</h2>
            </div> 
             <div className='flex flex-col gap-1'>
            <div className='w-5 h-5 bg-KmlYellow rounded-full'>
            </div>
            <h1 className='font-bold'>1000</h1>
            <h2 className='text-xs text-gray-300'>Kız (%50)</h2>
            </div> 
        </div>
    </div>
  )
}

export default CountChart