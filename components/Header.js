import React, {useState} from 'react'
import styles from './../styles/Header.module.css'

export default function Header() {
  const [isNavOpen, setOpenNav] = useState(false)

  const closeNav = () => {
    setOpenNav(false)
  }

  const showNav = () => {
    setOpenNav(true)
  }
  return (
    <div className={styles.header}>
      <img src="/logo.png" alt='Silex logo'/>
      <nav className={styles.largeNav}>
        <a href="https://www.silex-partners.com/en/technology" target='_blank'>Technology</a>
        <a href="https://www.silex-partners.com/en/solutions" target='_blank'>Solutions</a>
        <a href="https://landing.silex-partners.com/carbon-score-en/" target='_blank'>
          Carbon Impact
        </a>
        <a href="https://landing.silex-partners.com/carbon-score-en/" target='_blank'>
          Publications
        </a>
      </nav>
      {isNavOpen && (
        <nav className={styles.phoneNav}>
          <a href="https://www.silex-partners.com/en/technology" target='_blank'>Technology</a>
          <a href="https://www.silex-partners.com/en/solutions" target='_blank'>Solutions</a>
          <a href="https://landing.silex-partners.com/carbon-score-en/" target='_blank'>
            Carbon Impact
          </a>
          <a href="https://landing.silex-partners.com/carbon-score-en/" target='_blank'>
            Publications
          </a>
        </nav>
      )}
      <button className={styles.phoneNavButtons}>
        {!isNavOpen ? (
          <img src="/menu.png" onClick={showNav} />
        ) : (
          <p onClick={closeNav}> X </p>
        )}
      </button>
    </div>
  );
}
