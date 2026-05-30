"use client";

import PageBanner from "@/components/PageBanner";
import styles from "./FloorPlan.module.css";
import {
    ChevronRight,
    // Facebook,
    // Instagram,
    Sparkles,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function FloorPlan() {
    return (
        <main className={styles.page}>
            {/* HERO */}

          <PageBanner title="Floor Plane"/>

            {/* FORM SECTION */}

            <section className={styles.formSection}>
                <div className={styles.container}>

                    <div className={styles.formWrapper}>

                        <h2>
                            Enter Your Details To View Our Floorplan
                        </h2>

                        <form className={styles.form}>

                            <input
                                type="text"
                                placeholder="Name *"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number *"
                            />

                            <input
                                type="email"
                                placeholder="Email *"
                            />

                            <input
                                type="text"
                                placeholder="Company Name"
                            />

                            <div className={styles.checkboxGroup}>

                                <label className={styles.checkbox}>
                                    <input type="checkbox" />

                                    <span>
                                        I agree to receiving all show
                                        information, in addition to
                                        the information I have requested.
                                    </span>
                                </label>

                                <label className={styles.checkbox}>
                                    <input type="checkbox" />

                                    <span>
                                        I agree to Comexposium storing
                                        and processing my personal data
                                        for the purpose of the request.
                                    </span>
                                </label>

                            </div>

                            <p className={styles.note}>
                                You can unsubscribe from these
                                communications at any time.
                                For more information, please
                                review our Privacy Policy.
                            </p>

                            <button
                                type="submit"
                                className={styles.submitBtn}
                            >
                                <span>SUBMIT</span>

                                <span className={styles.submitCircle}>
                                    <ChevronRight size={16} />
                                </span>
                            </button>

                        </form>

                    </div>

                    {/* CTA */}

                    <div className={styles.cardGrid}>

                        <div className={styles.card}>

                            <h3>
                                INTERESTED IN ATTENDING?
                            </h3>

                            <a href="#" className={styles.learnBtn}>
                                LEARN MORE

                                <span className={styles.learnBtnCircle}>
                                    <ChevronRight size={18} />
                                </span>
                            </a>

                        </div>

                        <div className={styles.card}>

                            <h3>
                                INTERESTED IN EXHIBITING?
                            </h3>

                            <a href="#" className={styles.learnBtn}>
                                LEARN MORE

                                <span className={styles.learnBtnCircle}>
                                    <ChevronRight size={18} />
                                </span>
                            </a>

                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}