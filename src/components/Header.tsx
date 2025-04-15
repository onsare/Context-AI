"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogPanel, Button } from "@headlessui/react";

import {
  Bars3Icon,
  XMarkIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const menuList = [
  { name: "About", href: "#" },
  { name: "Features", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Security", href: "#" },
  { name: "Pricing", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='w-full bg-[#032739] z-50'>
      <nav
        aria-label='Global'
        className='mx-auto flex 2xl:max-w-[1920px] xl:max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Context Inc</span>
            <Image
              src='/logo.svg'
              alt='Context logo'
              width={120}
              height={30}
              priority
              className='w-[80px] lg:w-full'
            />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='h-6 w-6' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {menuList.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-sm/6 font-medium text-[rgba(255,255,255,0.9)] hover:text-gray-300 leading-6'
              style={{
                color: item.name === "Security" ? "rgba(255,255,255,0.48)" : "",
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end gap-2'>
          <Button className='rounded bg-transparent border border-white py-2 px-4 text-sm text-white data-[hover]:bg-white/10 data-[hover]:data-[active]:bg-white/20'>
            Log in
          </Button>
          <Button className='flex items-center gap-2 rounded bg-white py-2 px-4 text-sm text-black data-[hover]:bg-gray-100 data-[hover]:data-[active]:bg-gray-200'>
            Book a demo
            <span aria-hidden='true'>
              <ChevronRightIcon className='h-4 w-4' />
            </span>
          </Button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Context Inc</span>
              <Image
                src='/logo.svg'
                alt='Context logo'
                width={120}
                height={30}
                priority
              />
            </Link>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='h-6 w-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {menuList.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='py-6'>
                <Link
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50'
                >
                  Log in
                </Link>
                <Link
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50'
                >
                  Book a demo
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
