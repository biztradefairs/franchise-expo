// app/ife/exhibitors/exhibitor-list/[slug]/page.tsx

"use client";

import styles from "./ExhibitorDetails.module.css";
import { Mail,  } from "lucide-react";
import { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const exhibitors: Record<string, any> = {
    "101-chicken": {
        name: "101 Chicken",
        bannerTitle: "AWARD-WINNING\nKOREAN FRIED CHICKEN",
        bannerBg: "#cc1f2e",
        bannerImage: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&auto=format&fit=crop",
        logo: "101\nCHICKEN",
        stand: "423",
        type: "FRANCHISOR",
        exhibitorCategories: ["FOOD: BAKED...", "FOOD: RESTAURANTS"],
        address: {
            street: "2151 Lemoine Avenue",
            city: "Fort Lee",
            state: "NJ",
            zip: "07024",
            country: "United States",
        },
        description: [
            "101 Chicken™, with our award-winning Korean fried chicken, partners with technology to consistently deliver the best tasting and quality K-chicken to our customers.",
            "The 101 in our name, which signifies the binary code (most basic form of computer code), represents what we believe is the foundation of any great food—the recipes and the cook.",
        ],
        products: [
            { image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=200&auto=format&fit=crop", title: "AWARD-WINNING KOREAN FRIED CHICKEN" },
            { image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200&auto=format&fit=crop", title: "EATNOVATION" },
            { image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=200&auto=format&fit=crop", title: "Korean Fried Chicken, Elevated" },
        ],
    },
    "7-eleven": {
        name: "7-Eleven",
        bannerTitle: "CONVENIENCE\nREDEFINED",
        bannerBg: "#e8000d",
        bannerImage: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=600&auto=format&fit=crop",
        logo: "7\nELEVEN",
        stand: "230",
        type: "FRANCHISOR",
        exhibitorCategories: ["RETAIL", "CONVENIENCE"],
        address: { street: "3200 Hackberry Road", city: "Irving", state: "TX", zip: "75063", country: "United States" },
        description: ["7-Eleven is the world's largest convenience store chain, offering franchise opportunities globally."],
        products: [],
    },
    "subway": {
        name: "Subway",
        bannerTitle: "FRESH FOOD.\nFRESH FRANCHISES.",
        bannerBg: "#00703c",
        bannerImage: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&auto=format&fit=crop",
        logo: "SUB\nWAY",
        stand: "230",
        type: "FRANCHISOR",
        exhibitorCategories: ["FOOD: RESTAURANTS", "QSR"],
        address: { street: "325 Sub Way", city: "Milford", state: "CT", zip: "06461", country: "United States" },
        description: ["Subway® is one of the world's largest fast food restaurant brands, offering fresh sandwiches, wraps, and salads."],
        products: [],
    },
};

// Fallback: generate a basic entry for any slug not in the map
function getExhibitor(slug: string) {
    if (exhibitors[slug]) return exhibitors[slug];
    // Build a generic entry from the slug
    const name = slug
        .split("-")
        .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    return {
        name,
        bannerTitle: name.toUpperCase(),
        bannerBg: "#1a3a5c",
        bannerImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop",
        logo: name.charAt(0),
        stand: "—",
        type: "FRANCHISOR",
        exhibitorCategories: [],
        address: { street: "", city: "", state: "", zip: "", country: "" },
        description: ["Details coming soon."],
        products: [],
    };
}

const TABS = ["PRODUCTS", "ARTICLES", "VIDEOS", "RESOURCES"];

export default function ExhibitorDetails({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const [activeTab, setActiveTab] = useState("PRODUCTS");
    const exhibitor = getExhibitor(slug);

    return (
        <main className={styles.page}>

            {/* HERO BANNER */}
            <div className={styles.heroBanner} style={{ background: exhibitor.bannerBg }}>
                <div className={styles.heroLeft}>
                    <h1 className={styles.heroTitle}>
                        {exhibitor.bannerTitle.split("\n").map((line: string, i: number) => (
                            <span key={i}>{line}<br /></span>
                        ))}
                    </h1>
                </div>
                <div className={styles.heroRight}>
                    <img src={exhibitor.bannerImage} alt={exhibitor.name} className={styles.heroImage} />
                </div>

                {/* Bottom bar */}
                <div className={styles.heroBar}>
                    <div className={styles.logoCircle}>
                        <span className={styles.logoCategory}>FRANCHISOR</span>
                        <span className={styles.logoText}>{exhibitor.logo}</span>
                    </div>
                    <div className={styles.heroBarRight}>
                        <a href="#" className={styles.socialIcon}><FaFacebookF size={18} /></a>
                        <a href="#" className={styles.socialIcon}><FaInstagram size={18} /></a>
                        <span className={styles.featuredBadge}>FEATURED</span>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className={styles.contentArea}>

                {/* Stand */}
                <div className={styles.standRow}>
                    <span>Stand: <strong>{exhibitor.stand}</strong></span>
                </div>

                <div className={styles.contentGrid}>
                    {/* LEFT */}
                    <div className={styles.infoCol}>
                        <h2 className={styles.exhibitorName}>{exhibitor.name}</h2>
                        {exhibitor.description.map((para: string, i: number) => (
                            <p key={i} className={styles.description}>{para}</p>
                        ))}

                        {exhibitor.address.street && (
                            <div className={styles.addressBlock}>
                                <h4 className={styles.addressTitle}>Address</h4>
                                <p className={styles.addressText}>
                                    {exhibitor.address.street}<br />
                                    {exhibitor.address.city}<br />
                                    {exhibitor.address.state}<br />
                                    {exhibitor.address.zip}<br />
                                    {exhibitor.address.country}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* RIGHT sidebar */}
                    <div className={styles.sidebarCol}>
                        <button className={styles.emailBtn}>
                            <Mail size={16} />
                            EMAIL
                        </button>

                        <div className={styles.sideSection}>
                            <span className={styles.sideLabel}>Type</span>
                            <span className={styles.typeBadge}>{exhibitor.type}</span>
                        </div>

                        {exhibitor.exhibitorCategories.length > 0 && (
                            <div className={styles.sideSection}>
                                <span className={styles.sideLabel}>Exhibitor Categories</span>
                                <div className={styles.categoryTags}>
                                    {exhibitor.exhibitorCategories.map((cat: string, i: number) => (
                                        <span key={i} className={styles.categoryTag}>{cat}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* TABS */}
                <div className={styles.tabs}>
                    {TABS.map(tab => (
                        <button
                            key={tab}
                            className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {activeTab === "PRODUCTS" && exhibitor.products.length > 0 && (
                    <div className={styles.productsGrid}>
                        {exhibitor.products.map((product: any, i: number) => (
                            <div key={i} className={styles.productCard}>
                                <div className={styles.productImageWrap}>
                                    <img src={product.image} alt={product.title} className={styles.productImage} />
                                </div>
                                <p className={styles.productTitle}>{product.title}</p>
                            </div>
                        ))}
                    </div>
                )}

                {(activeTab !== "PRODUCTS" || exhibitor.products.length === 0) && (
                    <div className={styles.emptyTab}>
                        <p>No {activeTab.toLowerCase()} available.</p>
                    </div>
                )}

            </div>
        </main>
    );
}