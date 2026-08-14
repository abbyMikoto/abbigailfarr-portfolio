import Link from "next/link";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <main className={styles.contact}>
      <span className={styles.contact__eyebrow}>
        CONTACT / 2026
      </span>

      <section className={styles.contact__hero}>
        <h1 className={styles.contact__title}>
          CONTACT ME
        </h1>

        <div className={styles.contact__content}>

          <p className={styles.contact__intro}>
            If you’d like to talk about software engineering,
            collaboration, or potential opportunities, feel free
            to reach out. I’d be happy to connect
            <span> :)</span>
          </p>

          <div className={styles.contact__divider} />

          <div className={styles.contact__details}>
            <div className={styles.contact__group}>
              <span className={styles.contact__label}>
                GENERAL ENQUIRIES
              </span>

              <div className={styles.contact__items}>
                <div>
                  <span className={styles.contact__itemLabel}>
                    Email
                  </span>

                  <a
                    href="mailto:abbigailmfarr@gmail.com"
                    className={styles.contact__link}
                  >
                    abbigailmfarr@gmail.com
                  </a>
                </div>

                <div>
                  <span className={styles.contact__itemLabel}>
                    Location
                  </span>

                  <span>United States</span>
                </div>
              </div>
            </div>

            <div className={styles.contact__group}>
              <span className={styles.contact__label}>
                SOCIAL MEDIA
              </span>

              <div className={styles.contact__items}>
                <Link
                  href="https://github.com/abbyMikoto"
                  target="_blank"
                  className={styles.contact__link}
                >
                  GitHub
                </Link>

                <Link
                  href="https://www.linkedin.com/in/abbigail-farr-528437185"
                  target="_blank"
                  className={styles.contact__link}
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}