"use client";

import PageBanner from "@/components/PageBanner";
import styles from "./Workshops.module.css";
import { FaCheckCircle, FaStar, FaFileAlt, FaMoneyBillWave, FaQuestionCircle, FaChartLine, FaBullhorn, FaHandshake, FaLightbulb } from "react-icons/fa";

const buyingTopics = [
    {
        title: "Focus On You",
        points: [
            "Do you plan to work alone or with others?",
            "How do you want to spend the next 10, 20 or more years of your life?",
        ],
        icon: <FaCheckCircle />,
    },
    {
        title: "The Disclosure Document",
        points: ["Includes 21 Items"],
        icon: <FaFileAlt />,
    },
    {
        title: "How much money can I make?",
        points: ["Fees, bargains, is it justifiable?"],
        icon: <FaMoneyBillWave />,
    },
    {
        title: "Where and how to ask for help?",
        points: ["Consult your advisors with caution"],
        icon: <FaQuestionCircle />,
    },
];

const businessTopics = [
    {
        title: "The Decision to Franchise",
        points: [
            "How Franchising Works",
            "Alternatives",
            "Quality Control",
            "Legal Aspects of Franchising",
        ],
        icon: <FaChartLine />,
    },
    {
        title: "Marketing Your Franchise",
        points: [
            "Start locally, then regionally",
            "Don't expand faster than your support capability",
        ],
        icon: <FaBullhorn />,
    },
    {
        title: "Selling Your Franchise",
        points: [
            "Unique process unlike any other sales",
            "Predictability",
        ],
        icon: <FaHandshake />,
    },
    {
        title: "Creating a Successful Franchise Strategy",
        points: [
            "Structural Decisions",
            "Financial",
            "Organizational Development",
        ],
        icon: <FaLightbulb />,
    },
];

export default function Workshops() {
    return (
        <main className={styles.page}>

            {/* HERO */}
            <PageBanner title="Workshops" />

            {/* INTRO */}
            <section className={styles.introSection}>
                <div className={styles.container}>

                    <div className={styles.introGrid}>

                        <div>
                            <h2 className={styles.sectionTitle}>
                                Join Us For Our Workshops!
                            </h2>

                            <div className={styles.workshopBlock}>
                                <h3>A To Z's Of Buying A Franchise</h3>

                                <p>
                                    If you're looking for no-nonsense,
                                    cut-to-the-quick, how to evaluate
                                    franchises so that you can buy one
                                    that's right for you, this is the
                                    perfect workshop.
                                </p>
                            </div>

                            <div className={styles.workshopBlock}>
                                <h3>Franchise Your Business</h3>

                                <p>
                                    This workshop is ideal for business
                                    owners interested in franchising or
                                    those trying to determine if
                                    franchising is a legitimate growth option.
                                </p>

                                <span className={styles.note}>
                                    * additional workshop fee required
                                </span>
                            </div>
                        </div>

                        <div className={styles.imageBox}>
                            <img
                                src="https://media.istockphoto.com/id/1956818527/photo/crowd-of-business-people-having-a-seminar-in-board-room.jpg?s=612x612&w=0&k=20&c=bazpLXOSPCPSy_3Gtvq4Sq-SygVi11KqhHmLgCdSAAg="
                                alt="Workshop"
                            />
                        </div>

                    </div>

                </div>
            </section>

            {/* BUYING TOPICS */}
            <section className={styles.topicSection}>
                <div className={styles.container}>

                    <h2 className={styles.topicTitle}>
                        The Topics For <br />
                        A To Z's Of Buying A Franchise
                    </h2>

                    <div className={styles.cardGrid}>
                        {buyingTopics.map((item, index) => (
                            <div
                                key={index}
                                className={styles.topicCard}
                            >
                                <div className={styles.icon}>
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>

                                {item.points.map((point, i) => (
                                    <p key={i}>{point}</p>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* BUSINESS TOPICS */}
            <section className={styles.topicSection}>
                <div className={styles.container}>

                    <h2 className={styles.topicTitle}>
                        The Topics For <br />
                        Franchise Your Business
                    </h2>

                    <div className={styles.cardGrid}>
                        {businessTopics.map((item, index) => (
                            <div
                                key={index}
                                className={styles.topicCard}
                            >
                                <div className={styles.icon}>
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>

                                {item.points.map((point, i) => (
                                    <p key={i}>{point}</p>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}