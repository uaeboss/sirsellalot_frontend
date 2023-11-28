import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_links">
          <ul>
            <li>About us</li>
            <li>Impressum</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer_newsletter">
          <p>Subscribe to our newsletter:</p>
          <input placeholder="Your email"></input>
        </div>
      </div>
    </div>
  );
};

export default Footer;
