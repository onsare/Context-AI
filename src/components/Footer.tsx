import React from "react";

const footerLinks = [
  {
    title: (
      <svg
        width='19'
        height='28'
        viewBox='0 0 19 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11.43 0L18.9525 4.38806V23.6119L11.43 28V0ZM5.10547 0.779498L6.21033 1.42399L9.41018 3.29056L8.66982 4.55976L6.57483 3.33769V24.6004L8.66982 23.3783L9.41018 24.6475L6.21033 26.5141L5.10547 27.1586V25.8795V2.05859V0.779498ZM1.10486 3.56266L0 2.91817V4.19727V23.9203V25.1994L1.10486 24.5549L3.75425 23.0094L3.01389 21.7402L1.46936 22.6412V5.47636L3.01389 6.37733L3.75425 5.10813L1.10486 3.56266Z'
          fill='#151517'
        />
      </svg>
    ),
  },
  {
    title: "Features",
    links: [
      { name: "Plan", href: "#" },
      { name: "Build", href: "#" },
      { name: "Insights", href: "#" },
      { name: "Customer Requests", href: "#" },
      { name: "Linear Asks", href: "#" },
      { name: "Security", href: "#" },
      { name: "Mobile", href: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { name: "Pricing", href: "#" },
      { name: "Method", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Download", href: "#" },
      { name: "Switch", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Customers", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "README", href: "#" },
      { name: "Quality", href: "#" },
      { name: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "API", href: "#" },
      { name: "Status", href: "#" },
      { name: "Startups", href: "#" },
      { name: "Report issue", href: "#" },
      { name: "DPA", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Contact us", href: "#" },
      { name: "Community", href: "#" },
      { name: "X(Twitter)", href: "#" },
      { name: "GitHub", href: "#" },
      { name: "YouTube", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className='bg-gray-100'>
      <div className='max-w-screen-lg px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-6'>
          {footerLinks.map((section, index) => (
            <div key={index}>
              <p className='font-medium'>{section.title}</p>
              <nav className='flex flex-col mt-4 space-y-2 text-sm text-gray-500'>
                {section?.links?.map((link) => (
                  <a
                    key={link.name}
                    className='hover:opacity-75'
                    href={link.href}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <hr className='border-[#1515170F] my-4' />
        <p className=' text-xs text-gray-800'>©2025 Context.Inc</p>
      </div>
    </footer>
  );
}
