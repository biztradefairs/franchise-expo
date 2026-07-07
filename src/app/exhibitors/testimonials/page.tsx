"use client";

import PageBanner from "@/components/PageBanner";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
    {
        text: "The event was great, and very professionally ran.",
        source: "FES Exhibitor Survey"
    },
    {
        text: "First time exhibiting and it was fabulous. Everyone was so helpful and it ran so smoothly.",
        source: "FES Exhibitor Survey"
    },
    {
        text: "MFV Expositions Franchise Expos are a great networking platform for franchisor, suppliers and people in the franchise segment to connect in a variety of regions across the U.S.",
        source: "IFE Exhibitor Survey"
    },
    {
        text: "Coming to these expos is huge because it makes a giant impact for us and other exhibitors who are looking for franchisees so they can grow.",
        source: "Franchise Expo West Exhibitor Survey"
    },
    {
        text: "We know that there’s a lot of great investors, people looking for franchises coming through the show. MFV Expositions and their expos are very reputable, and out of all the shows we go to this is one of them where we get the best results.",
        source: "IFE Exhibitor Survey"
    }
];

export default function ExhibitorTestimonials() {
    const [active, setActive] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goTo = useCallback(
        (index: number) => {
            if (index === active || isAnimating) return;
            setIsAnimating(true);
            setTimeout(() => {
                setActive(index);
                setIsAnimating(false);
            }, 400);
        },
        [active, isAnimating]
    );

    useEffect(() => {
        const timer = setInterval(() => {
            goTo((active + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [active, goTo]);

    const current = testimonials[active];

    return (
        <main className="w-full overflow-x-hidden bg-white">
            {/* HERO */}
            <PageBanner title="Exhibitor Testimonials" />

            {/* INTRO */}
            <section className="py-[60px] max-md:py-10">
                <div className="w-full max-w-[1440px] mx-auto px-6 max-sm:px-4">
                    <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 max-lg:gap-[35px] items-center">

                        <div className="introContent">
                            <h2 className="font-display text-[36px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px] leading-[1.1] uppercase text-[#011b2e] mb-5">
                                What Do Our Exhibitors Have To Say?
                            </h2>

                            <p className="text-[15px] max-md:text-sm max-sm:text-[13px] leading-[1.7] max-sm:leading-[1.6] text-[#444444] mb-3.5">
                                MFV Expositions' franchise expos are among the largest
                                franchise exhibitions within the U.S, offering the largest
                                selection of franchise brands all under one roof.
                            </p>

                            <p className="text-[15px] max-md:text-sm max-sm:text-[13px] leading-[1.7] max-sm:leading-[1.6] text-[#444444] mb-3.5">
                                Since 1991 MFV Expositions has been hosting expos and franchise
                                owners have come to our shows to seek out their perfect
                                franchise.
                            </p>

                            <p className="text-[15px] max-md:text-sm max-sm:text-[13px] leading-[1.7] max-sm:leading-[1.6] text-[#444444] mb-3.5">
                                But don’t take our word for it, take a look at what some of our
                                exhibitors have to say about us!
                            </p>
                        </div>

                        <div className="w-full rounded-2xl overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                            <iframe
                                src="https://player.vimeo.com/video/855373079?h=140bc3b8a1"
                                title="Exhibitor Testimonials"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="w-full h-[340px] max-lg:h-[300px] max-md:h-[240px] max-sm:h-[200px] border-none"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SLIDER WITH CONSTANT SIZE CONTAINER & BLUR/FADE TRANSITIONS */}
            <section className="bg-[#1ab7d0] py-[50px] px-5 pb-[56px] text-center overflow-hidden max-lg:py-9 max-lg:px-6 max-lg:pb-7 max-sm:py-7 max-sm:px-[18px] max-sm:pb-6">
                <div className="max-w-[1100px] mx-auto">
                    <div className="flex flex-col items-center mb-5">
                        <img
                            src="https://www.franchiseexpo.com/images/template/quote-icon.svg"
                            alt="Quote icon"
                            className="w-[45px] h-[45px] max-md:w-10 max-md:h-10 max-sm:w-[35px] max-sm:h-[35px] mb-3.5 opacity-90"
                        />
                        <h2 className="font-display text-[26px] max-lg:text-[34px] max-md:text-[28px] max-sm:text-[22px] leading-[1.1] text-white text-center uppercase tracking-wide">
                            HEAR WHAT OUR EXHIBITORS HAVE TO SAY
                        </h2>
                    </div>

                    {/* Constant size container to avoid vertical layout shift / bouncing during slides */}
                    <div className="min-h-[220px] max-lg:min-h-[200px] max-sm:min-h-[180px] flex flex-col items-center justify-center">
                        <p 
                          key={`text-${active}`}
                          className={`
                            mx-auto mb-4 max-w-[960px] 
                            font-body bold text-[clamp(14px,1.5vw,22px)] font-semibold leading-[1.45] text-white 
                            transition-all duration-400 ease-in-out
                            max-lg:text-[16px] 
                            max-sm:mb-2.5 max-sm:text-xs
                            ${isAnimating ? "scale-95 opacity-0 blur-[4px] translate-y-2" : "scale-100 opacity-100 blur-0 translate-y-0"}
                          `}
                        >
                          &ldquo;{current.text}&rdquo;
                        </p>

                        <div
                            className={`text-white text-[22px] max-sm:text-base leading-none mb-2 transition-all duration-400 ease-in-out ${
                                isAnimating ? "opacity-0 blur-[4px] translate-y-2" : "opacity-100 blur-0 translate-y-0"
                            }`}
                            key={`dots-${active}`}
                        >
                            ...
                        </div>

                        <p
                            className={`font-body text-[17px] max-sm:text-sm font-bold text-white mb-6 max-sm:mb-4 transition-all duration-400 ease-in-out ${
                                isAnimating ? "opacity-0 blur-[4px] translate-y-2" : "opacity-100 blur-0 translate-y-0"
                            }`}
                            key={`source-${active}`}
                        >
                            {current.source}
                        </p>
                    </div>

                    {/* Dot Navigation */}
                    <div className="flex justify-center gap-3">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                className={`w-[13px] h-[13px] max-sm:w-2.5 max-sm:h-2.5 rounded-full border-none bg-white/55 cursor-pointer p-0 transition-all duration-200 hover:bg-white/85 ${
                                    i === active ? "!bg-[#00a6ff] border-2 border-white scale-[1.15]" : ""
                                }`}
                                aria-label={`Slide ${i + 1}`}
                                onClick={() => goTo(i)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}