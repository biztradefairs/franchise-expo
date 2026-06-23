"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ContactUs.module.css";
import PageBanner from "@/components/PageBanner";

const contactCards = [
    {
        category: "Sales",
        title: "Request Exhibitor Info",
        name: "Justin Wood",
        role: "Senior Account Executive",
        email: "Justin.Wood@Comexposium.com",
        phone: "240.398.1385",
        image:
            "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_286_307.jpg",
    },

    {
        category: "Marketing",
        title: "Attendee and Conference Info",
        name: "Linda Thompson",
        role: "Marketing Director",
        email: "Linda.Thompson@comexposium.com",
        phone: "201.881.1646",
        image:
            "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_286_311.png",
    },

    {
        category: "Customer Relations",
        title: "Exhibitor Services and Operations",
        name: "Murphy Connolly",
        role: "Director of Operations & Services",
        email: "Murphy.Connolly@comexposium.com",
        phone: "631.335.5696",
        image:
            "https://www.franchiseexpo.com/media/cache/mod_latestnewsenhanced/thumb_286_314.png",
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
        // Add your form submission logic here
    };

    return (
        <main className={styles.page}>
            {/* HERO */}
            <PageBanner title="Contact Us" />

            {/* CONTACT CARDS */}
            <section className={styles.cardsSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {contactCards.map((item, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.imageWrap}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className={styles.image}
                                    />
                                    <span className={styles.category}>
                                        {item.category}
                                    </span>
                                </div>

                                <div className={styles.cardContent}>
                                    <p className={styles.cardTitle}>
                                        {item.title}
                                    </p>
                                    <h3>{item.name}</h3>
                                    <p className={styles.role}>
                                        {item.role}
                                    </p>
                                    <div className={styles.info}>
                                        <span>E: {item.email}</span>
                                        <span>T: {item.phone}</span>
                                    </div>
                                    <a
                                        href={`mailto:${item.email}`}
                                        className={styles.button}
                                    >
                                        Email Me
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section className={styles.formSection}>
                <div className={styles.container}>
                    <div className={styles.formWrapper}>
                        <div className={styles.formLeft}>
                            <span>GET IN TOUCH</span>
                            <h2>We'd Love to Hear From You</h2>
                            <p>
                                Fill out the form and our team will get back to you within 24 hours.
                                Whether you're looking to exhibit, attend, or partner with us, we're here to help.
                            </p>
                        </div>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Full Name *</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={formData.fullName}
                                        onChange={(e) =>
                                            setFormData({ ...formData, fullName: e.target.value })
                                        }
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Company *</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your company name"
                                        value={formData.company}
                                        onChange={(e) =>
                                            setFormData({ ...formData, company: e.target.value })
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Phone *</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({ ...formData, phone: e.target.value })
                                        }
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Email *</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Which expos are you interested in?</label>
                                <div className={styles.checkboxGrid}>
                                    {events.map((event) => (
                                        <label key={event} className={styles.checkbox}>
                                            <input
                                                type="checkbox"
                                                checked={formData.interests.includes(event)}
                                                onChange={() => handleCheckboxChange(event)}
                                            />
                                            <span>{event}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Do you have any comments?</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us more about your inquiry..."
                                    value={formData.comments}
                                    onChange={(e) =>
                                        setFormData({ ...formData, comments: e.target.value })
                                    }
                                />
                            </div>

                            <button type="submit">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}