import Image from "next/image";
import styles from "./page.module.css";
import headshot_nocolor from "@/images/headshot_nocolor.png";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.hero__content}>
          <div className={styles.hero__left}>
            <div className={styles.hero__eyebrow}>
              PORTFOLIO / 2026
            </div>

            <h1 className={styles.hero__title}>
              FULL-STACK
              <br />
              SOFTWARE
              <br />
              DEVELOPMENT
            </h1>

            <p className={styles.hero__summary}>
              Software Design
              <br />
              Software Development
              <br />
              Business Design
              <br />
              Data Analytics
            </p>
          </div>


          <div className={styles.hero__right}>
            <div className={styles.hero__image}>
              <Image
                src={headshot_nocolor}
                alt="Abbigail Farr"
                priority
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className={styles.hero__photo}
              />
            </div>

            <div className={styles.hero__name}>
              <span>ABBIGAIL</span>
              <span>FARR</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <h2 className={styles.about__title}>
          About
        </h2>

        <p className={styles.about__description}>
          Put summary here
        </p>
      </section>
    </main>
  );
}