import Image from "next/image";
import React, { useState } from "react";
import img from "../../public/images";

const PromptBox = ({isLoading,setIsLoading}) => { 
  const [prompt,setPrompt] = useState('')

  
  return (
    <form
      className={`w-full ${false ? "max-w-3xl" : "max-w-2xl"} mt-4 rounded-3xl bg-[#404045] p-4 transition-all`}
    >
      <textarea
        className="w-full resize-none overflow-hidden bg-transparent break-words outline-none"
        placeholder="Message DeepSeek"
        required onInput={(e)=>setPrompt(e.target.value) } spellCheck="false" 
        rows="2"
      value={prompt} />
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <p className="flex cursor-pointer items-center gap-2 rounded-full border border-gray-300/40 px-2 py-1 text-xs transition hover:bg-gray-500/20">
            <Image src={img.deepthink_icon} className="h-5" alt="" /> DeepThink
            (R1)
          </p>
          <p className="flex cursor-pointer items-center gap-2 rounded-full border border-gray-300/40 px-2 py-1 text-xs transition hover:bg-gray-500/20">
            <Image src={img.search_icon} className="h-5" alt="" /> Search
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={img.pin_icon} className="w-4 cursor-pointer" alt="" />
          <button  type="button" className={` ${prompt ? 'bg-[#4d6bfe] ' : 'bg-[#71717a]' } rounded-full p-2 cursor-pointer`}>
              <Image src={prompt ? img.arrow_icon : img.arrow_icon_dull} className="w-3.5 aspect-square" alt="" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default PromptBox;
