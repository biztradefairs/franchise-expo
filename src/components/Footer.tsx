import Link from "@/components/UTMLink";
import Container from "@/components/ui/Container";

export default function Footer() {
    return (
        <footer
  className="w-full text-white pt-20 pb-0 font-sans border-t border-white/10"
  style={{
    background: "linear-gradient(135deg, #05264A 0%, #06345F 25%, #07406F 50%, #0A4C81 75%, #0D5A96 100%)",
  }}
>
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1.4fr] gap-12 sm:gap-10 xl:gap-x-[70px] pb-16">

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
                             </div>

                        <p className="font-body text-[17px] font-medium leading-relaxed text-white/85 m-0 max-w-[280px]">
                            Leading you on the path to successful franchising
                        </p>
                    </div>

                    {/* Column 2: Venue (Left aligned) */} 
                    <div className="flex flex-col items-start gap-5 py-1"> 
                      <h2 className="font-display text-[24px] font-bold uppercase tracking-[0.06em] text-white m-0"> 
                        VENUE / LOCATION 
                      </h2> 
                      
                      <address className="not-italic text-[#ffffff] m-0 p-0 text-[16px]  gap-0.5 leading-[1.8] font-body flex flex-col "> 
                        <span className="font-bold block">Pune City, India</span> 
                        <span className="block">Auto Cluster Exhibitionn Center</span> 
                        <span className="block">Plot No. C-181,Chinchwad East,</span> 
                        <span className="block">Mumbai Pune Road,</span> 
                        <span className="block">Pune City, Maharashtra - 411 019, India</span> 
                      </address> 
                    </div>


                    {/* Column 3: Opening Times (Left aligned) */}
                    <div className="flex flex-col items-start gap-3">
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
            </Container>

            {/* Bottom Bar (Solid Black/Dark Blue) */}
            <div className="bg-[#05264A] py-5 w-full">
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