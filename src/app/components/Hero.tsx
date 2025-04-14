"use client";

import { Button } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className='w-full bg-[#032739] h-[calc(100vh-100px)] bg-gradient-to-b from-[#022638] to-[#020e15]'>
      <div className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
        <div className='w-full max-w-[1024px] mx-auto text-center flex flex-col items-center justify-center space-y-4'>
          <h1 className='text-white font-normal text-[72px] leading-[76px]'>
            AI-Powered research and academic writing made easy.{" "}
          </h1>
          <p className=' text-white font-normal text-[20px] leading-[30px] mt-4 '>
            Streamline literature reviews, automate data analysis, and generate
            structured reports with AI. Spend more time on discovery, less on
            tedious tasks.
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
    </section>
  );
}
