import PageBanner from "@/components/PageBanner";
import Link from "next/link";

const platinumSponsors = [
    {
        name: "Entrepreneur",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_287_254.webp?d379ab892179a7e4eed7ceb2ffa43760",
        link: "#",
    },
];

const goldSponsors = [
    {
        name: "BeTheBoss",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_300_275.webp?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
    {
        name: "BizBuySell",
        image: "https://www.franchiseexpo.com/images/sponsors/IFE/BizBuySell.svg?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
    {
        name: "Emma Inc.",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_300_430.jpg?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
    {
        name: "F.C. Dadson",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_300_274.webp?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
    {
        name: "MetAiBlock",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_300_434.png?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
    {
        name: "Stark and Stark Attorneys at Law",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_300_269.jpg?e984577ea28ed6ee546854c84c655111",
        link: "#",
    },
];

const silverSponsors = [
    {
        name: "Guidant",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_301_280.webp?cf0f6cba0c44610223afbe802530982c",
        link: "#",
    },
    {
        name: "Sesimi",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_301_356.png?cf0f6cba0c44610223afbe802530982c",
        link: "#",
    },
    {
        name: "Signation Sign Group",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_301_291.webp?cf0f6cba0c44610223afbe802530982c",
        link: "#",
    },
    {
        name: "The Entrepreneur's Source",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_301_406.webp?cf0f6cba0c44610223afbe802530982c",
        link: "#",
    },
    {
        name: "The Franchise Firm",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_301_288.webp?cf0f6cba0c44610223afbe802530982c",
        link: "#",
    },
];

function SponsorCard({ sponsor }: { sponsor: { name: string; image: string; link: string } }) {
    return (
        <div className="bg-white border border-[#dee2e6] flex flex-col overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
            {/* Logo area */}
            <div className="h-[220px] max-sm:h-[180px] flex items-center justify-center bg-[#f8f9fa] p-8">
                <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain"
                />
            </div>

            {/* Name area */}
            <div className="px-6 py-5 max-sm:px-5 max-sm:py-4 bg-[#e9ecef] flex-1 flex items-center">
                <h3 className="font-display text-[18px] max-sm:text-[16px] font-bold leading-[1.25] uppercase text-[#222] m-0">
                    {sponsor.name}
                </h3>
            </div>

            {/* View Profile button */}
            <Link
                href={sponsor.link}
                className="w-full h-[52px] max-sm:h-[46px] flex items-center justify-center bg-[#0067b2] text-white font-display text-[14px] max-sm:text-[13px] font-medium tracking-[0.12em] uppercase no-underline transition-colors duration-300 hover:bg-[#004a8f]"
            >
                View Profile
            </Link>
        </div>
    );
}

export default function ShowSponsors() {
    return (
        <main className="w-full overflow-hidden bg-white">

            {/* HERO */}
            <PageBanner title="Show Sponsors"/>

            {/* SPONSORS */}
            <section className="py-16 max-sm:py-10">
                <div className="w-full max-w-[1440px] mx-auto px-10 max-lg:px-6 max-sm:px-5">

                                      {/* SILVER */}
                    <div className="mb-16 max-sm:mb-10">
                        

                        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 max-sm:gap-5">
                            {silverSponsors.map((sponsor, index) => (
                                <SponsorCard key={index} sponsor={sponsor} />
                            ))}
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}