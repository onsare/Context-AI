"use client";

import Image from "next/image";

const InfiniteSlider = () => {
  const images = [
    { src: "/brands/cbre.png" },
    { src: "/brands/notion.png" },
    { src: "/brands/discord.png" },
    { src: "/brands/barrys.png" },
    { src: "/brands/eventbrite.png" },
    { src: "/brands/andril.png" },
    { src: "/brands/shopify.png" },
    { src: "/brands/caraway.png" },
    { src: "/brands/zola.png" },
    { src: "/brands/kumon.png" },
    // { src: "/brands/818.png" },
  ];

  return (
    <div className=' flex items-center justify-center bg-white '>
      <div className='w-[500%] lg:w-[200%] h-30  overflow-hidden relative max-w-[1300px] mx-auto z-10 bg-white'>
        <div className='w-[500%] lg:w-[200%] flex items-center h-30 justify-around absolute left-0  gap-0 animate'>
          {images.map((img, idx) => {
            return (
              <div key={idx} className={`flex justify-center items-start  `}>
                <Image width={80} height={20} src={img.src} alt='slider' />
              </div>
            );
          })}
          {images.map((img, idx) => {
            return (
              <div key={idx} className={`flex justify-center items-start   `}>
                <Image width={80} height={20} src={img.src} alt='slider' />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
