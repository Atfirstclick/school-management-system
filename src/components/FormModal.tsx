"use client"

import Image from "next/image";

const FormModal = ({table, type, data, id}: {
table: "teacher" | "student" | "lesson" | "class" | "subject" | "assignment" | "exam" | "event" | "announcement" | "result" | "parent";
type: "create" | "update" | "delete";
data?: any;
id?: number;
}) => {
 const size = type === "create" ? "w-8 h-8" : "w-7 h-7"
 const bgColor = type === "create" ? "bg-KmlYellow" : type === "update" ? "bg-KmlSky" : "bg-KmlPurple";
 return (
  <>
    <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`}>
    <Image src={`/${type}.png`} alt="" width={16} height={16}/>
    </button>
    </>
    );
};

export default FormModal