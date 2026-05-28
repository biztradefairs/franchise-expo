"use client";

import PageBanner from "@/components/PageBanner";
import styles from "./EmergingBrandPavilion.module.css";

export default function BusinessResourceCenter() {
    return (
        <main className={styles.page}>

            <PageBanner
                title="The Business Resource Center"
                subtitle="Explore a variety of suppliers that are critical in developing your franchise, and form valuable business connections."
            />

            <section className={styles.businessSection}>
                <div className="container">

                    <div className={styles.topGrid}>

                        <div className={styles.leftContent}>
                            <p>
                                International Franchise Expo welcomes you to check out the
                                Business Resource Center! This area is dedicated to present
                                innovative services that will bring your business to the next level!
                            </p>

                            <p>
                                Walk the show floor and explore a range of business suppliers who
                                want to talk with YOU! Have strong conversations that will further
                                develop and fine tune your business. Whether you're looking to learn
                                more about strategy, network and form connections, or how to expand
                                your business, the business resource center will provide you with the
                                skills and knowledge needed to advance in the industry.
                            </p>
                        </div>

                        <div
                            className={styles.rightImage}
                            style={{
                                backgroundImage:
                                    "url('https://www.franchiseexpo.com/images/west/Attendees/Attendee_Info/The_Business_Resource_Center.webp')",
                            }}
                        />
                    </div>

                    <h2 className={styles.mainHeading}>
                        WHY VISIT THE BUSINESS RESOURCE CENTER?
                    </h2>

                    <div className={styles.cardGrid}>

                        <div className={styles.infoCard}>
                            <span className={styles.cardNumber}>1</span>
                            <p>
                                Form connections with suppliers and gather contacts
                            </p>
                        </div>

                        <div className={styles.infoCard}>
                            <span className={styles.cardNumber}>2</span>
                            <p>
                                Discover how to be successful through the secrets of business strategy
                            </p>
                        </div>

                        <div className={styles.infoCard}>
                            <span className={styles.cardNumber}>3</span>
                            <p>
                                Learn about how to successfully expand your business
                            </p>
                        </div>

                        <div className={styles.infoCard}>
                            <span className={styles.cardNumber}>4</span>
                            <p>
                                Have one on one conversations with experts about your personal needs
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className={styles.contactSection}>
                <div className="container">
                    <div className={styles.contactCard}>

                        <h2>GET IN TOUCH</h2>
                        <p>
                            To find out more about exhibiting at the Business Resource Center,
                        </p>

                        <p>
                            please contact{' '}
                            <a
                                href="mailto:Justin.Wood@Comexposium.com"
                                className={styles.emailLink}
                            >
                                Justin.Wood@Comexposium.com
                            </a>
                        </p>

                        <div className={styles.contactInfo}>
                            <h3>Justin Wood</h3>

                            <a href="tel:+12403981385">
                                (240) 398-1385
                            </a>
                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}