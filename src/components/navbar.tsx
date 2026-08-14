import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__brand}>
        <span className={styles.navbar__name}>
          Abbigail Farr
        </span>
        <span className={styles.navbar__title}>
          Software Engineer
        </span>
      </div>

      <nav className={styles.navbar__nav}>
        <Link href="/" className={styles.navbar__link}>
          Home
        </Link>

        <Link href="/about" className={styles.navbar__link}>
          About
        </Link>

        <Link href="/projects" className={styles.navbar__link}>
          Projects
        </Link>

        <Link href="/contact" className={styles.navbar__link}>
          Contact
        </Link>
      </nav>
    </header>
  );
}