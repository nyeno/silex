import React, {useEffect, useState} from 'react'
import styles from './../styles/Cookie.module.css'

export default function Cookies() {
const [showCookieConsent, setShowCookieConsent] = useState(true)

  
const acceptCookies = () => {
  const expirationTime = new Date();
  expirationTime.setTime(expirationTime.getTime() + 4 * 60 * 60 * 1000); // cookie expires in 4 hours in milliseconds
  const expires = "expires=" + expirationTime.toUTCString();
  document.cookie = "cookieConsent=true" + ";" + expires + ";path=/";
  setShowCookieConsent(false)
}
    useEffect(() => {
        if (document.cookie.indexOf('cookieConsent=true') > -1) {
            setShowCookieConsent(false)
        }
    }, [])
 console.log(showCookieConsent)
  return (
    <div>
      {showCookieConsent && (
        <div className={styles.cookies}>
          <p>
            In order to offer you the best possible service, this site uses
            cookies. By agreeing to continue on this site, you declare that you
            accept their use.
            <span onClick={acceptCookies}> I agree</span>
          </p>
        </div>
      )}
    </div>
  );
}
