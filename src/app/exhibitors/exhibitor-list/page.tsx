"use client";

import PageBanner from "@/components/PageBanner";
import styles from "./ExhibitorList.module.css";
import {
    Search,
    ChevronDown,
    ChevronUp,
    X,
    Grid,
    List,
    Monitor,
    ShoppingCart,
    Video,
    MapPin,
    Building2,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const alphabet = ["#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function toSlug(name: string) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}

// Dummy image function - generates consistent colors based on name
function getDummyImage(name: string) {
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
        '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
        '#F8C471', '#82E0AA', '#F1948A', '#85929E', '#73C6B6',
        '#E59866', '#AF7AC5', '#5DADE2', '#58D68D', '#F4D03F'
    ];
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
}

// Get initials for logo placeholder
function getInitials(name: string) {
    return name
        .split(' ')
        .slice(0, 2)
        .map(word => word[0])
        .join('')
        .toUpperCase();
}

const exhibitors = [
    { name: "101 Chicken", stand: "423", featured: true, type: "Food & Beverage", category: "FRANCHISOR", hasIcons: { monitor: true, cart: true, video: true } },
    { name: "7-Eleven", stand: "230", featured: true, type: "Retail", category: "FRANCHISOR", hasIcons: { monitor: true, cart: false, video: false } },
    { name: "A La Mode Shoppe", stand: "SMB Pavill...", featured: true, type: "Food & Beverage", category: "FRANCHISOR", hasIcons: { monitor: true, cart: false, video: false } },
    { name: "Accurate Franchising", stand: "437", featured: true, type: "Consulting", category: "FRANCHISOR", hasIcons: { monitor: true, cart: false, video: true } },
    { name: "Almera Tech Services", stand: "321", featured: true, type: "Technology", category: "FRANCHISOR", hasIcons: { monitor: true, cart: false, video: false } },
    { name: "Amorino", stand: "119", featured: true, type: "Food & Beverage", category: "FRANCHISOR", hasIcons: { monitor: false, cart: false, video: false } },
    { name: "Angelina Italian Bakery", stand: "241", featured: true, type: "Food & Beverage", category: "FRANCHISOR", hasIcons: { monitor: true, cart: true, video: false } },
    { name: "B-Fresh", stand: "311", featured: true, type: "Health & Wellness", category: "FRANCHISOR", hasIcons: { monitor: false, cart: false, video: false } },
    { name: "BattleKart", stand: "505", featured: true, type: "Entertainment", category: "FRANCHISOR", hasIcons: { monitor: true, cart: false, video: true } },
    { name: "bb.q Chicken", stand: "414", featured: true, type: "Food & Beverage", category: "FRANCHISOR", hasIcons: { monitor: true, cart: true, video: true } },
    { name: "BBFRY", stand: "203", featured: true, type: "Food & Beverage", category: "FRANCHISOR", hasIcons: { monitor: true, cart: true, video: false } },
    { name: "BeTheBoss.com", stand: "Gold Spons...", featured: true, type: "Franchise Portal", category: "SPONSOR", hasIcons: { monitor: false, cart: false, video: false } },
    { name: "Big Frog Custom T-Shirts & More", stand: "302", featured: true, type: "Retail", category: "FRANCHISOR", hasIcons: { monitor: true, cart: false, video: true } },
    { name: "Big Sky Franchise Team", stand: "255", featured: true, type: "Consulting", category: "SUPPLIER", hasIcons: { monitor: false, cart: false, video: false } },
    { name: "Billy's Downtown Diner", stand: "102", featured: true, type: "Food & Beverage", category: "FRANCHISOR", hasIcons: { monitor: true, cart: false, video: false } },
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
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");
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

    // Dummy logo component
    const DummyLogo = ({ name, size = 80 }: { name: string; size?: number }) => {
        const bgColor = getDummyImage(name);
        const initials = getInitials(name);
        return (
            <div
                className={styles.dummyLogo}
                style={{
                    backgroundColor: bgColor,
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <span className={styles.dummyLogoText} style={{ fontSize: size * 0.4 }}>
                    {initials}
                </span>
            </div>
        );
    };

    return (
        <main className={styles.page}>
            <PageBanner title="Exhibitor List" />

            <section className={styles.exhibitorSection}>
                <div className={styles.layout}>

                    {/* SIDEBAR */}
                    <aside className={styles.sidebar}>
                        <div className={styles.sideSearch}>
                            <Search size={16} />
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery("")}><X size={14} /></button>
                            )}
                        </div>

                        <div className={styles.alphabetGrid}>
                            {alphabet.map(letter => (
                                <button
                                    key={letter}
                                    onClick={() => setActiveLetter(activeLetter === letter ? null : letter)}
                                    className={`${styles.letterBtn} ${activeLetter === letter ? styles.active : ""}`}
                                >
                                    {letter}
                                </button>
                            ))}
                            <button className={styles.clearLetterBtn} onClick={() => setActiveLetter(null)}>
                                CLEAR
                            </button>
                        </div>

                        <div className={styles.sideFilterGroup}>
                            <label>Type</label>
                            <div className={styles.selectWrapper}>
                                <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                                    {types.map(t => <option key={t}>{t}</option>)}
                                </select>
                                <ChevronDown size={14} />
                            </div>
                        </div>

                        <div className={styles.sideFilterGroup}>
                            <label>Exhibitor Categories</label>
                            <div className={styles.selectWrapper}>
                                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                                    {categories.map(c => <option key={c}>{c}</option>)}
                                </select>
                                <ChevronDown size={14} />
                            </div>
                        </div>

                        <div className={styles.filterLogicRow}>
                            <span className={styles.filtersLabel}>Filters:</span>
                            <button
                                className={`${styles.logicBtn} ${filterLogic === "AND" ? styles.logicActive : ""}`}
                                onClick={() => setFilterLogic("AND")}
                            >AND</button>
                            <button
                                className={`${styles.logicBtn} ${filterLogic === "OR" ? styles.logicActive : ""}`}
                                onClick={() => setFilterLogic("OR")}
                            >OR</button>
                            <span className={styles.infoIcon}>ℹ</span>
                        </div>

                        <div className={styles.sideShowing}>
                            <span>Showing: <strong>{filteredExhibitors.length} results</strong></span>
                        </div>

                        {hasActiveFilters && (
                            <button onClick={clearFilters} className={styles.clearAllBtn}>CLEAR ALL</button>
                        )}

                        <div className={styles.sideView}>
                            <span className={styles.viewLabel}>View</span>
                            <div className={styles.viewToggleGroup}>
                                <button
                                    className={`${styles.viewBtn} ${viewMode === "grid" ? styles.viewActive : ""}`}
                                    onClick={() => setViewMode("grid")}
                                    title="Grid view"
                                >
                                    <Grid size={18} />
                                </button>
                                <button
                                    className={`${styles.viewBtn} ${viewMode === "list" ? styles.viewActive : ""}`}
                                    onClick={() => setViewMode("list")}
                                    title="List view"
                                >
                                    <List size={18} />
                                </button>
                            </div>
                            <button
                                className={`${styles.viewListBtn} ${viewMode === "list" ? styles.viewListActive : ""}`}
                                onClick={() => setViewMode("list")}
                            >
                                View List
                            </button>
                        </div>
                    </aside>

                    {/* MAIN CONTENT */}
                    <div className={styles.mainContent}>

                        {/* LIST VIEW */}
                        {viewMode === "list" && (
                            <div className={styles.listView}>
                                {filteredExhibitors.map((item, index) => {
                                    const slug = toSlug(item.name);
                                    const isExpanded = expandedSlug === slug;
                                    return (
                                        <div key={index} className={styles.listItem}>
                                            {/* ROW */}
                                            <div
                                                className={`${styles.listRow} ${isExpanded ? styles.listRowExpanded : ""}`}
                                                onClick={() => toggleExpand(item.name)}
                                            >
                                                <span className={styles.featuredBadge}>FEATURED</span>
                                                <span className={styles.listName}>{item.name}</span>
                                                <div className={styles.listIcons}>
                                                    {item.hasIcons.monitor && <Monitor size={16} />}
                                                    {item.hasIcons.cart && <ShoppingCart size={16} />}
                                                    {item.hasIcons.video && <Video size={16} />}
                                                </div>
                                                <div className={styles.listStand}>
                                                    <span className={styles.standLabel}>Stand:</span>
                                                    <span className={styles.standValue}>{item.stand}</span>
                                                </div>
                                                <span className={styles.expandIcon}>
                                                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                                </span>
                                            </div>

                                            {/* DROPDOWN CARD - WITH DUMMY LOGO */}
                                            {isExpanded && (
                                                <div className={styles.dropdownPanel}>
                                                    <div className={styles.dropdownCard}>
                                                        <div className={styles.dropdownLogoBox}>
                                                            <DummyLogo name={item.name} size={80} />
                                                        </div>
                                                        <div className={styles.dropdownInfo}>
                                                            <span className={styles.dropdownCategory}>{item.category}</span>
                                                            <h3 className={styles.dropdownName}>{item.name}</h3>
                                                            <div className={styles.dropdownStand}>
                                                                <MapPin size={13} />
                                                                <span>Stand: {item.stand}</span>
                                                            </div>
                                                            <span className={styles.dropdownType}>{item.type}</span>
                                                        </div>
                                                        <button
                                                            className={styles.viewDetailsBtn}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                navigateTo(item.name);
                                                            }}
                                                        >
                                                            View Details
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* GRID VIEW - WITH DUMMY LOGO */}
                        {viewMode === "grid" && (
                            <div className={styles.gridView}>
                                {filteredExhibitors.map((item, index) => (
                                    <div
                                        key={index}
                                        className={styles.gridCard}
                                        onClick={() => navigateTo(item.name)}
                                    >
                                        <div className={styles.cardCategory}>{item.category}</div>
                                        <div className={styles.cardLogo}>
                                            <DummyLogo name={item.name} size={70} />
                                        </div>
                                        <div className={styles.cardBody}>
                                            <h3 className={styles.cardName}>{item.name}</h3>
                                            <div className={styles.cardStandRow}>
                                                <span className={styles.cardStandLabel}>Stand:</span>
                                                <span className={styles.cardStandValue}>{item.stand}</span>
                                            </div>
                                            <div className={styles.cardIcons}>
                                                {item.hasIcons.monitor && <Monitor size={14} />}
                                                {item.hasIcons.cart && <ShoppingCart size={14} />}
                                                {item.hasIcons.video && <Video size={14} />}
                                            </div>
                                        </div>
                                        <div className={styles.cardFeaturedBadge}>FEATURED</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {filteredExhibitors.length === 0 && (
                            <div className={styles.noResults}>
                                <p>No exhibitors found matching your criteria.</p>
                                <button onClick={clearFilters}>Clear Filters</button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}