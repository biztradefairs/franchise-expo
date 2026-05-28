import styles from './PageBanner.module.css';

interface Props {
  title: string;
  subtitle?: string;
}

export default function PageBanner({ title, subtitle }: Props) {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerInner}>
        <h1 className={styles.title}>{title}</h1>

        {subtitle && (
          <p className={styles.subtitle}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}