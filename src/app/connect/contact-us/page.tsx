"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const contactCards = [
    {
        category: "Sales",
        title: "Request Exhibitor Info",
        name: "Justin Wood",
        role: "Senior Account Executive",
        email: "Justin.Wood@Comexposium.com",
        phone: "240.398.1385",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_286_307.jpg",
    },
    {
        category: "Marketing",
        title: "Attendee and Conference Info",
        name: "Linda Thompson",
        role: "Marketing Director",
        email: "Linda.Thompson@comexposium.com",
        phone: "201.881.1646",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_286_311.png",
    },
    {
        category: "Customer Relations",
        title: "Exhibitor Services and Operations",
        name: "Murphy Connolly",
        role: "Director of Operations & Services",
        email: "Murphy.Connolly@comexposium.com",
        phone: "631.335.5696",
        image: "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_286_314.png",
    },
];

const events = [
    "International Franchise Expo",
    "Franchise Expo South",
    "Franchise Expo Cincinnati",
    "Franchise Expo Dallas",
    "Franchise Expo West",
];

export default function ContactUs() {
    const [formData, setFormData] = useState({
        fullName: "",
        company: "",
        phone: "",
        email: "",
        interests: [] as string[],
        comments: "",
    });

    const handleCheckboxChange = (event: string) => {
        setFormData((prev) => {
            const newInterests = prev.interests.includes(event)
                ? prev.interests.filter((item) => item !== event)
                : [...prev.interests, event];
            return { ...prev, interests: newInterests };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <main className="w-full bg-white overflow-hidden">

            {/* CONTACT CARDS - Top spacing adjusted for no PageBanner */}
            <section className="py-16 max-sm:py-10">
                <div className="w-full max-w-[1240px] mx-auto px-10 max-lg:px-6 max-sm:px-4">
                    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8">
                        {contactCards.map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-[#f4f5f7] overflow-hidden flex flex-col group border border-[#dee2e6] rounded-none hover:shadow-md transition-all duration-300"
                            >
                                {/* Image Container with Badge */}
                                <div className="relative w-full h-[220px] bg-gray-200 shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <span className="absolute bottom-3 left-3 bg-black/50 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-[5px] rounded-full font-body">
                                        {item.category}
                                    </span>
                                </div>

                                {/* Details Container */}
                                <div className="p-6 max-sm:p-5 flex flex-col flex-1 items-start gap-4">
                                    <div className="flex flex-col gap-[3px] w-full">
                                        <p className="font-body text-[13px] font-bold text-[#0067b2] m-0">
                                            {item.title}
                                        </p>
                                        <h3 className="font-display text-[22px] max-sm:text-[20px] font-bold text-[#111] uppercase m-0 leading-[1.2] mt-1">
                                            {item.name}
                                        </h3>
                                        <p className="font-body text-[13px] font-bold text-[#555] m-0">
                                            {item.role}
                                        </p>
                                    </div>

                                    {/* Stacked contact details */}
                                    <div className="flex flex-col gap-1 w-full text-[13px] text-[#444] font-body">
                                        <span className="truncate">
                                            <strong className="text-[#111]">E:</strong> {item.email}
                                        </span>
                                        <span>
                                            <strong className="text-[#111]">T:</strong> {item.phone}
                                        </span>
                                    </div>

                                    {/* Button */}
                                    <a
                                        href={`mailto:${item.email}`}
                                        className="w-full h-[42px] mt-auto bg-[#0067b2] text-white font-display text-[13px] font-bold uppercase tracking-wider flex items-center justify-center transition-colors duration-300 hover:bg-[#004a8f]"
                                    >
                                        EMAIL ME
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section className="pb-24 max-sm:pb-16">
                <div className="w-full max-w-[1240px] mx-auto px-10 max-lg:px-6 max-sm:px-4">
                    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
                        
                        {/* Full Name */}
                        <div className="w-full">
                            <input
                                type="text"
                                placeholder="Full Name *"
                                value={formData.fullName}
                                onChange={(e) =>
                                    setFormData({ ...formData, fullName: e.target.value })
                                }
                                className="w-full border-none bg-[#f4f5f7] rounded-none px-5 text-[14px] text-[#222] outline-none font-body focus:bg-[#eaebed] h-[52px]"
                                required
                            />
                        </div>

                        {/* Company */}
                        <div className="w-full">
                            <input
                                type="text"
                                placeholder="Company *"
                                value={formData.company}
                                onChange={(e) =>
                                    setFormData({ ...formData, company: e.target.value })
                                }
                                className="w-full border-none bg-[#f4f5f7] rounded-none px-5 text-[14px] text-[#222] outline-none font-body focus:bg-[#eaebed] h-[52px]"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div className="w-full">
                            <input
                                type="tel"
                                placeholder="Phone *"
                                value={formData.phone}
                                onChange={(e) =>
                                    setFormData({ ...formData, phone: e.target.value })
                                }
                                className="w-full border-none bg-[#f4f5f7] rounded-none px-5 text-[14px] text-[#222] outline-none font-body focus:bg-[#eaebed] h-[52px]"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="w-full">
                            <input
                                type="email"
                                placeholder="Email *"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                className="w-full border-none bg-[#f4f5f7] rounded-none px-5 text-[14px] text-[#222] outline-none font-body focus:bg-[#eaebed] h-[52px]"
                                required
                            />
                        </div>

                        {/* Checkbox Group */}
                        <div className="w-full flex flex-col gap-3 py-2">
                            {events.map((event) => (
                                <label key={event} className="flex items-center gap-3 text-[14px] text-[#222] font-body font-medium cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.interests.includes(event)}
                                        onChange={() => handleCheckboxChange(event)}
                                        className="w-[18px] h-[18px] border border-[#d1d5db] rounded-none checked:bg-[#0067b2] checked:border-transparent cursor-pointer"
                                    />
                                    <span>{event}</span>
                                </label>
                            ))}
                        </div>

                        {/* Comments */}
                        <div className="w-full">
                            <textarea
                                rows={5}
                                placeholder="Do you have any comments?"
                                value={formData.comments}
                                onChange={(e) =>
                                    setFormData({ ...formData, comments: e.target.value })
                                }
                                className="w-full border-none bg-[#f4f5f7] rounded-none px-5 py-4 text-[14px] text-[#222] outline-none font-body focus:bg-[#eaebed] resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-start">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-5 h-[48px] pl-6 pr-1.5 bg-[#0067b2] rounded-full text-white border-none font-display text-[13px] font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#004a8f] cursor-pointer"
                            >
                                <span>SUBMIT</span>
                                <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0">
                                    <ChevronRight size={16} className="text-[#0067b2] stroke-[3]" />
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}