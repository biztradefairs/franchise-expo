import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Attendee Info',
  description:
    "Whether you're an aspiring entrepreneur or a current business owner exploring expansion through franchising, the Franchise Expo is your gateway to success.",
};

const attendeeCards = [
  {
    image: 'https://www.franchiseexpo.com/images/west/Attendees/Attendee_Info/Emerging_Pavilion.webp',
    title: 'Emerging Brand Pavilion',
    description:
      "Looking for the next big franchise opportunity? The Emerging Brand Pavilion is where you'll find the newest franchise concepts. Meet visionary founders, explore fresh business models, and get in on the ground floor of exciting new brands.",
    href: '/attendees/emerging-brand-pavilion',
  },
  {
    image: 'https://www.franchiseexpo.com/images/west/Attendees/Attendee_Info/Conference_Agenda.webp',
    title: 'Conference Agenda',
    description:
      'We offer a highly diverse conference agenda covering fundamental topics in franchising. Whether new to franchising or experienced, there is always something new to learn from our workshops and sessions.',
    href: '/conference-agenda',
  },
  {
    image: 'https://www.franchiseexpo.com/images/west/Attendees/Attendee_Info/Exhibitors.webp',
    title: 'Exhibitors',
    description:
      'At the Franchise Expo, you have the power to meet and engage with a variety of franchise brands from every industry. Talk directly with franchisors, ask questions, and explore opportunities that match your goals.',
    href: '/exhibitors/exhibitor-list',
  },
  {
    image: 'https://www.franchiseexpo.com/images/west/Attendees/Attendee_Info/The_Business_Resource_Center.webp',
    title: 'The Business Resource Center',
    description:
      'Explore a variety of suppliers that are critical in developing your franchise, and form valuable business connections.',
    href: '/attendees/business-resource-center',
  },
];

export default function AttendeeInfoPage() {
  return (
    <>
      <PageBanner
        title="Attendee Info"
        subtitle="Everything you need to make the most of your Franchise Expo experience."
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

          {/* 4-up cards */}
          <div className={`grid grid-4 ${styles.cardsGrid}`}>
            {attendeeCards.map((card) => (
              <Link key={card.title} href={card.href} className={styles.infoCard}>
                <div
                  className={styles.cardImg}
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                <div className={styles.cardBody}>
                  <div className={styles.cardTitleWrap}>
                    <h5 className={styles.cardTitle}>{card.title}</h5>
                  </div>
                  <p className={styles.cardText}>{card.description}</p>
                  <span className={styles.cardCta}>Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}