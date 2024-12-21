import React from "react";
import "../styles/home.css"; // Assuming your CSS styles are stored here

function Home() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="./profile4.png" alt="John Doe profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Narasimha Reddy</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() =>
              window.open(
                "https://github.com/narasimha322?tab=repositories",
                "_blank"
              )
            }
          >
            GitHub
          </button>

          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;

<hr></hr>;
