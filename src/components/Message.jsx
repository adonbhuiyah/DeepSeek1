import React from "react";
import img from "../../public/images";
import Image from "next/image";

const Message = ({ role, content }) => {
  return (
    <div className="flex w-full max-w-3xl flex-col items-center text-sm">
      <div
        className={`mb-8 flex w-full flex-col ${role === "user" && "items-end"}`}
      >
        <div
          className={`group relative flex max-w-2xl rounded-xl py-3 ${role === "user" ? "top-2.5 -left-16" : "-bottom-6 left-9"} transition-all`}
        >
          <div className="flex items-center gap-2 opacity-70">
            {role === "user" ? (
              <>
                <Image
                  src={img.copy_icon}
                  className="w-4 cursor-pointer"
                  alt=""
                />
                <Image
                  src={img.pencil_icon}
                  className="w-4 cursor-pointer"
                  alt=""
                />
              </>
            ) : (
              <>
                <Image
                  src={img.copy_icon}
                  className="w-4 cursor-pointer"
                  alt=""
                />{" "}
                <Image
                  src={img.regenerate_icon}
                  className="w-4 cursor-pointer"
                  alt=""
                />{" "}
                <Image
                  src={img.like_icon}
                  className="w-4 cursor-pointer"
                  alt=""
                />{" "}
                <Image
                  src={img.dislike_icon}
                  className="w-4 cursor-pointer"
                  alt=""
                />{" "}
              </>
            )}
          </div>
        </div>
        {
          role === 'user' ? <span className='text-white/90'>{content}</span> : <>
          <Image src={img.logo_icon} className='size-9 p-1 border border-white/15 rounded-full' />
          <div className="space-y-4 w-full overflow-scroll">{content}</div>
          </>
        }
      </div>
    </div>
  );
};

export default Message;
