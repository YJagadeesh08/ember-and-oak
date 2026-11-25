
import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Camera,
  MapPin,
  Clock
} from "lucide-react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="website">
      <nav className="navbar">
        <a href="#" className="logo">
          EMBER<span>&</span>OAK
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a>
          <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
          <a href="#visit" onClick={() => setMenuOpen(false)}>Visit Us</a>
        </div>

        <a href="#visit" className="nav-button">
          RESERVE A TABLE <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="eyebrow">
              <span></span> AN EXPERIENCE BEYOND DINING
            </p>

            <h1>
              Experience the art of dining.
              <br />
              <em>Every moment matters.</em>
            </h1>

            <p className="hero-description">
              Discover the art of open-fire cooking, seasonal
              ingredients and unforgettable moments.
            </p>

            <a href="#menu" className="primary-button">
              EXPLORE OUR MENU <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="hero-bottom">
            <span>EST. 2020 — NEW DELHI</span>
            <span>01 / A DIFFERENT KIND OF DINING</span>
          </div>
        </section>

        <section className="intro" id="story">
          <p className="eyebrow">THE EMBER EXPERIENCE</p>
          <h2>
            Not just a meal.<br />
            <em>A moment worth savouring.</em>
          </h2>
          <p>
            At Ember & Oak, we bring people together through
            honest ingredients, bold flavours and the timeless
            magic of cooking over an open flame.
          </p>
        </section>

        <section className="menu-section" id="menu">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A TASTE OF OUR KITCHEN</p>
              <h2>Made with <em>intention.</em></h2>
            </div>
            <span>01 — 03</span>
          </div>

          <div className="food-grid">
            <article className="food-card">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=900"
                alt="Grilled steak"
              />
              <h3>Fire-kissed classics</h3>
              <p>Bold flavours, timeless techniques.</p>
            </article>

            <article className="food-card">
              <img
                src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900"
                alt="Fresh pasta"
              />
              <h3>Seasonal creations</h3>
              <p>Fresh ingredients, thoughtful cooking.</p>
            </article>

            <article className="food-card">
              <img
                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900"
                alt="Dessert"
              />
              <h3>Sweet endings</h3>
              <p>A little indulgence to finish.</p>
            </article>
          </div>
        </section>

        <section className="visit-section" id="visit">
          <p className="eyebrow">YOUR TABLE IS WAITING</p>
          <h2>Make an evening <em>of it.</em></h2>
          <div className="visit-details">
            <span><MapPin size={17}/> New Delhi, India</span>
            <span><Clock size={17}/> 12 PM – 11 PM</span>
          </div>
          <a
            className="primary-button"
            href="https://wa.me/919441350739?text=Hello%2C%20I%20would%20like%20to%20reserve%20a%20table%20at%20Ember%20%26%20Oak."
            target="_blank"
            rel="noreferrer"
          >
            RESERVE VIA WHATSAPP <ArrowUpRight size={17}/>
          </a>
        </section>
      </main>

      <footer>
        <a href="#" className="logo">EMBER<span>&</span>OAK</a>
        <p>GOOD FOOD. GOOD PEOPLE. GREAT MEMORIES.</p>
        <a href="https://instagram.com" aria-label="Instagram">
          <Camera />
        </a>
        <p>© 2026 EMBER & OAK. DEMO WEBSITE.</p>
      </footer>
    </div>
  );
}

export default App;
