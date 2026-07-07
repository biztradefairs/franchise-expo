import PageBanner from "@/components/PageBanner";
import { ChevronRight } from "lucide-react";

const deadlines = [
    {
        text: "For companies currently registered in NY but requiring renewal the deadline is April 30, 2026",
    },
    {
        text: "For companies not currently registered in NY but planning to register the deadline to register is March 29, 2026",
    },
    {
        text: "For companies not currently registered in NY but planning to apply for the Domestic Trade Show exemption the deadline to register is May 10, 2026",
    },
];

export default function NYRegistration() {
    return (
        <main className="w-full overflow-hidden bg-white">

            {/* HERO */}
            <PageBanner title="NY Registration and Domestic Trade Show Exemption"/>

            {/* CONTENT */}
            <section className="py-[70px] max-md:py-10">
                <div className="w-full max-w-[1240px] mx-auto px-6 max-sm:px-4">

                    <div className="bg-white">

                        <p className="font-body text-[16px] leading-[1.8] text-center text-[#222] font-semibold max-w-[1000px] mx-auto mb-[50px]">
                            The State of New York Office of the Attorney General -
                            Department of Law requires that in order to exhibit at
                            IFE, you must have a valid Franchise Disclosure Document
                            (FDD) and be registered in NY. Companies who have a valid
                            FDD that does not include NY, must file an application
                            for a temporary exemption. The Department of Law requires
                            that we provide them with proof of registration for each
                            company.
                        </p>

                        <h2 className="font-display text-[32px] max-sm:text-[26px] font-bold uppercase text-center text-[#222] mb-[30px] m-0">
                            Important Deadlines
                        </h2>

                        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-6 mb-12">
                            {deadlines.map((item, index) => (
                                <div
                                    className="bg-[#0067b2] p-8 min-h-[160px] flex items-center justify-center text-center rounded-none"
                                    key={index}
                                >
                                    <p className="text-white text-[15px] max-sm:text-[14px] leading-relaxed font-semibold m-0">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center flex flex-col items-center">
                            <p className="font-body text-[16px] leading-relaxed text-[#222] mb-5">
                                All applications must be filed on the
                                Franchise Electronic Filing Depository
                                &quot;FRED&quot;
                            </p>

                            <a
                                href="https://www.nasaaefd.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-5 h-[48px] pl-6 pr-1.5 bg-[#0067b2] rounded-full text-white no-underline font-display text-[13px] font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#004a8f]"
                            >
                                <span>ACCESS FRED HERE</span>
                                <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0">
                                    <ChevronRight size={16} className="text-[#0067b2] stroke-[3]" />
                                </span>
                            </a>
                        </div>

                    </div>

                </div>
            </section>
        </main>
    );
}