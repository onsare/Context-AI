"use client";
import Image from "next/image";

const stats = [
  {
    number: "60%",
    title: "Reduction in Research Compilation Time",
    description:
      "Automate literature reviews and data organisation to accelerate academic progress.",
  },
  {
    number: "500K+",
    title: "Research Papers Enhanced",
    description:
      "Trusted by scholars and academics worldwide for AI-powered research assistance.",
  },
  {
    number: "80%",
    title: "Less Time Spent on Manual Data Analysis",
    description:
      "Automate number crunching and generate visual insights with AI.",
  },
  {
    number: "4x",
    title: "Faster Paper Drafting",
    description:
      "AI-assisted writing tools help structure arguments and citations efficiently.",
  },
];

export const TitleHeader = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => (
  <div className='flex flex-col items-center justify-center text-center mb-10 px-20 2xl:px-68'>
    <h1 className='font-medium text-[44px] leading-[48px] text-[rgba(21,21,23,1)]'>
      {title}
    </h1>
    <p className='w-full max-w-[500px] font-normal text-[17px] text-[rgba(21,21,23,0.64)] leading-[27px] mt-4 '>
      {subTitle}
    </p>
  </div>
);

export const StatsSection = () => (
  <section className='grid grid-cols-2 lg:flex justify-between items-left gap-5 px-5  mt-10 '>
    {stats.map((item) => (
      <div key={item.number} className=' border-r border-[#1515170F]'>
        <div className='h-[160px]'>
          <h1 className='font-medium text-[44px] leading-[52px] tracking-[-1%]'>
            {item.number}
          </h1>

          <p className='text-[14px] leading-[24px] font-[450] text-[rgba(21,21,23,0.64)]'>
            {item.title}
          </p>
        </div>
        <p className='text-[14px] leading-[24px] font-[450] text-[rgba(21,21,23,0.64)]'>
          {item.description}
        </p>
      </div>
    ))}
  </section>
);

export default function Features() {
  return (
    <section className='w-full mx-auto 2xl:max-w-[1200px] xl:max-w-[1024px]  mt-10'>
      <TitleHeader
        title='Enterprise Grade Security, Built for Trust.'
        subTitle='From end-to-end encryption to zero-trust cloud infrastructure, your
          data is protected at every layer.'
      />

      <div className='flex gap-5'>
        <div className='flex-1 bg-[#f1f3f5] rounded-lg p-5'>
          <div className='flex  flex-col-reverse items-center justify-center'>
            <div>
              <h2 className='text-[rgba(0,67,89,1)] leading-[31px] font-medium text-[21px]'>
                Automated literature reviews.
              </h2>
              <p className='text-[rgba(6,30,38,0.64)] leading-[24px] font-normal text-[14px]'>
                Leverage AI to scan, summarize and cite relevant research papers
                in minutes, cutting down the time spent on literature review.
              </p>
            </div>
            <div>
              <Image
                src='/static/frames/frame-1.png'
                alt='Frame 1'
                width={332}
                height={229}
                priority
              />
            </div>
          </div>
        </div>

        <div className='flex-2 bg-[#f1f3f5] rounded-lg p-5'>
          <div className='w-full flex  items-center justify-between'>
            <div className='w-1/2'>
              <h2 className='text-[rgba(0,67,89,1)] leading-[31px] font-medium text-[21px]'>
                AI assisted academic writing.
              </h2>
              <p className='text-[rgba(6,30,38,0.64)] leading-[24px] font-normal text-[14px]'>
                Create well structured research papers, grant proposals, and
                reports with AI-powered drafting and citation management
              </p>
            </div>
            <div className='w-1/2'>
              <Image
                src='/static/frames/frame-2.png'
                alt='Frame'
                width={331}
                height={380}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-row-reverse gap-5 mt-5'>
        <div className='flex-1 bg-[#f1f3f5] rounded-tl-lg rounded-tr-lg p-5'>
          <div className=' flex flex-col-reverse items-center justify-center '>
            <div>
              <h2 className='text-[rgba(0,67,89,1)] leading-[31px] font-medium text-[21px]'>
                Automated literature reviews.
              </h2>
              <p className='text-[rgba(6,30,38,0.64)] leading-[24px] font-normal text-[14px]'>
                Leverage AI to scan, summarize and cite relevant research papers
                in minutes, cutting down the time spent on literature review.
              </p>
            </div>
            <div>
              <Image
                src='/static/frames/frame-4.png'
                alt='Frame'
                width={331}
                height={200}
                priority
              />
            </div>
          </div>
        </div>

        <div className='flex-2 bg-[#f1f3f5] rounded-tl-lg rounded-tr-lg p-5'>
          <div className='w-full flex items-center justify-center '>
            <div className='w-1/2'>
              <h2 className='text-[rgba(0,67,89,1)] leading-[31px] font-medium text-[21px]'>
                AI assisted academic writing.
              </h2>
              <p className='text-[rgba(6,30,38,0.64)] leading-[24px] font-normal text-[14px]'>
                Create well structured research papers, grant proposals, and
                reports with AI-powered drafting and citation management
              </p>
            </div>
            <div className='w-1/2'>
              <Image
                src='/static/frames/frame-3.png'
                alt='Frame'
                width={331}
                height={380}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[linear-gradient(180deg,_#FFFFFF_0%,_#FAFAFA_100%)] lg:h-[635px] border-l border-r border-[#1515170F] pt-20'>
        <TitleHeader
          title='Smarter, Faster, Safer Research.'
          subTitle='From data analysis to paper drafting, get more done with secure, AI-enhanced workflows.'
        />

        <StatsSection />
      </div>

      <div className='bg-[linear-gradient(180deg,_#FFFFFF_0%,_#FAFAFA_100%)]  border-l border-r border-[#1515170F] pt-20'>
        <TitleHeader
          title='Streamlined for you.'
          subTitle='Delightfully crafted to help you stay in flow and focus on what you care about - leveraging your data.'
        />

        <div className='flex w-full justify-between items-center text-center  border-t border-b border-[#1515170F]'>
          <div className='flex flex-col items-center p-5 border-r border-[#1515170F]'>
            <Image
              src='/static/frames/frame-5.png'
              alt='Frame'
              width={483}
              height={380}
              priority
            />
            <div className='max-w-[350px] '>
              <div className='text-[rgba(0,67,89,1)] leading-[31px] font-medium text-[21px] flex gap-2 items-center '>
                <Image
                  src='/static/icon-wand.svg'
                  alt='Icon'
                  width={16}
                  height={16}
                  priority
                />
                <h2>Automated research assistance </h2>
              </div>
              <p className='text-[rgba(6,30,38,0.64)] leading-[24px] font-normal text-[14px]'>
                Spend less time on citations, literature reviews, and formatting
                with AI-powered tools.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-cente p-5'>
            <Image
              src='/static/frames/frame-6.png'
              alt='Frame'
              width={381}
              height={380}
              priority
            />
            <div className='max-w-[306px]'>
              <div className='text-[rgba(0,67,89,1)] leading-[31px] font-medium text-[21px] flex items-center gap-2 '>
                <Image
                  src='/static/icon-insight.svg'
                  alt='Frame'
                  width={16}
                  height={16}
                  priority
                />
                <h2>Faster data driven insights</h2>
              </div>
              <p className='text-[rgba(6,30,38,0.64)] leading-[24px] font-normal text-[14px]'>
                Analyze and visualize data with AI, reducing manual effort.
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center text-center  border-t  border-[#1515170F] pb-10'>
          <div className='max-w-[372px] flex  flex-col text-left p-10 '>
            <div className='text-[rgba(0,67,89,1)] leading-[31px] font-medium text-[21px] flex items-center gap-2 '>
              <Image
                src='/icon-people.svg'
                alt='Frame'
                width={16}
                height={16}
                priority
              />
              <h2>Seamless collaboration.</h2>
            </div>
            <p className='text-[rgba(6,30,38,0.64)] leading-[24px] font-normal text-[14px]'>
              Work with co-authors and research assistants in real-time from
              anywhere.
            </p>
          </div>

          <div>
            <Image
              src='/static/frames/frame-7.png'
              alt='Frame'
              width={532}
              height={522}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
