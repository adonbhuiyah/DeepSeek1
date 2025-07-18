"use client";
import Message from "@/components/Message";
import PromptBox from "@/components/PromptBox";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <div className="flex ">
       <Sidebar expand={expand} setExpand={setExpand} />
        <div className="flex-center px-4 pb-8 h-screen bg-black text-white relative flex flex-1 flex-col ">
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image onClick={()=>setExpand(prev=>!prev)}
              className="rotate-180"
              width={40}
              height={40}
              src="/menu_icon.svg"
              alt=""
            />{" "}
            <Image
              width={40}
              height={40}
              className="opacity-70"
              src="/chat_icon.svg"
              alt=""
            />
          </div>
          {messages.length !== 0 ? <>
          <div className="flex flex-center flex-col gap-2">
            <Image src="/logo_icon.svg" width={80} height={80} alt=""  className=""/>
            <p className="font-medium text-2xl mb-2">Hi, I'm DeepSeek.</p>
            <p className="font-light text-xl text-gray-400">How can i help you today?</p>
          </div>
          </> :<>
          <div>
            <Message role='user' content='what is nextjs' />
          </div>
          </> }
     <PromptBox isLoading={isLoading} setIsLoading={setIsLoading} />
          
       
        </div>
      </div>
    </div>
  );
}
