"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  const [text, setText] = useState("")
  const createTree = () => {
   
    router.push(`/generate?handle=${text}`)
  }
  
  return (
    <main>
      <section className="bg-customGreen min-h-[100vh] grid grid-cols-2">
        <div className="flex justify-center flex-col ml-[10vw] gap-2">
          <p className="text-[#D2E823] font-bold text-5xl">Everything you are. In </p>
          <p className="text-[#D2E823] font-bold text-5xl mb-4">  one, simple link in bio.</p>
          <p className="text-[#D2E823]">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-3 my-5">
            <input value={text} onChange={(e)=> setText(e.target.value)} className="px-2 py-2 focus:outline-green-800 rounded-md" type="text" placeholder="Enter your Handle"/>
            <button onClick={()=> createTree()} className="bg-pink-300 rounded-full px-4 py-4 font-semibold">Claim your Bittree</button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mr-[10vw]">
          <Image src="/home.png" alt="homepage image" width={500} height={500} />
        </div>
      </section>
    </main>
  );
}
