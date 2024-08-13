import Image from "next/image";
import Product from "@/app/product/page";
import Navbar from "@/components/Navbar";
import { BadgeAlert } from "lucide-react";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col p-6">
        <Header />
        <div className="relative w-full flex justify-center">
          <div className="bg-[#EEEEEE] max-w-[50%]  flex flex-col justify-center items-center ">
            <h1 className={"text-black text-5xl px-[20px]"}>
              Welcome to Acme. This is the example for the Next.js Learn Course,
              brought to you by Vercel
            </h1>
            <button
              className={"bg-amber-500 py-8 px-24 rounded mt-20 item-start"}
            >
              Log in
            </button>
          </div>
          <div className="">
            <Image
              src={"/images/onboarding-img.png"}
              alt={"Onboarding"}
              width={800}
              height={1025}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
