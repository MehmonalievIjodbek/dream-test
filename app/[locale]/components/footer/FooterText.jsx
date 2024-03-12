import React from "react";

const FooterText = () => {
  return (
    <div className="page">
      <div className="footer-text">
        <div>
          <h2>COZYSTAY</h2>
          <p>
            Founded in 1998, CozyStay Lodge is a luxury boutique hotel in the
            heart of Napa Valley, immersing you in an idyllic setting against
            the pure sky. Stay, sip, and savor the best of Napa wine country at
            CozyStay.
          </p>
        </div>
        <div>
          <h2>Reach Out</h2>
          <p>
            Email: <a href="mailto: abc@example.com">Send Email</a>
          </p>
          <p>
            Telephone: <a href="tel:123-456-7890">123-456-7890</a>
          </p>

          <p>Address: 322 Main Street, Napa, CA 94559</p>
        </div>
        <div>
          <h2>Navigate</h2>
          <p>Accommodations </p>
          <p>Our Story</p>
          <p>Contact Us</p>
          <p>Services</p>
        </div>
      </div>
    </div>
  );
};

export default FooterText;
