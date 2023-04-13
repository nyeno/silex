import React from 'react'
import styles from './../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://www.silex-partners.com/en/legal-notice" target='_blank'>Legal Notices</a>
      <a href="https://www.silex-partners.com/en/personal-data" target='_blank'>Data Protection</a>
    </div>
  );
}
