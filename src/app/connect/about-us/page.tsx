// app/about-us/page.tsx
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: 'About Us | Franchise Expo',
  description: 'Bringing The Franchise World Together Since 1991',
};

const IMAGES = {
  logo: 'https://www.franchiseexpo.com/images/franchise-expo.svg',
  comexpo: 'https://www.franchiseexpo.com/images/comoexposium.webp',
  crowd: 'https://www.franchiseexpo.com/images/austin/E-zone-page/crowd-2.webp',
  betheboss: 'https://www.franchiseexpo.com/images/be-the-boss.webp',
  ifa: 'https://www.franchiseexpo.com/images/IFA_member.webp',
  supplier: 'https://www.franchiseexpo.com/images/IFA_Supplier_Forum.webp',
  canadian: 'https://www.franchiseexpo.com/images/canadian-francise-association-member.webp',
  ife: 'https://www.franchiseexpo.com/images/ife/ife-thumbnail.jpg',
  dallas: 'https://www.franchiseexpo.com/images/dallas/dallas-thumbnail.jpg',
  south: 'https://www.franchiseexpo.com/images/south/south-thumbnail.jpg',
  west: 'https://www.franchiseexpo.com/images/west/west-thumbnail.jpg',
  cincinnati: 'https://www.franchiseexpo.com/images/cincinnati/cincinnati-thumbnail.jpg',
};

export default function AboutUsPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      {/* Banner */}
      <PageBanner title='About Us'/>

      {/* Main Content */}
      <section className="py-16 max-sm:py-10">
        <div className="w-full max-w-[1440px] mx-auto px-10 max-lg:px-6 max-sm:px-4">
          
          {/* Centered Logos & Tagline */}
          <div className="flex flex-col items-center justify-center gap-6 mb-12">
            <img
              src={IMAGES.logo}
              alt="MFV Expo"
              className="h-[70px] max-sm:h-[50px] w-auto object-contain block"
            />
            <img
              src={IMAGES.comexpo}
              alt="Comexposium"
              className="h-[25px] max-sm:h-[18px] w-auto object-contain block"
            />
            
            <h2 className="font-display text-[32px] max-md:text-[26px] font-bold text-center uppercase text-[#111] leading-tight mt-6 max-w-[800px]">
              Bringing The Franchise World Together Since 1991
            </h2>
          </div>

          {/* Section 1: About MFV — content left, image right */}
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-0 mb-10 overflow-hidden border border-[#dee2e6] bg-[#f4f5f7]">
            <div className="p-12 max-md:p-8 max-sm:p-6 flex flex-col justify-center">
              <p className="font-body text-[16px] max-sm:text-sm leading-relaxed font-bold text-[#111] mb-5">
                MFV Expositions global brands have been generating qualified leads for
                franchisors, face-to-face at our premier franchise events, virtually with
                our online component and through our comprehensive franchise directories.
              </p>
              <p className="font-body text-[15px] max-sm:text-sm leading-relaxed text-[#444] mb-5">
                The Franchise Expo Series is the premier connection point for aspiring
                entrepreneurs and established brands looking to expand their footprint.
                With locations spanning major metropolitan markets across North America,
                we bring together a diverse ecosystem of franchisors, industry experts,
                and motivated investors under one roof.
              </p>
              <p className="font-body text-[15px] max-sm:text-sm leading-relaxed text-[#444] mb-5">
                Our mission is to foster economic growth by providing a centralized
                platform for discovering innovative business concepts, learning from
                experienced industry leaders, and navigating the complexities of
                franchise ownership. Whether you are looking for low-cost opportunities
                or high-growth investments, the Franchise Expo Series delivers the
                education, resources, and networking necessary to build a successful
                business future.
              </p>
              <p className="font-body text-[15px] max-sm:text-sm leading-relaxed text-[#444] mb-0">
                Join us at any of our expo locations to explore the latest trends,
                meet brand representatives face-to-face, and take the next step in
                your entrepreneurial journey.
              </p>
            </div>
            <div
              className="min-h-[440px] max-lg:min-h-[300px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${IMAGES.crowd})` }}
            />
          </div>

          {/* Section 2: BeTheBoss — image left, content right */}
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-0 mb-16 overflow-hidden border border-[#dee2e6] bg-[#f4f5f7]">
            <div
              className="min-h-[440px] max-lg:min-h-[300px] max-lg:order-last bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${IMAGES.betheboss})` }}
            />
            <div className="p-12 max-md:p-8 max-sm:p-6 flex flex-col justify-center items-start">
              <p className="font-body text-[16px] max-sm:text-sm leading-relaxed font-bold text-[#111] mb-5">
                MFV's global online franchise directory{" "}
                <a
                  href="http://www.betheboss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0067b2] no-underline font-bold hover:underline"
                >
                  BeTheBoss.com
                </a>{" "}
                uses the latest technology and search metrics to provide a
                cost-effective way to market your franchise.
              </p>
              <p className="font-body text-[15px] max-sm:text-sm leading-relaxed text-[#444] mb-5">
                BeTheBoss.com acts as a lead generating vehicle for your franchise,
                gaining tremendous online exposure for your brand. Betheboss.com
                covers major franchise markets including the United States, Canada,
                Mexico and the United Kingdom.
              </p>
              <p className="font-body text-[15px] max-sm:text-sm leading-relaxed text-[#444] mb-6">
                We know franchise development can be hard. That's why we constantly
                are looking for new ways to help you find qualified franchise prospects.
                We use data, technology, and automation to improve our lead products
                both in the US &amp; Internationally.
              </p>
              
              <a
                href="http://www.betheboss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-5 h-[48px] pl-6 pr-1.5 bg-[#0067b2] rounded-full text-white no-underline font-display text-[13px] font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#004a8f]"
              >
                <span>LEARN MORE AT BETHEBOSS.COM</span>
                <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0">
                  <ChevronRight size={16} className="text-[#0067b2] stroke-[3]" />
                </span>
              </a>
            </div>
          </div>

          {/* Proud Member */}
          <div className="mb-16 text-center">
            <h2 className="font-display text-[32px] max-sm:text-[26px] font-bold uppercase text-[#111] mb-8">
              PROUD MEMBER
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-16 max-sm:gap-8">
              <img src={IMAGES.ifa} alt="IFA member" className="h-[120px] w-auto object-contain max-sm:h-[80px]" />
              <img src={IMAGES.supplier} alt="IFA Supplier Forum" className="h-[120px] w-auto object-contain max-sm:h-[80px]" />
              <img src={IMAGES.canadian} alt="Canadian Franchise Association" className="h-[80px] w-auto object-contain max-sm:h-[50px]" />
            </div>
          </div>

          {/* Expo Cards Grid */}
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8 mb-8">
            <ExpoCard
              title="The International Franchise Expo (IFE)"
              image={IMAGES.ife}
              description="The largest franchise exhibition in the USA. IFE runs every May in New York bringing together hundreds of the franchise industry's hottest concepts and thousands of the most qualified prospects from across the United States and countries all around the world. For domestic or international expansion, selling single units, area developments or master franchises and covering franchising basics for those less familiar with the industry – this is the industry's one stop franchise event."
              link="http://www.franchiseexpo.com/ife"
              linkText="www.franchiseexpo.com/ife"
            />
            <ExpoCard
              title="The Franchise Expo DALLAS"
              image={IMAGES.dallas}
              description="Franchise Expo Dallas brings together entrepreneurs, investors, and franchise brands for two days of learning, discovery, and connection. Explore more than 125 franchise opportunities across a variety of industries and meet the teams behind the concepts. Attend educational sessions and expert-led workshops designed to answer your questions and help you learn about franchise ownership. Gain practical insight into what it takes to start and operate a successful business, connect with advisors and experienced franchisors, and leave with the knowledge to move forward on your path to franchise ownership."
              link="http://www.franchiseexpo.com/dallas"
              linkText="www.franchiseexpo.com/dallas"
            />
          </div>

          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8 mb-8">
            <ExpoCard
              title="Franchise Expo South"
              image={IMAGES.south}
              description="Franchise Expo South enables attendees to learn about the Franchise process and meet with brands interested in developing in the Southeast Region. Attend our conference program which is filled with 25+ educational sessions to learn everything from the latest trends to the basics on franchising. Network with the industry's leading brands, and be prepared to engage with the most qualified audience from the region and beyond!"
              link="http://www.franchiseexpo.com/south"
              linkText="www.franchiseexpo.com/south"
            />
            <ExpoCard
              title="Franchise Expo West"
              image={IMAGES.west}
              description="Franchise Expo West is the premier franchise event in the growing West Coast market. It provides the perfect opportunity for hundreds of franchise concepts, representing every industry and virtually every investment level, to meet face-to-face with the region's most qualified prospects."
              link="http://www.franchiseexpo.com/west"
              linkText="www.franchiseexpo.com/west"
            />
          </div>

          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8">
            <ExpoCard
              title="Franchise Expo Cincinnati"
              image={IMAGES.cincinnati}
              description="Franchise Expo Cincinnati brings together entrepreneurs and prospective business owners with over 125 exhibitors. Learn all you need to know about how you can be a successful franchise owner and find out about the many types of franchises available. Meet face-to-face with franchise brands and industry experts and attend our franchise seminars providing you all the resources you need for franchise ownership – all under one roof."
              link="http://www.franchiseexpo.com/cincinnati"
              linkText="www.franchiseexpo.com/cincinnati"
            />
            <div className="hidden lg:block"></div>
          </div>

        </div>
      </section>
    </main>
  );
}

function ExpoCard({
  title,
  image,
  description,
  link,
  linkText,
}: {
  title: string;
  image: string;
  description: string;
  link: string;
  linkText: string;
}) {
  return (
    <div className="bg-[#004a8f] rounded-none overflow-hidden text-white flex flex-col group border border-[#dee2e6]">
      {/* Light grey logo area */}
      <div className="h-[200px] max-sm:h-[150px] flex items-center justify-center bg-[#f8f9fa] p-8">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Dark blue details area */}
      <div className="p-8 max-sm:p-5 flex-1 flex flex-col gap-4">
        <h3 className="font-display text-[22px] max-sm:text-[18px] font-bold text-white uppercase m-0 leading-tight">
          {title}
        </h3>
        
        <p className="font-body text-[14px] leading-relaxed text-white/90 m-0 flex-1">
          {description}
        </p>
        
        <p className="font-body text-[14px] leading-normal m-0 text-white/80">
          For more information visit the show website{" "}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline font-semibold hover:text-white/80 transition-colors duration-200"
          >
            {linkText}
          </a>
        </p>
      </div>
    </div>
  );
}