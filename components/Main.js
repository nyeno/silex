import React from 'react'
import Countdown from './Countdown'
import styles from './../styles/Main.module.css';

export default function Main() {
  return (
    <div>
      <div className={styles.rock_solid}>
        <img src="/rock_solid.png" alt='Rock Solid'/>
      </div>

      <h1 className={styles.title}>
        <span>SILEX</span>
        <span className={styles.subtitle}>gives rise to SPARK</span>
      </h1>

      <Countdown />
      <p>Launch Date: 14th April 2023 by 12:00pm</p>
      <p className={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a
        ultricies risus, eget convallis justo. Praesent sollicitudin urna at
        nibh convallis consequat. Donec in ex vitae purus hendrerit hendrerit.
        Suspendisse dictum ullamcorper tortor id congue. Praesent pharetra felis
        et ex consequat faucibus. Vivamus rhoncus sed magna sit amet porta.
        Vivamus aliquet finibus nulla non maximus. Nulla facilisi. Morbi orci
        lorem, vulputate vitae scelerisque vel, porttitor et nisl. Nunc eget
        fermentum purus. Suspendisse porttitor aliquet urna, eget commodo risus
        pulvinar non. Morbi dapibus mi vitae mollis congue.
      </p>
    </div>
  );
}
