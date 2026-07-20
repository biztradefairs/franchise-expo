import type { Metadata } from 'next';
import Link from '@/components/UTMLink';

import Hero from '@/components/Hero';
import IntroSlider from '@/components/IntroSlider';
import { Users, Mic, Clock3 } from 'lucide-react';
import SponsorsSection from '@/components/sponsor';
import TestimonialSlider from '@/components/TestimonialSlider';
import SupportedBy from '@/components/SupportedBy';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'FranchiseExpo – New York 2026',
  description:
    "Find the right franchise for you at the world's leading franchise event. May 29–30, 2026 at the Javits Center, New York City.",
};

/* ─── Static data ─── */
const cards = [
  {
    title: 'Register to Attend',
    description:
      'Register now to attend the International Franchise Expo and receive updated show information.',
    cta: 'Register to Attend',
    href: '/register',
    image: 'https://www.franchiseexpo.com/images/west/Home/REGISTER-TO-ATTEND.webp',
  },
  {
    title: 'Exhibiting & Sponsoring',
    description:
      'Looking to sponsor or exhibit at the Franchise Expo? Click below to get more information on both opportunities.',
    cta: 'Learn More',
    href: '/exhibitors/why-exhibit',
    image: 'https://www.franchiseexpo.com/images/west/Home/EXHIBITING-SPONSORING.webp',
  },
  {
    title: 'Speaking Opportunities',
    description:
      "Looking to speak at the Franchise Expo? We'd love to have you! Find out more below.",
    cta: 'Learn More',
    href: '/attendees/speaker-application-form',
    image: 'https://www.franchiseexpo.com/images/west/Home/SPEAKING-OPPORTUNITIES.webp',
  },
];

const newsItems = [
  {
    date: '03 March 2026',
    title: 'The Top Advantages of Franchising Your Business',
    href: '/blog-article/the-top-advantages-of-franchising-your-business',
    image: 'https://www.franchiseexpo.com/images/A_businessperson_holds_a_magnifying_glass_over_a_city_finding_the_advantages_of_franchising_a_business.webp',
  },
  {
    date: '03 March 2026',
    title: 'Top Franchise Opportunities: A Complete Guide',
    href: '/blog-article/top-franchise-opportunities-a-complete-guide',
    image: 'https://www.franchiseexpo.com/images/A_laptop_with_growth_charts_on_a_desk_for_researching_top_franchise_opportunities.webp',
  },
  {
    date: '20 February 2026',
    title: "Can I Get a Loan to Buy a Franchise? Yes, Here's How",
    href: '/blog-article/can-i-get-a-loan-to-buy-a-franchise',
    image: 'https://www.franchiseexpo.com/images/can-i-get-a-loan-to-buy-a-franchise-yes-heres-how-927431.png',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <Hero />

      {/* ── Stats Bar ── */}
<section className="w-full bg-[#efefef] py-[34px] max-lg:py-7">
  <Container className="grid grid-cols-3 max-lg:grid-cols-1 items-center gap-10 max-sm:gap-6">

    {/* Exhibitors */}
    <div className="flex items-center justify-center max-lg:justify-start gap-6">
      <div className="w-16 h-16 rounded-full bg-[#9fe7f2] flex items-center justify-center text-[#25b8d3] shrink-0">
        <Users size={30} />
      </div>

      <div className="flex items-center gap-4">
        <h3 className="font-display text-[72px] max-sm:text-[52px] max-[375px]:text-[44px] leading-none font-bold text-[#111] whitespace-nowrap">
          150+
        </h3>

        <span className="font-display text-[30px] max-sm:text-[22px] max-[375px]:text-[18px] leading-[0.9] font-light uppercase text-[#222]">
          EXHIBITORS
        </span>
      </div>
    </div>

    {/* Workshops */}
    <div className="flex items-center justify-center max-lg:justify-start gap-6">
      <div className="w-16 h-16 rounded-full bg-[#9fe7f2] flex items-center justify-center text-[#25b8d3] shrink-0">
        <Mic size={30} />
      </div>

      <div className="flex items-center gap-4">
        <h3 className="font-display text-[72px] max-sm:text-[52px] max-[375px]:text-[44px] leading-none font-bold text-[#111] whitespace-nowrap">
          40+
        </h3>

        <span className="font-display text-[30px] max-sm:text-[22px] max-[375px]:text-[18px] leading-[0.9] font-light uppercase text-[#222]">
          TECHNICAL
          <br />
          SESSIONS
        </span>
      </div>
    </div>

    {/* Days */}
    <div className="flex items-center justify-center max-lg:justify-start gap-6">
      <div className="w-16 h-16 rounded-full bg-[#9fe7f2] flex items-center justify-center text-[#25b8d3] shrink-0">
        <Clock3 size={30} />
      </div>

      <div className="flex items-center gap-4">
        <h3 className="font-display text-[72px] max-sm:text-[52px] max-[375px]:text-[44px] leading-none font-bold text-[#111] whitespace-nowrap">
          3
        </h3>

        <span className="font-display text-[30px] max-sm:text-[22px] max-[375px]:text-[18px] leading-[0.9] font-light uppercase text-[#222]">
          DAYS
        </span>
      </div>
    </div>

  </Container>
</section>

      {/* ── Intro + Slider ── */}
      <section className="bg-[#f5f5f5] py-[70px] max-xl:py-[60px] max-lg:py-[50px] max-sm:py-10">
        <Container className="grid grid-cols-[52%_48%] max-lg:grid-cols-1 gap-12 max-lg:gap-9 items-center">

          {/* LEFT */}
          <div className="w-full">
            <h2 className="font-display text-[clamp(36px,4vw,60px)] max-lg:text-[44px] max-sm:text-[34px] leading-[0.95] font-bold uppercase text-[#111111] m-0 mb-7 -tracking-[1px]">
              DISCOVER THE FUTURE<br />
              OF METROLOGY,<br />
              QUALITY & INSPECTION
            </h2>

 <p=<BOLD>India's Premier Exhibition for Precision Measurement & Quality Engineering</BOLD> className="font-body text-[14.5px] max-sm:text-sm leading-[1.75] text-[#222222] mb-5 font-semibold">
             </p>
            <p className="font-body text-[14.5px] max-sm:text-sm leading-[1.75] text-[#222222] mb-5 font-semibold">
              INDIAMET is India's dedicated B2B exhibition for metrology, quality control, inspection, calibration, testing, machine vision, and precision engineering technologies. Bringing together leading manufacturers, technology providers, solution experts, and industrial professionals, the expo serves as the ideal platform to discover innovations, build strategic partnerships, and explore the latest advancements driving smart manufacturing.
            </p>

            <p className="font-body text-[14.5px] max-sm:text-sm leading-[1.75] text-[#222222] mb-5 font-semibold">
              Meet leading brands, experience live product demonstrations, attend expert-led technical sessions, and connect with decision-makers from automotive, aerospace, electronics, medical devices, machine tools, defence, energy, and advanced manufacturing industries.
            </p>

            <p className="font-body text-[14.5px] max-sm:text-sm leading-[1.75] text-[#222222] mb-5 font-semibold">
              Register today to connect with the future of precision manufacturing at INDIAMET 2027.
            </p>
          </div>

          {/* RIGHT — slider */}
          <IntroSlider />

        </Container>
      </section>

      {/* ── 3-up Feature Cards ── */}
      <section className="bg-[#ffffff] pt-16 pb-32">
  <Container className="grid grid-cols-3 max-lg:grid-cols-1 gap-12 max-lg:gap-5"> 
      {cards.map((card) => ( 
        <div key={card.title} className="bg-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-transform duration-250 ease-out flex flex-col h-full hover:-translate-y-2 group"> 
          <div className="w-full h-[280px] max-lg:h-[220px] bg-cover bg-center shrink-0" style={{ backgroundImage: `url('${card.image}')` }} /> 
          
          <div className="p-9 max-lg:p-[24px_22px_22px] flex flex-col flex-1"> 
            <h3 className="font-display text-[28px] max-lg:text-[22px] leading-tight uppercase text-[#111111] mb-5 -tracking-[0.5px]">{card.title}</h3> 
            
            <p className="font-body text-[15px] max-lg:text-[12px] leading-relaxed text-[#111111] mb-8 font-medium flex-1">{card.description}</p> 
            
            <Link href={card.href} className="inline-flex items-center justify-between h-[56px] pl-6 pr-1.5 rounded-full bg-[#005eb8] text-white no-underline font-display text-[20px] uppercase tracking-wider self-start gap-6 transition-all duration-300 ease-in-out min-w-[240px]" > 
              <span className="whitespace-nowrap"> {card.cta} </span> 
              <div className="w-[44px] h-[44px] rounded-full bg-[#ebebeb] flex items-center justify-center transition-colors duration-300 group-hover:bg-white shrink-0"> 
                <svg className="w-[45%] h-[45%] stroke-[#121c4e] stroke-[3.5] fill-none" viewBox="0 0 24 24"> 
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /> 
                </svg> 
              </div> 
            </Link> 
          </div> 
        </div> 
      ))} 
  </Container>
</section>



      {/* ── Supported By ── */}
      <SupportedBy />

      {/* ── Testimonials ── */}
      <TestimonialSlider />
        
      {/* ── News ── */}
      <section className="bg-white py-[60px] pb-[80px] max-lg:py-10 max-lg:pb-[50px] max-sm:py-[30px] max-sm:pb-10">
        <Container>

          <div className="flex items-center justify-between mb-10 max-lg:flex-col max-lg:items-start max-lg:gap-[18px] max-lg:mb-[28px]">
            <h2 className="font-display text-[clamp(2rem,3vw,3rem)] max-lg:text-[2.2rem] max-sm:text-[1.8rem] leading-none font-bold uppercase text-[#111111] m-0">NEWS &amp; BLOG</h2>
            <Link href="/resources/blog" className="group relative inline-flex items-center bg-[#005eb8] text-white no-underline font-display text-[0.95rem] max-sm:text-[0.85rem] font-medium uppercase tracking-wider transition-colors duration-200 shrink-0 rounded-[999px] h-[50px] pl-[26px] pr-[62px] max-sm:h-[44px] max-sm:pl-5 max-sm:pr-[54px] hover:bg-[#004f99]">
              ALL NEWS
              <span className="absolute right-[5px] top-1/2 -translate-y-1/2 rounded-full bg-[#d9d9d9] flex items-center justify-center text-[#1d2357] font-semibold border-2 border-[#1d2357] leading-none transition-all duration-200 group-hover:bg-white group-hover:scale-[1.04] w-10 h-10 text-[1.5rem] max-sm:w-[34px] max-sm:h-[34px] max-sm:text-[1.3rem]">›</span>
            </Link>
          </div>

          <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-7 max-lg:gap-5">
            {newsItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-white no-underline overflow-hidden flex flex-col transition-transform duration-250 ease-out shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:-translate-y-1"
              >
                <div
                  className="w-full h-[220px] max-lg:h-[200px] max-sm:h-[180px] bg-cover bg-center shrink-0"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="p-[18px] px-[22px] pb-[22px] max-sm:py-3.5 max-sm:px-4 max-sm:pb-[18px] flex-1">
                  <p className="font-display text-[0.85rem] max-sm:text-[0.75rem] uppercase text-[#005eb8] mb-2.5">{item.date}</p>
                  <h3 className="font-display text-[1.4rem] max-sm:text-[1.15rem] leading-[1.2] font-bold uppercase text-[#111111] m-0">{item.title}</h3>
                </div>
                <div className="h-10 max-sm:h-9 bg-[#005eb8] flex items-center justify-center font-display text-[0.85rem] max-sm:text-[0.75rem] font-medium uppercase text-white tracking-widest transition-colors duration-200 shrink-0 group-hover:bg-[#004f99]">READ MORE</div>
              </Link>
            ))}
          </div>

        </Container>
      </section>

      {/* ── Sponsors ── */}
      <SponsorsSection />
    </>
  );
}