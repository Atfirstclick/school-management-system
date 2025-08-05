"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
  .string()
  .min(3, { message: 'Kullanıcı adı en az 3 karakter olmalıdır!' })
  .max(20, { message: 'Kullanıcı adı en fazla 20 karakter olabilir!' }),
  email: z.string().email({ message: "Geçersiz e-posta adresi!" }),
  password:z.string().min(8, {message: "Parola en az 8 karakterden oluşmalıdır!"}),
  firstName:z.string().min(1, {message:"Ad gereklidir!"}),
  lastName:z.string().min(1, {message:"Soyadı gereklidir!"}),
  phone:z.string().min(1, {message:"Telefon gereklidir!"}),
  address:z.string().min(1, {message:"Adres gereklidir!"}),
  bloodType:z.string().min(1, {message:"Kan grubu gereklidir!"}),
  birthday:z.date({message:"Doğum tarihi gereklidir!"}),
  sex: z.enum(["erkek", "kadın"], {message: "Cinsiyet bilgisi gereklidir!"}),
  img:z.instanceof(File, {message:"Fotoğraf gereklidir!"})

});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({
    type,
    data,
}:{
    type:"create" | "update"; 
    data?:any;
}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

const onSubmit = handleSubmit((data) => {
    console.log(data);
});

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
        <h1 className="text-xl font-semibold">Yeni Öğretmen Kaydı Oluştur</h1>
        <span className="text-xs text-gray-400 font-medium">
            Doğrulama Bilgileri
            </span>
<div className="flex justify-between flex-wrap gap-4 ">
             <InputField
              label="E-mail"
              name="email"
              type="email"
              defaultValue={data?.email}
              register={register}
              error={errors?.email}
              />
              <InputField
              label="Kullanıcı Adı"
              name="username"
              defaultValue={data?.username}
              register={register}
              error={errors?.username}
              />
 
              <InputField
              label="Parola"
              name="password"
              type="password"
              defaultValue={data?.password}
              register={register}
              error={errors?.password}
              />
</div>
                       <span className="text-xs text-gray-400 font-medium">
            Kişisel Bilgiler
            </span> 
<div className="flex justify-between flex-wrap gap-4 ">
            <InputField
              label="Ad"
              name="firstName"
              defaultValue={data?.firstName}
              register={register}
              error={errors.firstName}
              />
                <InputField
              label="Soyad"
              name="lastName"
              defaultValue={data?.lastName}
              register={register}
              error={errors.lastName}
              />
                <InputField
              label="Telefon"
              name="phone"
              defaultValue={data?.phone}
              register={register}
              error={errors.phone}
              />
                <InputField
              label="Adres"
              name="address"
              defaultValue={data?.address}
              register={register}
              error={errors.address}
              />
                <InputField
              label="Kan Grubu"
              name="bloodType"
              defaultValue={data?.bloodType}
              register={register}
              error={errors.bloodType}
              />
              <InputField
              label="Doğum Tarihi"
              name="birthday"
              defaultValue={data?.birthday}
              register={register}
              error={errors.birthday}
              type="date"
              />

    <div className="flex flex-col gap-2 w-full md:w-1/4">
        <label className="text-sm text-gray-500">Cinsiyet</label>
        <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full" {...register("sex")} defaultValue={data?.sex}>
            <option value="male">Erkek</option>
            <option value="female">Kadın</option>

        </select>
        {errors.sex?.message && (
            <p className="text-sm text-red-400">{errors.sex.message.toString()}
            </p>
            )}
    </div>
     <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
        <label className="text-sm text-gray-500 flex items-center gap-2 cursor-pointer" htmlFor="img">
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Fotoğraf yükleyin</span>
        </label>
<input type="file" id="img" {...register("img")} className="hidden"/>
        {errors.img?.message && (
            <p className="text-sm text-red-400">{errors.img.message.toString()}
            </p>
            )}
    </div>
</div>            

        <button className="bg-blue-400 text-white p-2 rounded-md">{type==="create" ? "Kaydet" : "Güncelle"} </button>



    </form>
  )
}

export default TeacherForm