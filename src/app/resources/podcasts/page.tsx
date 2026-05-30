"use client";

import PageBanner from "@/components/PageBanner";
import styles from "./Podcasts.module.css";

const podcasts = [
    {
        title: "Funbox",
        video: "https://www.youtube.com/embed/Dq5cHyyctw4",
    },
    {
        title: "World Gym",
        video: "https://www.youtube.com/embed/kGBj-Iml3rI",
    },
    {
        title: "Titus Center for Franchising",
        video: "https://www.youtube.com/embed/GGZ7T6DUcN4",
    },
    {
        title: "Ziebart",
        video: "https://www.youtube.com/embed/rhRlPZCkUtQ",
    },
    {
        title: "Captain D's",
        video: "https://www.youtube.com/embed/eAz_6HrrsWg",
    },
];

export default function Podcasts() {
    return (
        <main className={styles.page}>

            {/* HERO */}
         <PageBanner title="PodCasts"/>

            {/* PODCAST SECTION */}
            <section className={styles.podcastSection}>
                <div className={styles.container}>

                    <div className={styles.grid}>
                        {podcasts.map((podcast, index) => (
                            <div
                                key={index}
                                className={styles.card}
                            >

                                <div className={styles.cardHeader}>
                                   

                                    <h2>{podcast.title}</h2>
                                </div>

                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src={podcast.video}
                                        title={podcast.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}