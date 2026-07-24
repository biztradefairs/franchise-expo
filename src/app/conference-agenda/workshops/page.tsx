import PageBanner from "@/components/PageBanner";
import {
    Minimize2,
    FileText,
    TrendingUp,
    Info,
    LineChart,
    Megaphone,
    Handshake,
    Lightbulb,
} from "lucide-react";

const buyingTopics = [
    {
        title: "Focus On You",
        points: [
            "Do you plan to work alone or with others?",
            "How do you want to spend the next 10, 20 or more years of your life?",
        ],
        icon: <Minimize2 size={32} className="text-[#0067b2]" />,
    },
    {
        title: "The Disclosure Document",
        points: ["Includes 21 Items"],
        icon: <FileText size={32} className="text-[#0067b2]" />,
    },
    {
        title: "How much money can I make?",
        points: ["Fees, bargains, is it justifiable?"],
        icon: <TrendingUp size={32} className="text-[#0067b2]" />,
    },
    {
        title: "Where and how to ask for help?",
        points: ["Consult your advisors with caution"],
        icon: <Info size={32} className="text-[#0067b2]" />,
    },
];

const businessTopics = [
    {
        title: "The Decision to Franchise",
        points: [
            "How Franchising Works",
            "Alternatives",
            "Quality Control",
            "Legal Aspects of Franchising",
        ],
        icon: <LineChart size={32} className="text-[#0067b2]" />,
    },
    {
        title: "Marketing Your Franchise",
        points: [
            "Start locally, then regionally",
            "Don't expand faster than your support capability",
        ],
        icon: <Megaphone size={32} className="text-[#0067b2]" />,
    },
    {
        title: "Selling Your Franchise",
        points: [
            "Unique process unlike any other sales",
            "Predictability",
        ],
        icon: <Handshake size={32} className="text-[#0067b2]" />,
    },
    {
        title: "Creating a Successful Franchise Strategy",
        points: [
            "Structural Decisions",
            "Financial",
            "Organizational Development",
        ],
        icon: <Lightbulb size={32} className="text-[#0067b2]" />,
    },
];

export default function Workshops() {
    return (
        <main className="w-full overflow-hidden bg-white">

            {/* HERO */}
            <PageBanner title="Workshops" />

            {/* INTRO */}
            <section className="py-[80px] max-md:py-[50px] px-0">
                <div className="w-full max-w-[1440px] mx-auto px-10 max-lg:px-6 max-sm:px-4">

                    <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[60px] max-lg:gap-10 items-center">

                        <div className="flex flex-col gap-8 max-sm:gap-6">
                            <h2 className="font-display text-[40px] max-md:text-[32px] leading-tight text-[#05264A] mb-2 uppercase font-bold">
                                Join Us For Our Workshops!
                            </h2>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-[17px] text-[#05264A] font-bold m-0 font-body">
                                    A To Z's Of Buying A Franchise
                                </h3>
                                <p className="text-[15px] leading-relaxed text-[#555] m-0 font-body">
                                    If you're looking for no-nonsense, cut-to-the-quick, how to evaluate
                                    franchises so that I can buy one that's right for me . . . this is the workshop you need. 
                                    This is the perfect workshop for people who are just getting started with their research, 
                                    as well as those who are close to making a decision to buy a franchise.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-[17px] text-[#05264A] font-bold m-0 font-body">
                                    Franchise Your Business
                                </h3>
                                <p className="text-[15px] leading-relaxed text-[#555] m-0 font-body">
                                    This workshop is ideal for business owners interested in franchising or
                                    those trying to determine if franchising is a legitimate growth option.
                                </p>
                                <span className="text-[14px] text-[#6c757d] italic font-medium mt-1 font-body">
                                    * additional workshop fee required
                                </span>
                            </div>
                        </div>

                        {/* Right Column Photo */}
                        <div className="w-full h-[440px] max-lg:h-[360px] max-sm:h-[240px] overflow-hidden rounded-none">
                            <img
                                src="https://media.istockphoto.com/id/1956818527/photo/crowd-of-business-people-having-a-seminar-in-board-room.jpg?s=612x612&w=0&k=20&c=bazpLXOSPCPSy_3Gtvq4Sq-SygVi11KqhHmLgCdSAAg="
                                alt="Workshop presentation"
                                className="w-full h-full object-cover block"
                            />
                        </div>

                    </div>

                </div>
            </section>

            {/* BUYING TOPICS */}
            <section className="py-12 pb-20">
                <div className="w-full max-w-[1440px] mx-auto px-10 max-lg:px-6 max-sm:px-4">

                    <div className="mb-12">
                        <span className="font-display text-[22px] font-bold text-[#05264A] block tracking-wide">
                            THE TOPICS FOR
                        </span>
                        <h2 className="font-display text-[34px] max-sm:text-[28px] leading-tight text-[#05264A] font-bold uppercase m-0 mt-1">
                            A TO Z'S OF BUYING A FRANCHISE WILL BE:
                        </h2>
                    </div>

                    <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 max-sm:gap-8">
                        {buyingTopics.map((item, index) => (
                            <div key={index} className="flex flex-col items-start gap-4">
                                <div className="shrink-0 flex items-center justify-center">
                                    {item.icon}
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[17px] leading-snug text-[#0067b2] font-bold m-0 font-body">
                                        {item.title}
                                    </h3>
                                    <div className="flex flex-col gap-1.5">
                                        {item.points.map((point, i) => (
                                            <p key={i} className="text-[14px] leading-relaxed text-[#555] m-0 font-body">
                                                {point}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* BUSINESS TOPICS */}
            <section className="py-12 pb-24">
                <div className="w-full max-w-[1440px] mx-auto px-10 max-lg:px-6 max-sm:px-4">

                    <div className="mb-12">
                        <span className="font-display text-[22px] font-bold text-[#05264A] block tracking-wide">
                            THE TOPICS FOR
                        </span>
                        <h2 className="font-display text-[34px] max-sm:text-[28px] leading-tight text-[#05264A] font-bold uppercase m-0 mt-1">
                            FRANCHISE YOUR BUSINESS WILL BE:
                        </h2>
                    </div>

                    <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 max-sm:gap-8">
                        {businessTopics.map((item, index) => (
                            <div key={index} className="flex flex-col items-start gap-4">
                                <div className="shrink-0 flex items-center justify-center">
                                    {item.icon}
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[17px] leading-snug text-[#0067b2] font-bold m-0 font-body">
                                        {item.title}
                                    </h3>
                                    <div className="flex flex-col gap-1.5">
                                        {item.points.map((point, i) => (
                                            <p key={i} className="text-[14px] leading-relaxed text-[#555] m-0 font-body">
                                                {point}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}