"use client";

import { useState, useMemo } from "react";
import PageBanner from "@/components/PageBanner";
import {
    Search,
    ChevronDown,
    Clock,
    MapPin,
    Calendar,
    X,
} from "lucide-react";

/* ── Types ──────────────────────────────────────────────── */
type Day = "friday" | "saturday";

interface Speaker {
    name: string;
    role: string;
    org: string;
    avatar?: string;
}

interface Session {
    id: number;
    day: Day;
    time: string;          // e.g. "8:30AM"
    timeEnd: string;       // e.g. "9:30AM"
    title: string;
    room: string;
    roomColor: string;     // CSS color dot
    location: string;      // "Room 1C02" | "Theater 2" etc.
    description: string;
    speakers: Speaker[];
}

/* ── Sessions Data ──────── */
const SESSIONS: Session[] = [
    {
        id: 1,
        day: "friday",
        time: "8:30AM",
        timeEnd: "9:30AM",
        title: "Franchising Fundamentals: Interacting with Franchisors",
        room: "Room 1C02",
        roomColor: "#7B5EA7",
        location: "Room 1C02",
        description:
            "Industry experts share tips to better organize and structure communications with franchisors. The program is designed for international contacts and investors wishing to invest and diversify through the franchise business model.",
        speakers: [
            {
                name: "Bernard Ramchatesingh",
                role: "CFE, Senior Franchise Consultant",
                org: "iFranchise Group",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
            },
            {
                name: "Evan Goldman",
                role: "Founding Partner",
                org: "The Franchise Firm",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
            },
            {
                name: "Mr Hair Parra",
                role: "SVP International Operations and Development",
                org: "Captain D's",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
            },
        ],
    },
    {
        id: 2,
        day: "friday",
        time: "10:15AM",
        timeEnd: "11:45AM",
        title: "A to Z's of Buying A Franchise",
        room: "Theater 2",
        roomColor: "#E8294A",
        location: "Theater 2",
        description:
            "If you're looking for no-nonsense, cut-to-the-quick guidance on how to evaluate franchises so you can buy one that's right for you — this is the workshop you need. Perfect for people just getting started with their research.",
        speakers: [
            {
                name: "John Hayes",
                role: "Titus Chair for Franchise Leadership",
                org: "Titus Center for Franchising, Palm Beach Atlantic University",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
            },
        ],
    },
    {
        id: 3,
        day: "friday",
        time: "11:00AM",
        timeEnd: "12:00PM",
        title: "Financing Your Franchise: Options and Strategies",
        room: "Room 1C04",
        roomColor: "#1A7ABF",
        location: "Room 1C04",
        description:
            "Explore the full spectrum of financing tools available to franchise buyers — from SBA loans and 401(k) rollovers to franchisor financing programs. Walk away with a clear funding roadmap.",
        speakers: [
            {
                name: "Eric Schechterman",
                role: "Director of Franchise Finance",
                org: "Benetrends Financial",
                avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150"
            },
            {
                name: "Chris Hurn",
                role: "SBA Lending Specialist",
                org: "Live Oak Bank",
                avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=150&h=150"
            },
        ],
    },
    {
        id: 4,
        day: "friday",
        time: "1:00PM",
        timeEnd: "2:00PM",
        title: "International Expansion: Entering the U.S. Market",
        room: "Theater 1",
        roomColor: "#E8294A",
        location: "Theater 1",
        description:
            "A practical session for international brands seeking U.S. entry and U.S. brands eyeing global growth. Topics include legal frameworks, master franchise agreements, and cultural adaptation.",
        speakers: [
            {
                name: "Robert L. Zisk",
                role: "International Franchise Counsel",
                org: "Faegre Drinker",
                avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150"
            },
            {
                name: "Chuck Runyon",
                role: "VP Global Development",
                org: "Anytime Fitness",
                avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=150&h=150"
            },
        ],
    },
    {
        id: 5,
        day: "friday",
        time: "2:30PM",
        timeEnd: "3:30PM",
        title: "FDD Deep Dive: What Every Buyer Must Know",
        room: "Room 1C02",
        roomColor: "#7B5EA7",
        location: "Room 1C02",
        description:
            "An item-by-item walkthrough of the Franchise Disclosure Document with franchise attorneys. Understand what to look for, what red flags to watch out for, and how to negotiate.",
        speakers: [
            {
                name: "David Bernstein",
                role: "Franchise Attorney, Partner",
                org: "DLA Piper",
                avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150"
            },
        ],
    },
    {
        id: 6,
        day: "friday",
        time: "4:00PM",
        timeEnd: "5:00PM",
        title: "Emerging Brands Spotlight Panel",
        room: "Theater 2",
        roomColor: "#E8294A",
        location: "Theater 2",
        description:
            "Meet the founders and executives behind the fastest-growing emerging franchise concepts. Hear their growth stories and what makes their model an attractive investment opportunity.",
        speakers: [
            {
                name: "Gary Morrison",
                role: "Co-Founder & CEO",
                org: "Taim Mediterranean Kitchen",
                avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=150&h=150"
            },
            {
                name: "Jason McGowan",
                role: "VP Franchising",
                org: "Crumbl Cookies",
                avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150&h=150"
            },
        ],
    },
    {
        id: 7,
        day: "saturday",
        time: "9:00AM",
        timeEnd: "10:00AM",
        title: "Women in Franchising: Breaking Barriers and Building Wealth",
        room: "Theater 1",
        roomColor: "#E8294A",
        location: "Theater 1",
        description:
            "A candid conversation with women who have built multi-unit franchise empires. Covering mindset, capital access, mentorship, and the path to financial independence through franchising.",
        speakers: [
            {
                name: "Sarah Miller",
                role: "Multi-Unit Franchise Owner",
                org: "Sport Clips",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
            },
            {
                name: "Karen Peterson",
                role: "Executive Director",
                org: "Women's Franchise Committee, IFA",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
            },
        ],
    },
    {
        id: 8,
        day: "saturday",
        time: "10:30AM",
        timeEnd: "11:30AM",
        title: "Technology & AI: The Future of Franchise Operations",
        room: "Room 1C02",
        roomColor: "#7B5EA7",
        location: "Room 1C02",
        description:
            "How franchisors and franchisees are leveraging AI-driven tools to streamline operations, reduce costs, and enhance the customer experience. Real case studies from leading brands.",
        speakers: [
            {
                name: "Brad Stevenson",
                role: "Chief Technology Officer",
                org: "Neighborly",
                avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150"
            },
            {
                name: "John Miller",
                role: "Head of Innovation",
                org: "Dine Brands",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
            },
        ],
    },
    {
        id: 9,
        day: "saturday",
        time: "12:00PM",
        timeEnd: "1:00PM",
        title: "Multi-Unit Ownership: Scaling Your Franchise Portfolio",
        room: "Theater 2",
        roomColor: "#E8294A",
        location: "Theater 2",
        description:
            "Strategies for franchisees looking to grow from single-unit to multi-unit operators. Covers talent acquisition, systems, capital planning, and lessons learned from operators who've done it.",
        speakers: [
            {
                name: "Dan Doulen",
                role: "Multi-Unit Franchisee, 18 locations",
                org: "Jersey Mike's Subs",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
            },
            {
                name: "Linda Thompson",
                role: "Director of Franchisee Success",
                org: "Great Clips",
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
            },
        ],
    },
];

const LOCATIONS = ["Please select", "Theater 1", "Theater 2", "Room 1C02", "Room 1C04"];
const SPEAKERS_LIST = ["Please select", "Bernard Ramchatesingh", "Evan Goldman", "Mr Hair Parra", "John Hayes", "Eric Schechterman", "Chris Hurn", "Robert L. Zisk", "Chuck Runyon", "David Bernstein", "Gary Morrison", "Jason McGowan", "Sarah Miller", "Karen Peterson", "Brad Stevenson", "John Miller", "Dan Doulen", "Linda Thompson"];
const DAYS_LIST = ["Please select", "friday", "saturday"];

/* ── Reusable Compact Session Card Component ──────────────── */
function SessionCard({ s }: { s: Session }) {
    return (
        <article className="p-5 flex flex-col gap-3.5 bg-white border border-[#dee2e6] transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full">
            <div>
                <h3 className="m-0 font-display text-[19px] font-bold text-[#0067b2] leading-[1.25] hover:text-[#004a8f] cursor-pointer">
                    {s.title}
                </h3>
            </div>

            <div className="flex items-center flex-wrap gap-3 text-[12px] text-[#6c757d] font-body font-medium">
                <span className="flex items-center gap-1">
                    <Clock size={13} className="shrink-0" />
                    {s.time} – {s.timeEnd}
                </span>
                <span className="flex items-center gap-1">
                    <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ background: s.roomColor }}
                    />
                    {s.location}
                </span>
            </div>

            <p className="m-0 text-[13px] leading-relaxed text-[#555] font-body">
                {s.description}
            </p>

            {s.speakers.length > 0 && (
                <div className="flex flex-col gap-3 pt-3.5 border-t border-[#dee2e6] mt-1">
                    {s.speakers.map((sp, i) => (
                        <div key={i} className="flex items-start gap-2.5 min-w-0">
                            <div className="w-[38px] h-[38px] rounded-full overflow-hidden shrink-0 bg-gray-100 border border-gray-200">
                                {sp.avatar ? (
                                    <img
                                        src={sp.avatar}
                                        alt={sp.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-[#b0b7bd] text-white text-[10px] font-bold">
                                        {sp.name.split(" ").slice(0,2).map(n => n[0]).join("")}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-[1px] min-w-0">
                                <span className="text-[12px] font-bold text-[#0067b2] hover:underline cursor-pointer leading-tight block">
                                    {sp.name}
                                </span>
                                <span className="text-[11px] font-medium text-[#555] leading-tight block truncate" title={sp.role}>
                                    {sp.role}
                                </span>
                                <span className="text-[11px] font-bold text-[#777] leading-tight block truncate" title={sp.org}>
                                    {sp.org}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </article>
    );
}

export default function ConferenceAgenda() {
    const [activeDay, setActiveDay] = useState<Day>("friday");
    const [search, setSearch] = useState("");
    const [locationFilter, setLocationFilter] = useState("Please select");
    const [speakerFilter, setSpeakerFilter] = useState("Please select");
    const [dayFilter, setDayFilter] = useState("Please select");
    const [filterLogic, setFilterLogic] = useState<"AND" | "OR">("AND");
    const [viewMode, setViewMode] = useState<"time" | "day" | "location">("time");

    // Dynamic Sessions Filtering
    const filtered = useMemo(() => {
        return SESSIONS.filter((s) => {
            // Day filter in sidebar overrides top activeDay tab (applicable in Time & Location views)
            if (viewMode !== "day") {
                const currentTabDay = dayFilter !== "Please select" ? dayFilter : activeDay;
                if (s.day !== currentTabDay) return false;
            }

            const matchSearch = !search || s.title.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase());
            const matchLocation = locationFilter === "Please select" || s.location === locationFilter;
            const matchSpeaker = speakerFilter === "Please select" || s.speakers.some(sp => sp.name === speakerFilter);

            if (filterLogic === "AND") {
                return matchSearch && matchLocation && matchSpeaker;
            } else {
                return matchSearch || matchLocation || matchSpeaker;
            }
        });
    }, [activeDay, search, locationFilter, speakerFilter, dayFilter, filterLogic, viewMode]);

    const clearAll = () => {
        setSearch("");
        setLocationFilter("Please select");
        setSpeakerFilter("Please select");
        setDayFilter("Please select");
    };

    const hasFilters = search || locationFilter !== "Please select" || speakerFilter !== "Please select" || (viewMode !== "day" && dayFilter !== "Please select");

    // Group by time slot (for Timeline / Time view)
    const groupedByTime = useMemo(() => {
        const map = new Map<string, Session[]>();
        filtered.forEach((s) => {
            if (!map.has(s.time)) map.set(s.time, []);
            map.get(s.time)!.push(s);
        });
        return map;
    }, [filtered]);

    return (
        <main className="w-full bg-white">
            <PageBanner title="Conference Agenda" />

            <section className="py-10 px-16 pb-20 max-xl:px-10 max-lg:px-6 max-sm:py-6 max-sm:px-4 max-sm:pb-[60px]">
                <div className="max-w-[1408px] mx-auto grid grid-cols-[240px_1fr] max-lg:grid-cols-1 gap-8 items-start">
                    
                    {/* ─── SIDEBAR FILTERS ─── */}
                    <aside className="w-[240px] shrink-0 flex flex-col gap-0 max-lg:w-full" aria-label="Filters">
                        {/* Search */}
                        <div className="flex items-center gap-2 bg-white border border-[#d1d5db] h-[48px] rounded-sm px-3 mb-5">
                            <Search size={18} className="text-[#9ca3af] shrink-0" />
                            <input
                                type="text"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="flex-1 border-none outline-none text-[14px] font-normal text-[#222] bg-transparent min-w-0 font-body placeholder:text-[#9ca3af]"
                            />
                            {search && (
                                <button onClick={() => setSearch("")} className="bg-transparent border-none cursor-pointer p-0 text-[#9ca3af] flex items-center hover:text-[#222]"><X size={16} /></button>
                            )}
                        </div>

                        {/* Speakers Dropdown */}
                        <div className="flex flex-col gap-[6px] mb-4">
                            <label className="text-[14px] font-bold text-[#222] font-body">Speakers</label>
                            <div className="relative">
                                <select
                                    value={speakerFilter}
                                    onChange={(e) => setSpeakerFilter(e.target.value)}
                                    className="appearance-none w-full bg-white border border-[#d1d5db] rounded-sm h-[48px] pl-3 pr-8 text-[14px] font-normal text-[#6c757d] cursor-pointer outline-none font-body focus:border-[#0067b2]"
                                >
                                    {SPEAKERS_LIST.map(t => <option key={t}>{t}</option>)}
                                </select>
                                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6c757d] pointer-events-none" />
                            </div>
                        </div>

                        {/* Day Dropdown (Hidden in Day View since both days are shown side by side) */}
                        {viewMode !== "day" && (
                            <div className="flex flex-col gap-[6px] mb-4">
                                <label className="text-[14px] font-bold text-[#222] font-body">Day</label>
                                <div className="relative">
                                    <select
                                        value={dayFilter}
                                        onChange={(e) => setDayFilter(e.target.value)}
                                        className="appearance-none w-full bg-white border border-[#d1d5db] rounded-sm h-[48px] pl-3 pr-8 text-[14px] font-normal text-[#6c757d] cursor-pointer outline-none font-body focus:border-[#0067b2]"
                                    >
                                        {DAYS_LIST.map(t => <option key={t}>{t === "friday" ? "Friday 29th May" : t === "saturday" ? "Saturday 30th May" : t}</option>)}
                                    </select>
                                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6c757d] pointer-events-none" />
                                </div>
                            </div>
                        )}

                        {/* Location Dropdown */}
                        <div className="flex flex-col gap-[6px] mb-5">
                            <label className="text-[14px] font-bold text-[#222] font-body">Location</label>
                            <div className="relative">
                                <select
                                    value={locationFilter}
                                    onChange={(e) => setLocationFilter(e.target.value)}
                                    className="appearance-none w-full bg-white border border-[#d1d5db] rounded-sm h-[48px] pl-3 pr-8 text-[14px] font-normal text-[#6c757d] cursor-pointer outline-none font-body focus:border-[#0067b2]"
                                >
                                    {LOCATIONS.map(t => <option key={t}>{t}</option>)}
                                </select>
                                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6c757d] pointer-events-none" />
                            </div>
                        </div>

                        {/* Filters logic toggle */}
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-[14px] font-bold text-[#222] font-body">Filters:</span>
                            <div className="flex items-center rounded-full overflow-hidden border border-[#d1d5db] h-[32px]">
                                <button
                                    className={`h-full px-4 text-[13px] font-bold border-none cursor-pointer transition-all duration-200 ${
                                        filterLogic === "AND"
                                            ? "bg-[#18b7d0] text-white"
                                            : "bg-white text-[#6c757d] hover:bg-[#f0f0f0]"
                                    }`}
                                    onClick={() => setFilterLogic("AND")}
                                >AND</button>
                                <button
                                    className={`h-full px-4 text-[13px] font-bold border-none cursor-pointer transition-all duration-200 ${
                                        filterLogic === "OR"
                                            ? "bg-[#FE6B0B] text-white"
                                            : "bg-white text-[#6c757d] hover:bg-[#f0f0f0]"
                                    }`}
                                    onClick={() => setFilterLogic("OR")}
                                >OR</button>
                            </div>
                            <span className="w-[22px] h-[22px] bg-[#004a8f] text-white rounded-full inline-flex items-center justify-center text-[12px] font-bold cursor-help shrink-0">ℹ</span>
                        </div>

                        {/* Showing count */}
                        <div className="text-[14px] text-[#6c757d] mb-2 font-body">
                            <span className="font-bold text-[#222]">Showing:</span> {filtered.length} results
                        </div>

                        {/* Clear all */}
                        {hasFilters && (
                            <button
                                onClick={clearAll}
                                className="w-full h-[44px] bg-[#e9ecef] border-none text-[14px] font-bold text-[#222] cursor-pointer rounded-sm tracking-wider hover:bg-[#d1d5db] transition-all duration-200 mb-5 uppercase font-display"
                            >
                                CLEAR ALL
                            </button>
                        )}

                        {/* View toggle */}
                        <div className="flex flex-col gap-2 mt-2">
                            <span className="text-[14px] font-bold text-[#222] font-body">View</span>
                            <div className="flex gap-0">
                                <button
                                    className={`flex-1 h-[44px] flex items-center justify-center border-none cursor-pointer transition-all duration-200 rounded-none ${
                                        viewMode === "time"
                                            ? "bg-[#004a8f] text-white"
                                            : "bg-[#e9ecef] text-[#6c757d] hover:bg-[#d1d5db]"
                                    }`}
                                    onClick={() => setViewMode("time")}
                                    title="Time view"
                                >
                                    <Clock size={20} />
                                </button>
                                <button
                                    className={`flex-1 h-[44px] flex items-center justify-center border-none cursor-pointer transition-all duration-200 rounded-none ${
                                        viewMode === "day"
                                            ? "bg-[#004a8f] text-white"
                                            : "bg-[#e9ecef] text-[#6c757d] hover:bg-[#d1d5db]"
                                    }`}
                                    onClick={() => setViewMode("day")}
                                    title="Day view"
                                >
                                    <Calendar size={20} />
                                </button>
                                <button
                                    className={`flex-1 h-[44px] flex items-center justify-center border-none cursor-pointer transition-all duration-200 rounded-none ${
                                        viewMode === "location"
                                            ? "bg-[#004a8f] text-white"
                                            : "bg-[#e9ecef] text-[#6c757d] hover:bg-[#d1d5db]"
                                    }`}
                                    onClick={() => setViewMode("location")}
                                    title="Location view"
                                >
                                    <MapPin size={20} />
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* ─── MAIN CONTENT ─── */}
                    <div className="flex-1 min-w-0 w-full">

                        {/* 1. TIME VIEW (Timeline) */}
                        {viewMode === "time" && (
                            <>
                                {/* Day Tabs */}
                                <div className="flex bg-[#e2e5e8] border-b border-[#dde3ea] w-full mb-6 rounded-none overflow-hidden" role="tablist">
                                    <button
                                        role="tab"
                                        aria-selected={activeDay === "friday"}
                                        className={`flex-1 py-[15px] px-6 font-display text-[14px] font-bold tracking-wider uppercase border-none cursor-pointer transition-all duration-200 ${
                                            activeDay === "friday" && dayFilter === "Please select"
                                                ? "bg-[#b0b7bd] text-[#05264A]"
                                                : "bg-transparent text-[#5f6b76] hover:bg-[#d1d5db] hover:text-[#05264A]"
                                        }`}
                                        onClick={() => { setActiveDay("friday"); setDayFilter("Please select"); }}
                                    >
                                        Friday 29th May
                                    </button>
                                    <button
                                        role="tab"
                                        aria-selected={activeDay === "saturday"}
                                        className={`flex-1 py-[15px] px-6 font-display text-[14px] font-bold tracking-wider uppercase border-none cursor-pointer transition-all duration-200 ${
                                            activeDay === "saturday" && dayFilter === "Please select"
                                                ? "bg-[#b0b7bd] text-[#05264A]"
                                                : "bg-transparent text-[#5f6b76] hover:bg-[#d1d5db] hover:text-[#05264A]"
                                        }`}
                                        onClick={() => { setActiveDay("saturday"); setDayFilter("Please select"); }}
                                    >
                                        Saturday 30th May
                                    </button>
                                </div>

                                <div className="flex flex-col gap-0 w-full">
                                    {groupedByTime.size === 0 && (
                                        <div className="text-center p-15 bg-white rounded-none border border-[#d1d5db]">
                                            <p className="text-[#6c757d] mb-5 text-[15px] font-body">No sessions match your search criteria.</p>
                                            <button onClick={clearAll} className="bg-[#004a8f] border-none px-8 py-3 text-[14px] font-bold cursor-pointer text-white uppercase tracking-wider font-display hover:bg-[#003d78] transition-colors duration-200">Clear Filters</button>
                                        </div>
                                    )}

                                    {[...groupedByTime.entries()].map(([time, sessions]) => (
                                        <div key={time} className="grid grid-cols-[110px_1fr] max-sm:grid-cols-1 border border-[#dee2e6] border-b-0 last:border-b bg-white">
                                            {/* Time Header */}
                                            <div className="bg-[#e9ecef] border-r border-[#dee2e6] max-sm:border-r-0 max-sm:border-b p-5 flex items-start justify-end max-sm:justify-start font-display text-[16px] font-bold text-[#011b2e] tracking-wide whitespace-nowrap">
                                                {time}
                                            </div>

                                            {/* Sessions stack */}
                                            <div className="flex flex-col divide-y divide-[#dee2e6]">
                                                {sessions.map((s) => (
                                                    <SessionCard key={s.id} s={s} />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* 2. DAY VIEW (Side-by-side days layout) */}
                        {viewMode === "day" && (
                            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6 items-start">
                                {/* Friday Column */}
                                <div className="flex flex-col gap-4">
                                    <h2 className="font-display text-[22px] font-bold uppercase text-center py-3 bg-[#e9ecef] border border-[#dee2e6] text-[#011b2e] m-0">
                                        Friday 29th May
                                    </h2>
                                    <div className="flex flex-col gap-4">
                                        {filtered.filter(s => s.day === "friday").length === 0 ? (
                                            <p className="text-center text-[#6c757d] py-6 font-body text-sm bg-white border border-[#dee2e6]">No sessions on Friday match.</p>
                                        ) : (
                                            filtered.filter(s => s.day === "friday").map(s => (
                                                <SessionCard key={s.id} s={s} />
                                            ))
                                        )}
                                    </div>
                                </div>

                                {/* Saturday Column */}
                                <div className="flex flex-col gap-4">
                                    <h2 className="font-display text-[22px] font-bold uppercase text-center py-3 bg-[#e9ecef] border border-[#dee2e6] text-[#011b2e] m-0">
                                        Saturday 30th May
                                    </h2>
                                    <div className="flex flex-col gap-4">
                                        {filtered.filter(s => s.day === "saturday").length === 0 ? (
                                            <p className="text-center text-[#6c757d] py-6 font-body text-sm bg-white border border-[#dee2e6]">No sessions on Saturday match.</p>
                                        ) : (
                                            filtered.filter(s => s.day === "saturday").map(s => (
                                                <SessionCard key={s.id} s={s} />
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 3. LOCATION VIEW (Room-by-room layout) */}
                        {viewMode === "location" && (
                            <>
                                {/* Day Tabs to select date since location shows one day */}
                                <div className="flex bg-[#e2e5e8] border-b border-[#dde3ea] w-full mb-6 rounded-none overflow-hidden" role="tablist">
                                    <button
                                        role="tab"
                                        aria-selected={activeDay === "friday"}
                                        className={`flex-1 py-[15px] px-6 font-display text-[14px] font-bold tracking-wider uppercase border-none cursor-pointer transition-all duration-200 ${
                                            activeDay === "friday" && dayFilter === "Please select"
                                                ? "bg-[#b0b7bd] text-[#05264A]"
                                                : "bg-transparent text-[#5f6b76] hover:bg-[#d1d5db] hover:text-[#05264A]"
                                        }`}
                                        onClick={() => { setActiveDay("friday"); setDayFilter("Please select"); }}
                                    >
                                        Friday 29th May
                                    </button>
                                    <button
                                        role="tab"
                                        aria-selected={activeDay === "saturday"}
                                        className={`flex-1 py-[15px] px-6 font-display text-[14px] font-bold tracking-wider uppercase border-none cursor-pointer transition-all duration-200 ${
                                            activeDay === "saturday" && dayFilter === "Please select"
                                                ? "bg-[#b0b7bd] text-[#05264A]"
                                                : "bg-transparent text-[#5f6b76] hover:bg-[#d1d5db] hover:text-[#05264A]"
                                        }`}
                                        onClick={() => { setActiveDay("saturday"); setDayFilter("Please select"); }}
                                    >
                                        Saturday 30th May
                                    </button>
                                </div>

                                <div className="grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-6 items-start">
                                    {LOCATIONS.slice(1).map((loc) => {
                                        const locationSessions = filtered.filter(s => s.location === loc);
                                        return (
                                            <div key={loc} className="flex flex-col gap-4 w-full">
                                                <h2 className="font-display text-[18px] font-bold uppercase text-center py-3 bg-[#e9ecef] border border-[#dee2e6] text-[#011b2e] m-0 truncate px-2" title={loc}>
                                                    {loc}
                                                </h2>
                                                <div className="flex flex-col gap-4">
                                                    {locationSessions.length === 0 ? (
                                                        <p className="text-center text-[#6c757d] py-6 font-body text-xs bg-white border border-[#dee2e6]">No sessions in this room.</p>
                                                    ) : (
                                                        locationSessions.map(s => (
                                                            <SessionCard key={s.id} s={s} />
                                                        ))
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </section>
        </main>
    );
}