import React from 'react';
import styles from '../styles/page.module.css'; // if you're importing from 'pages'

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Your All-in-One Platform for Modern Law Firms</h1>
        <p>
          Streamline your firm’s operations with a powerful, easy-to-use platform designed for lawyers.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </section>

      {/* About Wakili Suite Section */}
      <section className={styles.about}>
        <h2>What is Wakili Suite?</h2>
        <p>
          Wakili Suite provides comprehensive tools that empower law firms to manage cases, collaborate
          efficiently, and serve clients seamlessly. With a secure and intuitive interface, law firms can
          save time and improve productivity.
        </p>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Key Features</h2>
        <div className={styles.featureList}>
          <div className={styles.feature}>
            <h3>Case Management</h3>
            <p>Easily manage your cases from start to finish.</p>
          </div>
          <div className={styles.feature}>
            <h3>Document Collaboration</h3>
            <p>Work with your team and clients in real-time on legal documents.</p>
          </div>
          <div className={styles.feature}>
            <h3>Billing & Invoicing</h3>
            <p>Generate professional invoices and track payments effortlessly.</p>
          </div>
        </div>
        <button className={styles.ctaButton}>Explore Features</button>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2>What Our Clients Say</h2>
        <blockquote>
          “Wakili Suite has transformed the way we manage our cases. It’s simple, intuitive, and powerful.”
        </blockquote>
        <p>- Jane Doe, Managing Partner at XYZ Law Firm</p>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Ready to Take Your Law Firm to the Next Level?</h2>
        <button className={styles.ctaButton}>Sign Up</button>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
        <div className={styles.socialLinks}>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
        <p>© 2025 Wakili Suite, All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
