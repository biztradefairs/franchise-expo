"use client";

import PageBanner from "@/components/PageBanner";
import {
    Search,
    ChevronDown,
    ChevronUp,
    X,
    LayoutGrid,
    List,
    Monitor,
    ShoppingCart,
    Video,
    FileText,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const alphabet = ["#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function toSlug(name: string) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}

const exhibitors = [
    { name: "101 Chicken", stand: "423", featured: true, type: "Food & Beverage", category: "FRANCHISOR", logo: "https://ik.imagekit.io/livebuzz/production/tr:di-placeholder-image.jpg,w-450/mfv/international-franchise-expo-new-york-2026/exhibitor/5489c156-3e6f-11f1-a1ab-000000000000/system/system_profile_logo.png?version=1776955133", hasIcons: { monitor: true, cart: true, video: true, brochure: true } },
    { name: "7-Eleven", stand: "230", featured: true, type: "Retail", category: "FRANCHISOR", logo: "https://ik.imagekit.io/livebuzz/production/tr:di-placeholder-image.jpg,w-450/mfv/international-franchise-expo-new-york-2026/exhibitor/c5845898-22e6-11f1-8495-000000000000/system/system_profile_logo.png?version=1773851039", hasIcons: { monitor: true, cart: false, video: false, brochure: false } },
    { name: "A La Mode Shoppe", stand: "SMB Pavili...", featured: true, type: "Food & Beverage", category: "FRANCHISOR", logo: "https://ik.imagekit.io/livebuzz/production/tr:di-placeholder-image.jpg,w-450/mfv/international-franchise-expo-new-york-2026/exhibitor/52bba136-23c7-11f1-9785-000000000000/system/system_profile_logo.png?version=1773947449", hasIcons: { monitor: true, cart: false, video: false, brochure: false } },
    { name: "Accurate Franchising", stand: "437", featured: true, type: "Consulting", category: "FRANCHISOR", logo: "https://ik.imagekit.io/livebuzz/production/tr:di-placeholder-image.jpg,w-450/mfv/international-franchise-expo-new-york-2026/exhibitor/df596bd8-2475-11f1-beaa-000000000000/system/system_profile_logo.png?version=1777322234", hasIcons: { monitor: true, cart: false, video: true, brochure: false } },
    { name: "Almera Tech Services", stand: "321", featured: true, type: "Technology", category: "FRANCHISOR", logo: "https://ik.imagekit.io/livebuzz/production/tr:di-placeholder-image.jpg,w-450/mfv/international-franchise-expo-new-york-2026/exhibitor/e2066eb0-1d65-11f1-ad65-000000000000/system/system_profile_logo.png?version=1773245913", hasIcons: { monitor: true, cart: false, video: true, brochure: false } },
    { name: "Amorino", stand: "119", featured: true, type: "Food & Beverage", category: "FRANCHISOR", logo: "https://ik.imagekit.io/livebuzz/production/tr:di-placeholder-image.jpg,w-450/mfv/international-franchise-expo-new-york-2026/exhibitor/41698174-47fc-11f1-9714-000000000000/system/system_profile_logo.png?version=1777928429", hasIcons: { monitor: true, cart: false, video: false, brochure: false } },
    { name: "Angelina Italian Bakery", stand: "241", featured: true, type: "Food & Beverage", category: "FRANCHISOR", logo: "https://ik.imagekit.io/livebuzz/production/tr:di-placeholder-image.jpg,w-450/mfv/international-franchise-expo-new-york-2026/exhibitor/010e2efc-2a17-11f1-9834-000000000000/system/system_profile_logo.png?version=1774641748", hasIcons: { monitor: true, cart: true, video: true, brochure: false } },
    { name: "B-Fresh", stand: "311", featured: true, type: "Health & Wellness", category: "FRANCHISOR", logo: "https://ik.imagekit.io/livebuzz/production/tr:di-placeholder-image.jpg,w-450/mfv/international-franchise-expo-new-york-2026/exhibitor/3aed8644-9e04-11f0-a1bc-000000000000/system/system_profile_logo.png?version=1764606613", hasIcons: { monitor: false, cart: false, video: false, brochure: false } },
    { name: "BattleKart", stand: "505", featured: true, type: "Entertainment", category: "FRANCHISOR", logo: "https://ik.imagekit.io/livebuzz/production/tr:di-placeholder-image.jpg,w-450/mfv/international-franchise-expo-new-york-2026/exhibitor/d0772230-4fd7-11f1-ad23-000000000000/system/system_profile_logo.png?version=1778792386", hasIcons: { monitor: true, cart: false, video: true, brochure: false } },
    { name: "bb.q Chicken", stand: "414", featured: true, type: "Food & Beverage", category: "FRANCHISOR", logo: "https://ik.imagekit.io/livebuzz/production/tr:di-placeholder-image.jpg,w-450/mfv/international-franchise-expo-new-york-2026/exhibitor/41a930a0-9e04-11f0-b368-000000000000/system/system_profile_logo.png?version=1764606731", hasIcons: { monitor: true, cart: true, video: true, brochure: false } },
    { name: "BBFRY", stand: "203", featured: true, type: "Food & Beverage", category: "FRANCHISOR", logo: "https://ik.imagekit.io/livebuzz/production/tr:di-placeholder-image.jpg,w-450/mfv/international-franchise-expo-new-york-2026/exhibitor/90d69f34-4afa-11f1-b861-000000000000/system/system_profile_logo.png?version=1778257555", hasIcons: { monitor: true, cart: true, video: false, brochure: false } },
    { name: "BeTheBoss.com", stand: "Gold Spons...", featured: true, type: "Franchise Portal", category: "SPONSOR", logo: "https://ik.imagekit.io/livebuzz/production/tr:di-placeholder-image.jpg,w-450/mfv/international-franchise-expo-new-york-2026/exhibitor/4e1bcdfc-9e04-11f0-90cd-000000000000/system/system_profile_logo.png?version=1770671897", hasIcons: { monitor: false, cart: false, video: false, brochure: false } },
    { name: "Big Frog Custom T-Shirts & More", stand: "302", featured: true, type: "Retail", category: "FRANCHISOR", logo: "https://ik.imagekit.io/livebuzz/production/tr:di-placeholder-image.jpg,w-450/mfv/international-franchise-expo-new-york-2026/exhibitor/af2fa022-c961-11f0-ba31-000000000000/system/system_profile_logo.png?version=1764605911", hasIcons: { monitor: true, cart: false, video: true, brochure: false } },
    { name: "Big Sky Franchise Team", stand: "255", featured: true, type: "Consulting", category: "SUPPLIER", logo: "https://ik.imagekit.io/livebuzz/production/tr:di-placeholder-image.jpg,w-450/mfv/international-franchise-expo-new-york-2026/exhibitor/571d9d36-9e04-11f0-b67d-000000000000/system/system_profile_logo.png?version=1764609309", hasIcons: { monitor: false, cart: false, video: false, brochure: false } },
    { name: "Billy's Downtown Diner", stand: "102", featured: true, type: "Food & Beverage", category: "FRANCHISOR", logo: "https://ik.imagekit.io/livebuzz/production/tr:di-placeholder-image.jpg,w-450/mfv/international-franchise-expo-new-york-2026/exhibitor/f8d81606-399a-11f1-b4e3-000000000000/system/system_profile_logo.png?version=1776347350", hasIcons: { monitor: true, cart: false, video: false, brochure: false } },
];

const types = ["Please select", "Food & Beverage", "Retail", "Consulting", "Technology", "Health & Wellness", "Entertainment", "Franchise Portal"];
const categories = ["Please select", "FRANCHISOR", "SUPPLIER", "SPONSOR"];

export default function ExhibitorList() {
    const router = useRouter();
    const [activeLetter, setActiveLetter] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("Please select");
    const [selectedCategory, setSelectedCategory] = useState("Please select");
    const [filterLogic, setFilterLogic] = useState<"AND" | "OR">("AND");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

    const navigateTo = (name: string) => {
        router.push(`/exhibitors/exhibitor-list/${toSlug(name)}`);
    };

    const toggleExpand = (name: string) => {
        const slug = toSlug(name);
        setExpandedSlug(prev => (prev === slug ? null : slug));
    };

    const filteredExhibitors = exhibitors.filter(ex => {
        const matchSearch = !searchQuery || ex.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchType = selectedType === "Please select" || ex.type === selectedType;
        const matchCategory = selectedCategory === "Please select" || ex.category === selectedCategory;
        const matchLetter = !activeLetter
            ? true
            : activeLetter === "#"
                ? !isNaN(parseInt(ex.name.charAt(0)))
                : ex.name.charAt(0).toUpperCase() === activeLetter;

        if (filterLogic === "AND") {
            return matchSearch && matchType && matchCategory && matchLetter;
        } else {
            return (matchSearch || matchType || matchCategory) && matchLetter;
        }
    });

    const clearFilters = () => {
        setActiveLetter(null);
        setSearchQuery("");
        setSelectedType("Please select");
        setSelectedCategory("Please select");
    };

    const hasActiveFilters = activeLetter || searchQuery || selectedType !== "Please select" || selectedCategory !== "Please select";

    // Icon component for exhibitor features
    const ExhibitorIcons = ({ icons, size = 16 }: { icons: typeof exhibitors[0]['hasIcons']; size?: number }) => (
        <div className="flex items-center gap-[3px]">
            {icons.monitor && <span className="w-[18px] h-[18px] rounded-[3px] bg-[#18b7d0] flex items-center justify-center" title="Virtual Booth"><Monitor size={11} className="text-white" /></span>}
            {icons.cart && <span className="w-[18px] h-[18px] rounded-[3px] bg-[#6c757d] flex items-center justify-center" title="Products"><ShoppingCart size={11} className="text-white" /></span>}
            {icons.video && <span className="w-[18px] h-[18px] rounded-[3px] bg-[#6c757d] flex items-center justify-center" title="Videos"><Video size={11} className="text-white" /></span>}
            {icons.brochure && <span className="w-[18px] h-[18px] rounded-[3px] bg-[#6c757d] flex items-center justify-center" title="Brochure"><FileText size={11} className="text-white" /></span>}
        </div>
    );

    return (
        <main className="w-full bg-white">
            <PageBanner title="Exhibitor List" />

            <section className="py-10 px-16 pb-20 max-xl:px-10 max-lg:px-6 max-sm:py-6 max-sm:px-4 max-sm:pb-[60px]">
                <div className="max-w-[1408px] mx-auto flex gap-8 items-start max-lg:flex-col">

                    {/* ─── SIDEBAR ─── */}
                    <aside className="w-[240px] shrink-0 flex flex-col gap-0 max-lg:w-full">
                        {/* Search */}
                        <div className="flex items-center gap-2 bg-white border border-[#d1d5db] h-[48px] rounded-sm px-3 mb-5">
                            <Search size={18} className="text-[#9ca3af] shrink-0" />
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 border-none outline-none text-[14px] font-normal text-[#222] bg-transparent min-w-0 font-body placeholder:text-[#9ca3af]"
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery("")} className="bg-transparent border-none cursor-pointer p-0 text-[#9ca3af] flex items-center hover:text-[#222]"><X size={16} /></button>
                            )}
                        </div>

                        {/* Alphabet filter */}
                        <div className="flex flex-wrap gap-[5px] mb-5 max-lg:gap-1">
                            {alphabet.map(letter => (
                                <button
                                    key={letter}
                                    onClick={() => setActiveLetter(activeLetter === letter ? null : letter)}
                                    className={`w-[27px] h-[27px] text-[13px] font-semibold border-none rounded-[3px] cursor-pointer flex items-center justify-center transition-all duration-200 p-0 leading-none ${
                                        activeLetter === letter
                                            ? "bg-[#004a8f] text-white"
                                            : "bg-transparent text-[#222] hover:bg-[#e9ecef]"
                                    }`}
                                >
                                    {letter}
                                </button>
                            ))}
                            <button
                                className="h-[27px] px-2 text-[12px] font-normal text-[#6c757d] bg-transparent border-none rounded-[3px] cursor-pointer flex items-center justify-center hover:bg-[#e9ecef] transition-all duration-200 uppercase tracking-wide"
                                onClick={() => setActiveLetter(null)}
                            >
                                CLEAR
                            </button>
                        </div>

                        {/* Type dropdown */}
                        <div className="flex flex-col gap-[6px] mb-4">
                            <label className="text-[14px] font-bold text-[#222] font-body">Type</label>
                            <div className="relative">
                                <select
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    className="appearance-none w-full bg-white border border-[#d1d5db] rounded-sm h-[48px] pl-3 pr-8 text-[14px] font-normal text-[#6c757d] cursor-pointer outline-none font-body focus:border-[#0067b2]"
                                >
                                    {types.map(t => <option key={t}>{t}</option>)}
                                </select>
                                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6c757d] pointer-events-none" />
                            </div>
                        </div>

                        {/* Exhibitor Categories dropdown */}
                        <div className="flex flex-col gap-[6px] mb-5">
                            <label className="text-[14px] font-bold text-[#222] font-body">Exhibitor Categories</label>
                            <div className="relative">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="appearance-none w-full bg-white border border-[#d1d5db] rounded-sm h-[48px] pl-3 pr-8 text-[14px] font-normal text-[#6c757d] cursor-pointer outline-none font-body focus:border-[#0067b2]"
                                >
                                    {categories.map(c => <option key={c}>{c}</option>)}
                                </select>
                                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6c757d] pointer-events-none" />
                            </div>
                        </div>

                        {/* Filters AND/OR */}
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
                                            ? "bg-[#18b7d0] text-white"
                                            : "bg-white text-[#6c757d] hover:bg-[#f0f0f0]"
                                    }`}
                                    onClick={() => setFilterLogic("OR")}
                                >OR</button>
                            </div>
                            <span className="w-[22px] h-[22px] bg-[#004a8f] text-white rounded-full inline-flex items-center justify-center text-[12px] font-bold cursor-help shrink-0">ℹ</span>
                        </div>

                        {/* Showing count */}
                        <div className="text-[14px] text-[#6c757d] mb-2 font-body">
                            <span className="font-bold text-[#222]">Showing:</span> {filteredExhibitors.length} results
                        </div>

                        {/* Clear All */}
                        {hasActiveFilters && (
                            <button
                                onClick={clearFilters}
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
                                        viewMode === "grid"
                                            ? "bg-[#004a8f] text-white"
                                            : "bg-[#e9ecef] text-[#6c757d] hover:bg-[#d1d5db]"
                                    }`}
                                    onClick={() => setViewMode("grid")}
                                    title="Grid view"
                                >
                                    <LayoutGrid size={20} />
                                </button>
                                <button
                                    className={`flex-1 h-[44px] flex items-center justify-center border-none cursor-pointer transition-all duration-200 rounded-none ${
                                        viewMode === "list"
                                            ? "bg-[#004a8f] text-white"
                                            : "bg-[#e9ecef] text-[#6c757d] hover:bg-[#d1d5db]"
                                    }`}
                                    onClick={() => setViewMode("list")}
                                    title="List view"
                                >
                                    <List size={20} />
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* ─── MAIN CONTENT ─── */}
                    <div className="flex-1 min-w-0 w-full">

                        {/* GRID VIEW */}
                        {viewMode === "grid" && (
                            <div className="grid grid-cols-6 max-2xl:grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3">
                                {filteredExhibitors.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border-[3px] border-solid border-[#004a8f] overflow-hidden flex flex-col cursor-pointer transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,74,143,0.15)]"
                                        onClick={() => navigateTo(item.name)}
                                    >
                                        {/* Category label */}
                                        <div className="text-center pt-3 pb-0 px-2">
                                            <span className="text-[10px] font-bold text-[#004a8f] tracking-[0.1em] uppercase font-display">{item.category}</span>
                                        </div>

                                        {/* Logo area */}
                                        <div className="h-[120px] flex items-center justify-center bg-white px-4 py-3">
                                            <img
                                                src={item.logo}
                                                alt={item.name}
                                                className="max-w-full max-h-full object-contain"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                }}
                                            />
                                        </div>

                                        {/* Info section - navy blue background */}
                                        <div className="bg-[#004a8f] p-3 pt-2.5 pb-0 flex-1 flex flex-col">
                                            <h3 className="text-[15px] font-bold text-white mb-1.5 font-display leading-[1.25] m-0 normal-case">{item.name}</h3>
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-[12px] text-white/70 font-normal font-body">Stand:</span>
                                                    <span className="text-[13px] font-bold text-white font-body">{item.stand}</span>
                                                </div>
                                                <ExhibitorIcons icons={item.hasIcons} />
                                            </div>
                                        </div>

                                        {/* FEATURED bar */}
                                        <div className="bg-[#004a8f] border-t border-white/20 text-white text-center text-[12px] font-bold tracking-[0.15em] py-[7px] font-display uppercase">
                                            FEATURED
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* LIST VIEW */}
                        {viewMode === "list" && (
                            <div className="flex flex-col gap-0">
                                {filteredExhibitors.map((item, index) => {
                                    const slug = toSlug(item.name);
                                    const isExpanded = expandedSlug === slug;
                                    return (
                                        <div key={index} className="flex flex-col">
                                            {/* Row */}
                                            <div
                                                className={`flex items-center bg-[#004a8f] px-4 h-[52px] gap-3 cursor-pointer transition-colors duration-150 hover:bg-[#003d78] border-b border-white/10 ${
                                                    isExpanded ? "bg-[#003d78] border-b-0" : ""
                                                }`}
                                                onClick={() => toggleExpand(item.name)}
                                            >
                                                <span className="text-[11px] font-bold text-white bg-[#003d78] px-3 py-[5px] tracking-[0.12em] whitespace-nowrap shrink-0 uppercase font-display">FEATURED</span>
                                                <span className="flex-1 text-[15px] font-bold text-white font-display min-w-0 overflow-hidden text-ellipsis whitespace-nowrap normal-case">{item.name}</span>
                                                <div className="flex items-center gap-1 shrink-0">
                                                    <ExhibitorIcons icons={item.hasIcons} />
                                                </div>
                                                <div className="flex items-center gap-1 shrink-0">
                                                    <span className="text-[13px] text-white/60 font-body">Stand:</span>
                                                    <span className="text-[13px] font-bold text-white font-body">{item.stand}</span>
                                                </div>
                                                <span className="text-white/70 flex items-center shrink-0 ml-1">
                                                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                                </span>
                                            </div>

                                            {/* Expanded panel */}
                                            {isExpanded && (
                                                <div className="border-[3px] border-solid border-[#004a8f] border-t-0 bg-white">
                                                    <div className="p-6 flex flex-col items-center">
                                                        <span className="text-[10px] font-bold text-[#004a8f] tracking-[0.12em] uppercase font-display mb-3">{item.category}</span>
                                                        <div className="w-full max-w-[300px] h-[160px] flex items-center justify-center mb-4">
                                                            <img
                                                                src={item.logo}
                                                                alt={item.name}
                                                                className="max-w-full max-h-full object-contain"
                                                                onError={(e) => {
                                                                    const target = e.target as HTMLImageElement;
                                                                    target.style.display = 'none';
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="w-full h-[44px] bg-[#004a8f] text-white border-none text-[13px] font-bold cursor-pointer uppercase tracking-[0.12em] font-display transition-colors duration-200 hover:bg-[#003d78]"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            navigateTo(item.name);
                                                        }}
                                                    >
                                                        VIEW DETAILS
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {filteredExhibitors.length === 0 && (
                            <div className="text-center p-15 bg-white rounded-sm border border-[#d1d5db]">
                                <p className="text-[#6c757d] mb-5 text-[15px] font-body">No exhibitors found matching your criteria.</p>
                                <button onClick={clearFilters} className="bg-[#004a8f] border-none px-8 py-3 text-[14px] font-bold cursor-pointer text-white uppercase tracking-wider font-display hover:bg-[#003d78] transition-colors duration-200">Clear Filters</button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}