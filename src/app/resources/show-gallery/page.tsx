"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ShowGallery.module.css";
import PageBanner from "@/components/PageBanner";

const galleryImages = [
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05948.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05896.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05883.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05869.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05854.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05847.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05829.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05821.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05817.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05816.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05813.webp",
    "https://www.franchiseexpo.com/images/bagallery/original/dsc05798.webp",
];

export default function ShowGallery() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = "";
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") goToPrevious();
        if (e.key === "ArrowRight") goToNext();
    };

    return (
        <main className={styles.page}>

            {/* HERO */}
            <PageBanner title="Gallery" />

            {/* GALLERY */}
            <section className={styles.gallerySection}>
                <div className={styles.container}>

                    <div className={styles.topContent}>
                       
                    </div>

                    <div className={styles.grid}>
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className={styles.card}
                                onClick={() => openLightbox(index)}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={image}
                                        alt={`Gallery ${index + 1}`}
                                        fill
                                        className={styles.image}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* LIGHTBOX MODAL */}
            {lightboxOpen && (
                <div
                    className={styles.lightbox}
                    onClick={closeLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    <button
                        className={styles.closeBtn}
                        onClick={closeLightbox}
                        aria-label="Close"
                    >
                        <X size={28} />
                    </button>

                    <button
                        className={`${styles.navBtn} ${styles.prevBtn}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            goToPrevious();
                        }}
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={40} />
                    </button>

                    <button
                        className={`${styles.navBtn} ${styles.nextBtn}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            goToNext();
                        }}
                        aria-label="Next image"
                    >
                        <ChevronRight size={40} />
                    </button>

                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.lightboxImageWrapper}>
                            <Image
                                src={galleryImages[currentIndex]}
                                alt={`Gallery ${currentIndex + 1}`}
                                fill
                                className={styles.lightboxImage}
                            />
                        </div>
                        <div className={styles.counter}>
                            {currentIndex + 1} / {galleryImages.length}
                        </div>
                    </div>
                </div>
            )}

        </main>
    );
}