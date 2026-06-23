"use client";

import Link from "next/link";
import styles from "./SocialFixed.module.css";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

export default function SocialFixed() {
    return (
        <div className={styles.socialFixed}>

            <Link
                href="https://www.linkedin.com/company/mfvexpo/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
            >
                <FaLinkedinIn size={18} />
            </Link>

            <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
            >
                <FaFacebookF size={18} />
            </Link>

            <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
            >
                <FaInstagram size={18} />
            </Link>

        </div>
    );
}