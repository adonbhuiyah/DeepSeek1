
import Image from "next/image";
import img from "../../public/images";  
import { useClerk, UserButton } from "@clerk/nextjs";
import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import ChatLabel from "./ChatLabel";
const Sidebar = ({ expand, setExpand }) => {
  const {openSignIn} = useClerk()
  const {user} = useContext(AppContext)
  const [openMenu,setOpenMenu] = useState({id:0,open:false})
  return (
    <div
      className={`z-50 flex flex-col justify-between bg-[#212327] pt-7 transition-all max-md:absolute max-md:h-screen ${expand ? "w-64 p-4" : "w-0 max-md:overflow-hidden md:w-20"}`}
    >
      <div>
        <div
          className={`flex ${expand ? "flex-row gap-10" : "flex-col items-center gap-8"}`}
        >
          <Image
            className={expand ? "w-36" : "w-10"}
            src={expand ? img.logo_text : img.logo_icon}
            alt=""
          />
          <div
            onClick={() => setExpand((prev) => !prev)}
            className="group flex-center relative flex aspect-square h-9 w-9 cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-500/20"
          >
            <Image src={img.menu_icon} className="md:hidden" alt="" />
            <Image
              src={expand ? img.sidebar_close_icon : img.sidebar_icon}
              className="hidden w-7 md:block"
              alt=""
            />
            <div
              className={`absolute w-max ${expand ? "top-12 left-1/2 -translate-x-1/2" : "-top-12 left-0"} pointer-events-none rounded-lg bg-black px-3 py-2 text-sm text-white opacity-0 shadow-lg transition group-hover:opacity-100`}
            >
              {expand ? "Close sidebar" : "Open sidebar"}
              <div
                className={`absolute h-3 w-3 rotate-45 bg-black ${expand ? "-top-1.5 left-1/2 -translate-x-1/2" : "-bottom-1.5 left-4"}`}
              ></div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className={`flex-center mt-8 flex cursor-pointer ${expand ? " primaryBG w-max gap-2 rounded-2xl p-2.5 hover:opacity-90" : "group relative mx-auto h-9 w-9 rounded-lg hover:bg-gray-500/30"}`}
        >
          <Image
            className={expand ? "w-6" : "w-7"}
            src={expand ? img.chat_icon : img.chat_icon_dull}
            alt=""
          />
          <div className="pointer-events-none absolute -top-12 -right-12 w-max rounded-lg bg-black px-3 py-2 text-sm text-white opacity-0 shadow-lg transition group-hover:opacity-100">
            New chat
            <div className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 bg-black"></div>
          </div>
          {expand && <p className="text font-medium text-white">New chat</p>}
        </button>
        <div
          className={`mt-8 text-sm text-white/25 ${expand ? "block" : "hidden"} `}
        >
          <p>Recents</p>
         <ChatLabel openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
      </div>
      <div>
        <div className={`flex flex-center cursor-pointer group relative ${expand ? 'gap-1 text-white/80 text-sm p-2.5 border border-[#4d6bfe] rounded-lg hover:bg-white/10 cursor-pointer' : 'h-10 w-10 mx-auto hover:bg-gray-500/30 rounded-lg'}`}>
          <Image
            className={expand ? "w-5" : "mx-auto w-6.5"}
            src={expand ? img.phone_icon : img.phone_icon_dull}
            alt=""
          />
          <div className={`absolute -top-60 pb-8 ${!expand && '-right-40'} opacity-0 group-hover:opacity-100 hidden group-hover:block transition`}>
            <div className="relative w-max rounded-lg bg-black p-3 text-sm text-white shadow-lg">
              <Image src={img.qrcode} alt="" className="w-44" />
              <p>Scan to get DeepSeek App</p>
              <div
                className={`absolute h-3 w-3 rotate-45 bg-black ${expand ? "right-1/2" : "left-4"} -bottom-1.5`}
              ></div>
            </div>
          </div>
          {expand && (
            <>
              <span>Get App</span> <Image src={img.new_icon} alt="" />
            </>
          )}
        </div>
        <div onClick={ user ? null : openSignIn} className={`flex items-center ${expand ? 'hover:bg-white/10 rounded-lg' : 'justify-center w-full' } gap-3 text-white/60 text-sm p-2 mt-2 cursor-pointer`}>
        {user ? <UserButton/>  :<Image src={img.profile_icon} className="w-7" alt="" /> }
         
          {expand && <span>My Profile</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
