"use client";
import Image from "next/image";
import { Button } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className='w-full bg-[#032739] h-[calc(100vh-85px)] bg-gradient-to-b from-[#022638] to-[#020e15]'>
      <div className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
        <div className='w-full max-w-[1024px] mx-auto text-center relative'>
          <Image
            src='/hero-bg.svg'
            alt='Example query'
            width={900}
            height={80}
            priority
            className='relative bottom-[50px] left-0 w-full h-full object-cover'
          />
          <div className='flex flex-col items-center justify-center space-y-4 relative bottom-[100px] lg:bottom-[300px] z-10 '>
            <h1 className='text-[rgba(255,255,255,1)]  font-normal text-[44px]  lggit s:text-[72px]  leading-[42px] lg:leading-[76px] tracking-[-2%] '>
              AI-Powered research and academic writing made easy.{" "}
            </h1>
            <p className=' text-[rgba(255,255,255,0.64)]  font-normal text-[17px] lg:text-[14px]  lg:leading-[27px] mt-4 max-w-[639px]'>
              Streamline literature reviews, automate data analysis, and
              generate structured reports with AI. Spend more time on discovery,
              less on tedious tasks.
            </p>
            <div className='flex gap-2'>
              <Button className='rounded bg-transparent border border-white py-2 px-4 text-sm text-white data-[hover]:bg-white-500 data-[hover]:data-[active]:bg-white-700'>
                Log in
              </Button>
              <Button className='flex items-center gap-2 rounded bg-white py-2 px-4 text-sm text-black data-[hover]:bg-white-500 data-[hover]:data-[active]:bg-white-700'>
                Book a demo
                <span aria-hidden='true'>
                  <ChevronRightIcon className='h-4 w-4' />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
