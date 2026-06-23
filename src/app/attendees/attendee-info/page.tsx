"use client";

import { useState } from 'react';
import PageBanner from '@/components/PageBanner';
import styles from './page.module.css';

// Metadata removed - it cannot be used with "use client"

const attendeeCards = [
  {
    image: 'https://www.franchiseexpo.com/images/west/Attendees/Attendee_Info/Emerging_Pavilion.webp',
    title: 'Emerging Brand Pavilion',
    description:
      "Looking for the next big franchise opportunity? The Emerging Brand Pavilion is where you'll find the newest franchise concepts. Meet visionary founders, explore fresh business models, and get in on the ground floor of exciting new brands.",
  },
  {
    image: 'https://www.franchiseexpo.com/images/west/Attendees/Attendee_Info/Conference_Agenda.webp',
    title: 'Conference Agenda',
    description:
      'We offer a highly diverse conference agenda that covers a variety of fundamental topics around franchising.',
  },
  {
    image: 'https://www.franchiseexpo.com/images/west/Attendees/Attendee_Info/Exhibitors.webp',
    title: 'Exhibitors',
    description:
      'At the International Franchise Expo, you have the power to meet and engage with a variety of franchise brands from every industry.',
  },
  {
    image: 'https://www.franchiseexpo.com/images/west/Attendees/Attendee_Info/The_Business_Resource_Center.webp',
    title: 'Business Resource Center',
    description:
      'Explore a variety of suppliers that are critical in developing your franchise, and form valuable business connections.',
  },
];

export default function AttendeeInfoPage() {
  const [flipped, setFlipped] = useState<boolean[]>(Array(attendeeCards.length).fill(false));

  const toggleFlip = (index: number) => {
    setFlipped((current) =>
      current.map((value, idx) => (idx === index ? !value : value))
    );
  };

  return (
    <>
      <PageBanner
        title="Attendee Info"
        ctaText="Register to Attend"
      />

      <section className="section">
        <div className="container">
          {/* Intro paragraph */}
          <div className={styles.introPara}>
            <p>
              Whether you're an aspiring entrepreneur ready to take control of your future or a current
              business owner exploring expansion through franchising, the Franchise Expo is your gateway
              to success. This premier event provides the tools, resources, and connections needed to
              navigate the world of franchising confidently. Discover a wide range of franchise
              opportunities, attend expert-led seminars, and learn from industry leaders.
            </p>
          </div>

          {/* 4-up flip cards */}
          <div className={`grid grid-4 ${styles.cardsGrid}`}>
            {attendeeCards.map((card, index) => (
              <div
                key={index}
                className={`${styles.infoCard} ${flipped[index] ? styles.flipped : ''}`}
                onClick={() => toggleFlip(index)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggleFlip(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={flipped[index]}
              >
                <div className={styles.cardInner}>
                  <div className={`${styles.cardFace} ${styles.cardFront}`}>
                    <div 
                      className={styles.cardImg}
                      style={{ backgroundImage: `url(${card.image})` }}
                    />
                  </div>

                  <div className={`${styles.cardFace} ${styles.cardBack}`}>
                    <div className={styles.cardBody}>
                      <h5 className={styles.cardTitle}>{card.title}</h5>
                      <p className={styles.cardText}>{card.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}