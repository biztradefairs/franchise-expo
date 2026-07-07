import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#003b73] text-white pt-20 pb-0 font-sans border-t border-white/10">
            <div className="w-full max-w-[1600px] mx-auto px-[45px] max-sm:px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1.3fr_1fr_1fr_1.4fr] gap-12 sm:gap-10 xl:gap-x-[70px] pb-16">

                    {/* Column 1: Organized by (Centered) */}
                    <div className="flex flex-col items-center text-center gap-8">
                        <p className="font-display text-[24px] font-bold uppercase tracking-[0.06em] text-white m-0">
                            ORGANIZED BY
                        </p>

                        <div className="flex flex-col gap-4 items-center w-full">
                            <img
                                src="images/maxx_logo.png"
                                alt="Franchise Expo Powered by MFV"
                                className="h-[50px] w-auto object-contain block brightness-0 invert"
                            />
                            <img
                                src="https://www.franchiseexpo.com/images/comoexposium.webp"
                                alt="Comexposium"
                                className="h-[22px] w-auto object-contain block brightness-0 invert"
                            />
                        </div>

                        <p className="font-body text-[17px] font-medium leading-relaxed text-white/85 m-0 max-w-[280px]">
                            Leading you on the path to successful franchising
                        </p>
                    </div>

                    {/* Column 2: Venue (Left aligned) */}
                    <div className="flex flex-col items-start gap-4">
                        <p className="font-display text-[24px] font-bold uppercase tracking-[0.06em] text-white m-0">
                            VENUE / LOCATION
                        </p>
                        <ul className="list-none m-0 p-0 text-[16px] leading-[1.8] text-white/80 font-body flex flex-col gap-1">
                            <li className="font-bold text-white text-[16px]">New York City, New York</li>
                            <li>Javits Center, Hall 1C</li>
                            <li>429 11th Ave</li>
                            <li>New York</li>
                            <li>NY 10001</li>
                        </ul>
                    </div>

                    {/* Column 3: Opening Times (Left aligned) */}
                    <div className="flex flex-col items-start gap-4">
                        <p className="font-display text-[24px] font-bold uppercase tracking-[0.06em] text-white m-0">
                            OPENING TIMES
                        </p>
                        <div className="flex flex-col gap-4 text-[16px] leading-relaxed text-white/80 font-body">
                            <div className="flex flex-col gap-0.5">
                                <strong className="text-white font-bold">Friday June 4th 2027</strong>
                                <span>10AM - 5PM</span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <strong className="text-white font-bold">Saturday June 5th 2027</strong>
                                <span>10AM - 4PM</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Contact (Left aligned) */}
                    <div className="flex flex-col items-start gap-6">
                        <p className="text-[18px] font-bold text-white m-0 font-body">
                            Tel: + 1 201 226 1130
                        </p>

                        <div className="flex flex-col gap-6">
                            {/* Request Info */}
                            <div className="flex flex-col gap-2">
                                <p className="font-display text-[19px] font-bold uppercase text-white m-0">
                                    REQUEST EXHIBITOR INFO
                                </p>
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-[17px] text-white/85 m-0 font-body">
                                        Justin Wood (240) 398-1385
                                    </p>
                                    <a
                                        href="mailto:Justin.Wood@comexposium.com"
                                        className="text-[17px] text-white no-underline hover:underline transition-colors duration-200 font-body w-fit break-all"
                                    >
                                        Justin.Wood@comexposium.com
                                    </a>
                                </div>
                            </div>

                            {/* Attendee Info */}
                            <div className="flex flex-col gap-2">
                                <p className="font-display text-[19px] font-bold uppercase text-white m-0">
                                    ATTENDEE AND CONFERENCE INFO
                                </p>
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-[17px] text-white/85 m-0 font-body">
                                        Linda Thompson (201) 881-1646
                                    </p>
                                    <a
                                        href="mailto:Linda.Thompson@comexposium.com"
                                        className="text-[17px] text-white no-underline hover:underline transition-colors duration-200 font-body w-fit break-all"
                                    >
                                        Linda.Thompson@comexposium.com
                                    </a>
                                </div>
                            </div>

                            {/* Exhibitor Services */}
                            <div className="flex flex-col gap-2">
                                <p className="font-display text-[19px] font-bold uppercase text-white m-0">
                                    EXHIBITOR SERVICES
                                </p>
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-[17px] text-white/85 m-0 font-body">
                                        Murphy Connolly (631) 335-5696
                                    </p>
                                    <a
                                        href="mailto:Murphy.Connolly@comexposium.com"
                                        className="text-[17px] text-white no-underline hover:underline transition-colors duration-200 font-body w-fit break-all"
                                    >
                                        Murphy.Connolly@comexposium.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar (Solid Black/Dark Blue) */}
            <div className="bg-[#051426] py-5 w-full">
                <div className="max-w-[1200px] mx-auto px-5 max-sm:px-4 flex justify-between items-center max-sm:flex-col max-sm:gap-3 text-white text-[13px] font-body">
                    <Link
                        href="/privacy-policy"
                        className="text-white/90 no-underline hover:text-white transition-colors duration-200 uppercase font-bold tracking-wider"
                    >
                        Privacy Policy
                    </Link>

                    {/* LiveBuzz Eventim Branding matching reference */}
                    <div className="flex items-center gap-2 text-white/80">
                        <span>EVENT WEBSITE BY</span>
                        <span className="font-bold text-white">LIVEBUZZ</span>
                        <span className="text-white/50">by eventim+</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}