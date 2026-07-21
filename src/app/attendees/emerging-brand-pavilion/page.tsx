import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Emerging Technology Pavilion",
  description:
    "One of the most dynamic zones of the exhibition, showcasing next-generation metrology, quality control, testing, calibration, inspection, and precision measurement technologies from emerging innovators and technology providers.",
};

const features = [
  {
    heading: "Discover Next-Generation Technologies:",
    body: "Be among the first to explore innovative measurement, inspection, calibration, machine vision, and automation solutions from emerging technology providers.",
  },
  {
    heading: "Meet Industry Innovators:",
    body: "Connect directly with founders, engineers, product specialists, and technology experts to gain insights into the latest developments and future trends.",
  },
  {
    heading: "Experience Live Demonstrations:",
    body: "See cutting-edge equipment and software in action through live product demonstrations and hands-on technology showcases.",
  },
  {
    heading: "Stay Ahead of Industry Trends:",
    body: "Explore smart manufacturing, Industry 4.0, AI-powered inspection, digital metrology, and advanced quality solutions that can improve productivity, accuracy, and operational excellence.",
  },
];

export default function EmergingBrandPavilionPage() {
  return (
    <>
      <PageBanner
        title="Emerging Brand Pavilion"
        subtitle="One of the busiest aisles of the show floor — dedicated to up-and-coming franchises."
      />

      <section className="py-10 pb-20 bg-[#f2f2f2]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-[52%_48%] max-lg:grid-cols-1 gap-5 items-stretch">

            {/* LEFT CONTENT */}
            <div className="bg-[#00539f] p-[30px] text-white flex flex-col justify-center min-h-[670px] max-lg:min-h-0">
              <h2 className="font-display text-2xl leading-[1.05] uppercase text-white mb-[30px] max-lg:text-base">
                THE EMERGING TECHNOLOGY PAVILION.
              </h2>

              <p className="text-white text-base leading-relaxed mb-10 max-lg:text-base">
                One of the most dynamic zones of the exhibition, the Emerging Technology Pavilion showcases the latest innovations in metrology, quality control, testing, calibration, inspection, and precision engineering. Discover breakthrough technologies that are shaping the future of manufacturing.
              </p>

              <ul className="list-none m-0 p-0">
                {features.map((item) => (
                  <li key={item.heading} className="relative pl-6 mb-6 text-white leading-normal text-base font-semibold">
                    <span className="absolute left-0 -top-[3px] text-[#3cd8e8] text-[28px] leading-none">•</span>
                    <strong>{item.heading}:</strong> {item.body}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="min-h-[670px] max-lg:min-h-[450px] max-md:min-h-[320px] w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://www.franchiseexpo.com/images/west/Attendees/Attendee_Info/Emerging_Pavilion.webp')",
              }}
            />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-[#00539f] p-[40px_32px_50px] max-md:p-[40px_25px]">
            <h2 className="font-display text-[3rem] leading-none uppercase text-white mb-[25px]"></h2>

            <p className="text-white text-[1.15rem] font-semibold leading-[1.7] mb-[30px] max-w-[1200px]">
              If you are an emerging technology company, startup, or solution provider specializing in metrology, quality control, testing, calibration, inspection, machine vision, or precision engineering, and would like to showcase your innovations in the Emerging Technology Pavilion, we'd love to hear from you.
            </p>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[#ff6b00] text-[1.8rem] font-bold font-display">Padmanabham R</span>
              <span className="text-white text-[1.8rem] font-bold font-display">+91 91483 19993</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}