import './footer-style.css';
import klarna from '../../assets/graphics/logos/Klarna.png';
import budbee from '../../assets/graphics/logos/budbee.png';
import postnord from '../../assets/graphics/logos/PostNord.svg';
import facebook from '../../assets/graphics/logos/facebook.png';
import instagram from '../../assets/graphics/logos/instagram.png';
import twitter from '../../assets/graphics/logos/twitter.png';
import bring from '../../assets/graphics/logos/bring.png';
import email from '../../assets/graphics/logos/email.png';
import copyright from '../../assets/graphics/logos/copyright2.png';
import call from '../../assets/graphics/logos/call.png';

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="contact">
        <div className="contact-top">
          <h1>
            Hakim Livs
            <img id="copyright-logo" src={copyright}></img>
          </h1>
          <p>Stora Gatan 1</p>
          <p>Lilla Staden 111 222</p>
        </div>
        <div className="contact-bottom">
          <a href="tel:111987654">
            <p>
              <img id="call-logo" src={call}></img>111-98 76 54
            </p>
          </a>
          <a href="mailto:hakimlivs@example.com">
            <h1 id="email-header">
              <img id="email-logo" src={email}></img>
              Kontakta oss
            </h1>
          </a>
        </div>
      </div>
      <div className="logo">
        <a href="https://www.klarna.com/se/" target="_blank">
          <img src={klarna}></img>
        </a>
        <a href="https://budbee.com/se/home" target="_blank">
          <img src={budbee}></img>
        </a>
        <a href="https://www.postnord.se/" target="_blank">
          <img src={postnord}></img>
        </a>
        <a href="https://www.bring.se/" target="_blank">
          <img src={bring}></img>
        </a>
      </div>
      <div className="social-media">
        <a href="https://facebook.com" target="_blank">
          <img src={facebook}></img>
        </a>
        <a href="https://instagram.com" target="_blank">
          <img src={instagram}></img>
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src={twitter}></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
