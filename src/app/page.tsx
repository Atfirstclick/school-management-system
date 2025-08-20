import { redirect } from "next/navigation";

export default function HomePage() {
  const role = "student"; // Burada gerçek role logic olur
  redirect(`/${role}`);
}
