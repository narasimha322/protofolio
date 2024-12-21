import React from "react";
import "../contact.css"; // Assuming your CSS styles are stored here

function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get In Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-container">
        <div className="contact-methods">
          <article className="contact-item">
            <img src="./email.png" alt="Email icon" className="icon" />
            <p>narasimhakashina1@gmail.com</p>
          </article>
          <article className="contact-item">
            <img src="./linkedin.png" alt="LinkedIn icon" className="icon" />
            <p>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn Profile
              </a>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact;
