import Link from "next/link";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.about}>

      <header className={styles.about__header}>
        <span>ABOUT / 2026</span>
      </header>

      <section className={styles.about__hero}>
        <h1 className={styles.about__title}>
          ABOUT
          <br />
          ME
        </h1>

        <div className={styles.about__intro}>
          <p>
            A few things about me: I'm originally from the Pacific Northwest, 
            where I grew up ice skating and dancing. I have a passion for learning 
            new languages and experiencing different cultures, I love a good thunderstorm, 
            and I'll never say no to french fries. I'm naturally curious, creative, 
            and always looking for opportunities to learn—which is exactly what led me to 
            start learning Mandarin out of pure interest. :)
          </p>

          <p>
            Today, I'm a full-stack software engineer with a background in data analytics, 
            business analysis, and healthcare technology. I enjoy leaning into my natural 
            curiosity and my belief that diverse perspectives lead to better solutions. 
            Whether I'm analyzing data, designing cloud applications, or collaborating with 
            cross-functional teams, I enjoy solving complex problems by combining technical 
            thinking with a user-centered approach.
          </p>

        </div>
      </section>

      <section className={styles.about__section}>
        <span className={styles.about__label}>
          PROFESSIONAL BACKGROUND
        </span>

        <div className={styles.about__grid}>
          <div>
            <span className={styles.about__year}>CURRENT</span>

            <h3>Software Engineer</h3>

            <p>
              Building full-stack cloud applications using C#, ASP.NET Core,
              Blazor, SQL Server, Azure, and REST APIs.
            </p>
          </div>

          <div>
            <span className={styles.about__year}>PREVIOUS</span>

            <h3>Data Analytics</h3>

            <p>
              REST APIs, business intelligence, reporting, process automation,
              and data-driven decision making.
            </p>
          </div>

          <div>
            <span className={styles.about__year}>EARLIER</span>

            <h3>Business Analyst</h3>

            <p>
              Requirements gathering, stakeholder collaboration,
              and process improvement.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.about__section}>
        <span className={styles.about__label}>
          EDUCATION
        </span>

        <div className={styles.about__grid}>
          <div>
            <span className={styles.about__year}>2024</span>

            <h3>Washington State University</h3>

            <p>
              Bachelor of Science
              <br />
              Data Analytics
            </p>
          </div>

          <div>
            <span className={styles.about__year}>HONORS</span>

            <h3>Magna Cum Laude</h3>

            <p>
              GPA 3.89
            </p>
          </div>

          <div>
            <span className={styles.about__year}>FOCUS</span>

            <p>
              Software Engineering
              <br />
              Machine Learning
              <br />
              Statistical Modeling
              <br />
              Database Systems
            </p>
          </div>
        </div>
      </section>

      <section className={styles.about__section}>
        <span className={styles.about__label}>
          TOOLS & TECHNOLOGIES
        </span>

        <div className={styles.about__skills}>

          <div>
            <h3>Languages</h3>

            <p>
              C#
              <br />
              Python
              <br />
              Java
              <br />
              SQL
              <br />
              TypeScript
              <br />
              HTML & CSS
            </p>
          </div>

          <div>
            <h3>Frameworks</h3>

            <p>
              .NET
              <br />
              ASP.NET Core
              <br />
              Blazor
              <br />
              React
              <br />
              Next.js
              <br />
              Dapper
            </p>
          </div>

          <div>
            <h3>Cloud & Data</h3>

            <p>
              Azure
              <br />
              Azure Functions
              <br />
              Azure DevOps
              <br />
              SQL Server
              <br />
              PostgreSQL
              <br />
              MongoDB
            </p>
          </div>

          <div>
            <h3>Practices</h3>

            <p>
              Full-Stack Development
              <br />
              Software Architecture
              <br />
              REST APIs
              <br />
              Database Design
              <br />
              Agile
              <br />
              Requirements Analysis
            </p>
          </div>

        </div>
      </section>

      <section className={styles.about__section}>
        <span className={styles.about__label}>
          BEYOND THE CODE
        </span>

        <div className={styles.about__gridFour}>
          <div>
            <h3>What I Like</h3>

            <p>
              Travel
              <br />
              Language Learning
              <br />
              Design
              <br />
              Coffee Shops
              <br />
              My dog Cookie
            </p>
          </div>

          <div>
            <h3>What I Speak</h3>

            <p>
              English - Native
              <br />
              Chinese - Intermediate
              <br />
              Japanese - Intermediate
            </p>
          </div>

          <div>
            <h3>How I Work</h3>

            <p>
              Collaborative
              <br />
              Creative
              <br />
              Adaptive
              <br />
              Purposeful
              <br />
              User-Focused
            </p>
          </div>

          <div>
            <h3>What I'm Learning</h3>

            <p>
              AI Applications
              <br />
              Functional Programming
              <br />
              Product Design
              <br />
              Human-Centered Software
              <br />
              Cloud Architecture
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}