import PageBanner from "@/components/PageBanner";

const teamSections = [
    {
        title: "SALES",
        members: [
            {
                name: "Frank Fazio",
                role: "Senior Account Executive",
                email: "Frank.Fazio@comexposium.com",
                phone: "201.881.1624",
                image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_186_306.png",
                badge: "Sales"
            },
            {
                name: "Justin Wood",
                role: "Senior Account Executive",
                email: "Justin.Wood@Comexposium.com",
                phone: "240.398.1385",
                image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_186_307.jpg",
                note: "Request Exhibitor Info",
                badge: "Sales"
            },
            {
                name: "Simone Knaap",
                role: "Senior Account Executive",
                email: "simone.knaap@comexposium.com",
                phone: "201.881.1654",
                image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_186_309.png",
                badge: "Sales"
            },
            {
                name: "James Materandrea",
                role: "VP International Sales",
                email: "James.Mastandrea@comexposium.com",
                phone: "201.704.1240",
                image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_186_310.png",
                badge: "International Sales"
            },
        ],
    },
    {
        title: "MARKETING",
        members: [
            {
                name: "Linda Thompson",
                role: "Marketing Director",
                email: "Linda.Thompson@comexposium.com",
                phone: "201.881.1646",
                image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_282_311.png",
                note: "Attendee and Conference Info",
                badge: "Marketing"
            },
            {
                name: "Rafael Arango",
                role: "Marketing Assistant",
                email: "rafael.arango@comexposium.com",
                phone: "201.881.1616",
                image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_282_313.png",
                badge: "Marketing"
            },
        ],
    },
    {
        title: "CUSTOMER RELATIONS",
        members: [
            {
                name: "Murphy Connolly",
                role: "Director of Operations & Services",
                email: "Murphy.Connolly@comexposium.com",
                phone: "631.335.5696",
                image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_283_314.png",
                note: "Exhibitor Services and Operations",
                badge: "Customer Relations"
            },
        ],
    },
    {
        title: "FINANCE",
        members: [
            {
                name: "Ismael Iraola",
                role: "SVP Finance",
                email: "Ismael.Iraola@comexposium.com",
                phone: "201.515.3075",
                image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_284_315.png",
                badge: "Finance"
            },
            {
                name: "Mohammed Abdelmajid",
                role: "Staff Accountant",
                email: "Mohammed.Abdelmajid@comexposium.com",
                phone: "201.515.3072",
                image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_284_317.png",
                badge: "Finance"
            },
            {
                name: "Roman Onica",
                role: "Staff Accountant",
                email: "Roman.Onica@comexposium.com",
                phone: "201.881.1636",
                image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_284_318.png",
                badge: "Finance"
            },
        ],
    },
    {
        title: "SHOW MANAGEMENT",
        members: [
            {
                name: "Martin Joksimovic",
                role: "President",
                email: "Martin.Joksimovic@comexposium.com",
                phone: "201.881.1658",
                image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_285_319.png",
                badge: "Show Management"
            },
        ],
    },
];

export default function OurTeam() {
    return (
        <main className="w-full overflow-hidden bg-white">
            {/* HERO */}
            <PageBanner title="Meet the Franchise Expo Team - Event Experts" />

            {/* TEAM SECTIONS */}
            <div className="py-16 max-sm:py-10">
                <div className="w-full max-w-[1440px] mx-auto px-10 max-lg:px-6 max-sm:px-4 flex flex-col gap-16 max-sm:gap-10">
                    {teamSections.map((section, index) => (
                        <div key={index} className="flex flex-col gap-6">
                            {/* Section Title */}
                            <h2 className="font-display text-[32px] max-sm:text-[26px] font-bold text-[#05264A] uppercase tracking-wide m-0 border-b border-[#dee2e6] pb-3">
                                {section.title}
                            </h2>

                            {/* Grid of Team Cards */}
                            <div className="grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6">
                                {section.members.map((member, idx) => (
                                    <div 
                                        key={idx} 
                                        className="bg-[#f4f5f7] overflow-hidden flex flex-col group border border-[#dee2e6] rounded-none hover:shadow-md transition-all duration-300"
                                    >
                                        {/* Image Container with Badge */}
                                        <div className="relative w-full h-[220px] bg-gray-200 shrink-0">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            {member.badge && (
                                                <span className="absolute bottom-3 left-3 bg-black/50 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-[5px] rounded-full font-body">
                                                    {member.badge}
                                                </span>
                                            )}
                                        </div>

                                        {/* Details Container */}
                                        <div className="p-6 max-sm:p-5 flex flex-col flex-1 items-start gap-4">
                                            <div className="flex flex-col gap-[3px] w-full">
                                                <h3 className="font-display text-[22px] max-sm:text-[20px] font-bold text-[#05264A] uppercase m-0 leading-[1.2]">
                                                    {member.name}
                                                </h3>
                                                <p className="font-body text-[13px] font-bold text-[#222] m-0">
                                                    {member.role}
                                                </p>
                                                {member.note && (
                                                    <p className="font-body text-[13px] font-bold text-[#0067b2] m-0 mt-1">
                                                        {member.note}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Stacked contact information */}
                                            <div className="flex flex-col gap-1 w-full text-[13px] text-[#444] font-body">
                                                <span className="truncate">
                                                    <strong className="text-[#05264A]">E:</strong> {member.email}
                                                </span>
                                                <span>
                                                    <strong className="text-[#05264A]">T:</strong> {member.phone}
                                                </span>
                                            </div>

                                            {/* Button */}
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="w-full h-[42px] mt-auto bg-[#0067b2] text-white font-display text-[13px] font-bold uppercase tracking-wider flex items-center justify-center transition-colors duration-300 hover:bg-[#004a8f]"
                                            >
                                                EMAIL ME
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}