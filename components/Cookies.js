import React, {useEffect, useState} from 'react'
import styles from './../styles/Cookie.module.css'

export default function Cookies() {
const [showCookieConsent, setShowCookieConsent] = useState(true)

const acceptCookies = () => {
    document.cookie = "cookieConsent=true"
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
