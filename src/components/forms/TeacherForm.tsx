"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  username: z
  .string()
  .min(3, { message: 'Kullanıcı adı en az 3 karakter olmalıdır!' })
  .max(20, { message: 'Kullanıcı adı en fazla 20 karakter olabilir!' }),
  email: z.string().email({ message: "Geçersiz e-posta adresi!" }),
//   password
  Parola:z.string().min(8, {message: "Parola en az 8 karakterden oluşmalıdır!"}),
//   firstName, lastName, phone, address, birthday, sex
  Ad:z.string().min(1, {message:"Ad gereklidir!"}),
  Soyad:z.string().min(1, {message:"Soyadı gereklidir!"}),
  Telefon:z.string().min(1, {message:"Telefon gereklidir!"}),
  Adres:z.string().min(1, {message:"Adres gereklidir!"}),
  DoğumTarihi:z.date().min(1, {message:"Doğum tarihi gereklidir!"}),
  cinsiyet: z.enum(["erkek", "kız"], {message: "Cinsiyet bilgisi gereklidir!"}),
  img:z.instanceof(File, {message:"Resim gereklidir!"})

});

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
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form className="">input</form>
  )
}

export default TeacherForm