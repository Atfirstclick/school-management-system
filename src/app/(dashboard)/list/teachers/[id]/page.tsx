import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import FormModal from "@/components/FormModal"
import Performance from "@/components/Performance"
import Image from "next/image"
import Link from "next/link"

const SingleTeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
        {/* LEFT */}
        <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">

        {/* USER INFO CARD */}
<div className="bg-KmlSky py-6 px-4 rounded-md flex-1 flex gap-4">
  <div className="w-1/3 flex items-center">
    <Image 
      src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200" 
      alt="" 
      width={144} 
      height={144} 
      className="w-36 h-36 rounded-full object-cover object-top"
    />
  </div>
  <div className="w-2/3 flex flex-col justify-between gap-4">
<div className="flex items-center gap-4">
    <h1 className="text-xl font-semibold">Hakan Belen</h1>
    <FormModal table="teacher" type="update" data={
  {
    id: 1,
    teacherId: "1234567890",
    username: "hbelen",
    password: "password",
    firstName: "Hakan",
    lastName: "Belen",
    bloodType: "B+",
    email: "user@gmail.com",
    sex: "Erkek",
    birthday: "02.03.1993",
    photo:
      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "+90 123 456 78 90",
    subjects: ["Matemarik", "Geometri"],
    classes: ["1B", "2A", "3C"],
    address: "Cumhuriyet Mah. Atatürk Cad. No:1/2 İstanbul",
  }
    }/>
</div>
    <p className="text-sm text-gray-500 break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
            <Image src="/blood.png" alt="" width={14} height={14}/>
            <span>B+</span>
        </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
            <Image src="/date.png" alt="" width={14} height={14}/>
            <span>Ocak 2025</span>
        </div>
                      <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
            <Image src="/phone.png" alt="" width={14} height={14}/>
            <span className="whitespace-nowrap">+90 123 456 78 90</span>
        </div>
                  <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
            <Image src="/mail.png" alt="" width={14} height={14}/>
            <span>user@gmail.com</span>
        </div>
    </div>
  </div>
</div>
         {/* SMALL CARDS */}
        <div className="flex-1 flex gap-4 justify-between flex-wrap">
          {/* CARD */}
          <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">            <Image src="/singleAttendance.png" alt='' width={24} height={24} className="w-6 h-6"/>
         <div className="">
          <h1 text-xl font-semibold >%90</h1>
          <span className="text-sm text-gray-400">Devam Oranı</span>
         </div>
         </div>
         {/* CARD */}
          <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
            <Image src="/singleBranch.png" alt='' width={24} height={24} className="w-6 h-6"/>
         <div className="">
          <h1 text-xl font-semibold >2</h1>
          <span className="text-sm text-gray-400">Şube</span>
         </div>
         </div>
          {/* CARD */}
          <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
          <Image src="/singleLesson.png" alt='' width={24} height={24} className="w-6 h-6"/>
         <div className="">
          <h1 text-xl font-semibold >6</h1>
          <span className="text-sm text-gray-400">Aylık Ders</span>
         </div>
         </div>
        {/* CARD */}
          <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">            <Image src="/singleClass.png" alt='' width={24} height={24} className="w-6 h-6"/>
         <div className="">
          <h1 text-xl font-semibold >6</h1>
          <span className="text-sm text-gray-400">Sınıf</span>
         </div>
         </div>
        </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Öğretmen Programı</h1>
          <BigCalendar/>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Kısayollar</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
          <Link className="p-3 rounded-md bg-KmlSkyLight" href="/">Sınıflar</Link>
          <Link className="p-3 rounded-md bg-KmlPurpleLight" href="/">Dersler</Link>
          <Link className="p-3 rounded-md bg-KmlYellowLight" href="/">Öğrenciler</Link>
          <Link className="p-3 rounded-md bg-pink-50" href="/">Testler</Link>
          <Link className="p-3 rounded-md bg-KmlSkyLight" href="/">Ödevler</Link>
          </div>
        </div>
        <Performance/>
        <Announcements/>
        </div>
    </div>
  )
}

export default SingleTeacherPage