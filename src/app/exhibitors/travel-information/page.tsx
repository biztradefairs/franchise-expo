import PageBanner from "@/components/PageBanner";
import { ChevronRight } from "lucide-react";

const hotels = [
    {
        name: "HYATT PLACE New York City / Times Square",
        address: "350 W. 39th Street, New York City, NY 10018",
        image: "https://www.franchiseexpo.com/images/ife/Hyatt-Place-New-York-City-Times-Square-P013-Exterior.4x3.webp",
        button: "MAKE YOUR RESERVATION",
        link: "#",
    },
    {
        name: "EVEN Hotel New York - Times Square South",
        address: "321 West 35th Street, New York City, NY 10001",
        image: "https://www.franchiseexpo.com/images/ife/even-hotel-times-square.jpg",
        button: "MAKE RESERVATION",
        link: "#",
    },
    {
        name: "Crowne Plaza HY36 Midtown Manhattan",
        address: "320 West 36th Street, New York City, NY 10018",
        image: "https://www.franchiseexpo.com/images/ife/crowne-plaza-new-york-5519815692-2x1.jpg",
        button: "MAKE RESERVATION",
        link: "#",
    },
    {
        name: "Four Points by Sheraton Manhattan Midtown West",
        address: "444 10th Ave, New York City, NY 10001",
        image: "https://www.franchiseexpo.com/images/7565f357.jpg",
        button: "MAKE RESERVATION",
        link: "#",
    },
];

export default function TravelInformation() {
    return (
        <main className="w-full overflow-hidden bg-white">

            {/* HERO */}
            <PageBanner title="Travel Information"/>

            {/* INTRO */}
            <section className="py-[60px] pb-10 max-sm:py-[40px] max-sm:pb-[20px]">
                <div className="w-full max-w-[1440px] mx-auto px-10 max-lg:px-6 max-sm:px-4">

                    <div className="max-w-[1000px]">
                        <h2 className="font-display text-[28px] max-sm:text-[22px] leading-tight font-bold uppercase text-[#011b2e] mb-4 m-0">
                            The International Franchise Expo has partnered with the hotels below:
                        </h2>

                        <p className="font-body text-[14px] leading-relaxed text-[#555] m-0">
                            *Take note that we do NOT work with third party agency room brokers. 
                            Should you be contacted by them, please refrain from using their services to book your room.
                        </p>
                    </div>

                </div>
            </section>

            {/* HOTELS */}
            <section className="py-[30px] pb-[100px] max-sm:pb-[60px]">
                <div className="w-full max-w-[1440px] mx-auto px-10 max-lg:px-6 max-sm:px-4">

                    <div className="flex flex-col gap-16 max-sm:gap-12">
                        {hotels.map((hotel, index) => (
                            <div
                                className="grid grid-cols-2 max-lg:grid-cols-1 gap-[50px] max-lg:gap-[30px] items-center"
                                key={index}
                            >
                                {/* LEFT SIDE: Details */}
                                <div className="hotelContent flex flex-col items-start">
                                    <h3 className="font-display text-[32px] max-lg:text-[28px] max-sm:text-[24px] leading-[1.15] uppercase text-[#011b2e] mb-3.5 m-0">
                                        {hotel.name}
                                    </h3>

                                    <p className="font-body text-[15px] max-sm:text-sm leading-relaxed text-[#555] mb-6">
                                        {hotel.address}
                                    </p>

                                    <a
                                        href={hotel.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-5 h-[48px] pl-6 pr-1.5 bg-[#0067b2] rounded-full text-white no-underline font-display text-[13px] font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#004a8f]"
                                    >
                                        <span>{hotel.button}</span>

                                        <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0">
                                            <ChevronRight size={16} className="text-[#0067b2] stroke-[3]" />
                                        </span>
                                    </a>
                                </div>

                                {/* RIGHT SIDE: Photo */}
                                <div className="w-full h-[360px] max-sm:h-[240px] overflow-hidden rounded-none">
                                    <img
                                        src={hotel.image}
                                        alt={hotel.name}
                                        className="w-full h-full object-cover block"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}