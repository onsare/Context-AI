"use client";

import { Button } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function CallToAction() {
  return (
    <section className='w-full mx-auto my-20   2xl:max-w-[1250px] lg:max-w-[1250px]  bg-[linear-gradient(90deg,_#004359_0%,_#063240_100%)] rounded-lg'>
      <div className='mx-auto flex max-w-7xl items-center justify-between py-6 lg:py-14 lg:px-8'>
        <div className='w-full max-w-[453px] mx-auto text-center flex flex-col items-center justify-center space-y-4'>
          <h1 className='text-[rgba(255,255,255,1)] font-bold text-[30px] lg:text-[44px] leading-[48px] tracking-[-1%]'>
            Works Seamlessly with Your Consulting Stack.
          </h1>
          <p className=' text-[rgba(255,255,255,0.64)] font-normal text-[17px] lg:leading-[27px] '>
            Integrate with the tools you already use to enhance your consulting
            workflow.
          </p>
          <div className='flex gap-2'>
            <Button className='flex items-center gap-2 rounded bg-[rgba(255,255,255,1)] py-2 px-4 text-sm text-[rgba(0,67,89,1)] font-semibold data-[hover]:bg-white-500 data-[hover]:data-[active]:bg-white-700'>
              View all Integrations
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
