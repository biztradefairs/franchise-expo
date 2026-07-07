'use client';

export default function SupportedBy() {
    return (
        <section className="w-full bg-[#e8e8e8] py-[50px] px-5 max-sm:py-[35px]">
            <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-5 max-sm:gap-3 flex-wrap">
                <span className="font-display text-[clamp(22px,2.5vw,32px)] font-bold uppercase text-[#043779] tracking-wide leading-none">
                    SUPPORTED BY
                </span>
                <img
                    src="https://www.franchiseexpo.com/images/us-commercial-service.svg"
                    alt="U.S. Commercial Service – United States of America Department of Commerce"
                    className="h-[65px] max-sm:h-[50px] w-auto object-contain"
                    draggable={false}
                />
            </div>
        </section>
    );
}
