"use client";

import PageBanner from "@/components/PageBanner";
import styles from "./WhyExhibit.module.css";
import {
    Search,
    TrendingUp,
    Users,
    Plus,
} from "lucide-react";
import { ChevronRight } from "lucide-react";

const benefits = [
    {
        icon: <Search size={28} />,
        title: "Exposure",
        description:
            "Engage with visitors pre-show, onsite and post-show through our marketing vehicles, including exhibiting, digital and print marketing, enhanced sponsorships, and appointment setting opportunities.",
    },

    {
        icon: <TrendingUp size={28} />,
        title: "Generate New Leads",
        description:
            "Thousands of qualified candidates attend seeking franchise ownership opportunities including multi-unit ownership, area development, and master franchising.",
    },

    {
        icon: <Users size={28} />,
        title: "Connect With Candidates",
        description:
            "Showcase your franchise and actively engage with prospective candidates throughout your sales funnel using our complimentary guest program.",
    },

    {
        icon: <Plus size={28} />,
        title: "New Product Launches",
        description:
            "Gain exposure for company launches, new initiatives, and press releases through the Expo's targeted network of attendees, sponsors, partners, and associations.",
    },
];

const events = [
    "International Franchise Expo",
    "Franchise Expo South",
    "Franchise Expo Cincinnati",
    "Franchise Expo West",
    "Franchise Expo Dallas",
];

export default function WhyExhibit() {
    return (
        <main className={styles.page}>

            {/* HERO */}

            <PageBanner title="Why Exhibit"/>

            {/* OPPORTUNITIES */}

            <section className={styles.opportunities}>
                <div className={styles.container}>

                    <div className={styles.opportunityGrid}>

                        <div className={styles.opportunityCard}>
                            <h2>Exhibitor Opportunities</h2>

                            <p>
                                <strong>FRANCHISE BRANDS</strong> —
                                Showcase your concept on a global stage.
                                Connect with entrepreneurs and investors
                                exploring franchise ownership opportunities.
                            </p>

                            <p>
                                <strong>INDUSTRY SUPPLIERS</strong> —
                                Position your brand as a trusted partner
                                in the franchise ecosystem and generate
                                valuable leads through targeted exposure.
                            </p>
                        </div>

                        <div className={styles.opportunityCard}>
                            <h2>Sponsorship Opportunities</h2>

                            <p>
                                Non-exhibiting sponsorship opportunities
                                allow suppliers to strategically connect
                                with franchisors and key decision-makers
                                using branding, messaging, and on-site
                                visibility.
                            </p>

                            <p>
                                Sponsors also gain access to exclusive
                                exhibitor networking events and private
                                receptions to expand their franchise
                                network.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* FORM */}

            <section className={styles.formSection}>
                <div className={styles.container}>

                    <h2 className={styles.formTitle}>
                        LEARN MORE ABOUT EXHIBITOR AND SPONSORSHIP OPPORTUNITIES
                    </h2>

                    <form className={styles.form}>

                        <input type="text" placeholder="First Name *" />
                        <input type="text" placeholder="Last Name *" />
                        <input type="email" placeholder="Email *" />
                        <input type="text" placeholder="Company *" />
                        <input type="text" placeholder="Phone" />

                        <div className={styles.checkboxSection}>
                            <label className={styles.label}>
                                Does your company have a FDD? *
                            </label>

                            {["YES", "NO", "Not Sure"].map((item) => (
                                <label key={item} className={styles.checkbox}>
                                    <input type="checkbox" />
                                    <span>{item}</span>
                                </label>
                            ))}
                        </div>

                        <div className={styles.checkboxSection}>
                            <label className={styles.label}>
                                Which event(s) are you interested in participating in? *
                            </label>

                            {events.map((event) => (
                                <label key={event} className={styles.checkbox}>
                                    <input type="checkbox" />
                                    <span>{event}</span>
                                </label>
                            ))}
                        </div>

                        <button
                            type="submit"
                            className={styles.submitBtn}
                        >
                            <span>SUBMIT</span>

                            <span className={styles.ctaBtnArrow}>
                                <ChevronRight size={18} />
                            </span>
                        </button>

                    </form>

                </div>
            </section>

            {/* BENEFITS */}

            <section className={styles.benefits}>
                <div className={styles.container}>

                    <div className={styles.heading}>
                        <span>WHY EXHIBIT</span>

                        <h2>Benefits Of Exhibiting</h2>
                    </div>

                    <div className={styles.benefitsGrid}>
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className={styles.benefitCard}
                            >

                                <div className={styles.icon}>
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}