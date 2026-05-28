"use client";

import PageBanner from "@/components/PageBanner";
import styles from "./AttendeesTestimonials.module.css";

export default function AttendeesTestimonials() {
    return (
        <main className={styles.page}>
            {/* HERO BANNER */}
            <PageBanner
                title="Attendee Testimonials"
                subtitle="Our attendees leave inspired, informed, and ready to take the next step toward franchise ownership. Here's what they had to say about their experience:"
            />

            {/* INTRO SECTION with attendee testimonials - EXACTLY LIKE IMAGE */}
            <section className={styles.introSection}>
                <div className={styles.container}>
                    <div className={styles.introGrid}>
                        {/* LEFT CONTENT - TEXT LIKE THE IMAGE */}
                        <div className={styles.content}>
                            <h2>WHAT DO OUR ATTENDEES HAVE TO SAY?</h2>
                            <p>
                                Our attendees leave inspired, informed, and ready to take the
                                next step toward franchise ownership. Here's what they had to
                                say about their experience:
                            </p>
                            <h3>Stories of Success and Discovery</h3>

                            {/* Quotes exactly like the image - inline text */}
                            <div className={styles.quoteList}>
                                <p className={styles.quoteItem}>
                                    “Attending the expo gave me the clarity I needed to move forward with a franchise” <span className={styles.quoteAuthor}>- C. Syma</span>
                                </p>
                                <p className={styles.quoteItem}>
                                    “The ability to connect directly with franchisors was invaluable. I got all my questions answered in one day!” <span className={styles.quoteAuthor}>- L. Michaels</span>
                                </p>
                            </div>
                        </div>

                        {/* VIDEO WRAPPER */}
                        <div className={styles.videoWrap}>
                            <div className={styles.videoContainer}>
                                <iframe
                                    src="https://player.vimeo.com/video/855383917?h=7a0e97a924"
                                    title="Attendees Testimonials"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            <div className={styles.videoCredit}>
                                Filmed & Produced by <a href="#">FranchiseFilming</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXHIBITOR SECTION */}
            <section className={styles.exhibitorSection}>
                <div className={styles.container}>
                    <div className={styles.exhibitorHeader}>
                        <img
                            src="https://www.franchiseexpo.com/images/template/quote-icon.svg"
                            alt="Quote icon"
                        />
                        <h2>HEAR WHAT OUR EXHIBITORS HAVE TO SAY</h2>
                    </div>

                    <div className={styles.exhibitorTestimonial}>
                        <p className={styles.exhibitorQuote}>
                            "We know that there's a lot of great investors, people looking for franchises coming through the show. MFV Expositions and their expos are very reputable, and out of all the shows we go to this is one of them where we get the best results."
                        </p>
                        <div className={styles.exhibitorAuthor}>
                            <h4>Dan Doulen</h4>
                            <span>Wings and Rings</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION - Your Success Story Starts Here */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Your Success Story Starts Here</h2>
                        <p>
                            Get ready to explore, learn, and take the first step toward
                            achieving your dreams of business ownership.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}