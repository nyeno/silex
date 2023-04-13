import React, {useEffect, useState} from 'react'
//import { acceptCookies, showConsentPopUp } from '../utils/cookieConsent'

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
    <div className={styles.cookies}>
      {showCookieConsent && (
        <div>
          <p>
            In order to offer you the best possible service, this site uses
            cookies. By agreeing to continue on this site, you declare that you
            accept their use.
          </p>
          <button onClick={acceptCookies}> I agree</button>
        </div>
      )}
    </div>
  );
}
