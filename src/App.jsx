import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Wrench, 
  ShoppingCart, 
  Code, 
  GraduationCap, 
  Laptop, 
  Search, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Building2,
  Terminal,
  Server,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

import logoImg from './assets/logo.jpeg';
import leaderImg from './assets/jack.best.jpeg';
import campusImg from './assets/smarrt2.jpeg';
import './index.css';

// Home Component
function Home() {
  return (
    <div>
      {/* Hero Section with Light Transparent Blue Overlay over Campus Background */}
      <header className="hero" style={{ backgroundImage: `linear-gradient(rgba(14, 116, 144, 0.45), rgba(15, 23, 42, 0.65)), url(${campusImg})` }}>
        <div className="slogan-badge">⚡ We can't fail you</div>
        <h1>Empowering Innovation & Tech Excellence</h1>
        <p>
          Your ultimate destination for professional computer repairs, high-end electronics, 
          custom software development, and expert programming classes. 
        </p>
        <div className="hero-btn-group">
          <Link to="/portfolio" className="cta-btn">Explore Our Projects</Link>
          <Link to="/academy" className="cta-secondary-btn">Join Programming Hub</Link>
        </div>
      </header>

      {/* Featured Founder / Programming Showcase */}
      <section className="featured-showcase">
        <div className="showcase-content">
          <div className="showcase-text">
            <h2>Leading Innovation in Tech & Software</h2>
            <p>
              At Jack.Besty.Tech, we combine rigorous software engineering principles with practical, 
              hands-on technological solutions. Whether building full-stack web applications, engineering 
              robust C++ systems, or training the next generation of coders, excellence is our standard.
            </p>
            <div className="showcase-feature-list">
              <div className="feature-item"><CheckCircle size={20} color="#38bdf8" /> Professional Full-Stack Architecture</div>
              <div className="feature-item"><CheckCircle size={20} color="#38bdf8" /> Advanced Hardware & Repair Diagnostics</div>
              <div className="feature-item"><CheckCircle size={20} color="#38bdf8" /> Dedicated Mentorship & Training</div>
            </div>
          </div>
          <div className="showcase-image-wrapper">
            <img src={leaderImg} alt="Jack.Besty.Tech Leadership & Coding" className="showcase-img" />
            <div className="image-caption-badge">
              <Terminal size={18} /> Active Development & Leadership
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Grid */}
      <section className="grid-section">
        <h2>Core Pillars of Jack.Besty.Tech</h2>
        <p className="section-subtitle">Discover how our multi-faceted tech expertise drives results.</p>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon-wrapper"><Wrench size={32} color="#38bdf8" /></div>
            <h3>Repairs & Tech Support</h3>
            <p>Advanced computer diagnostics, hardware upgrades, and precision screen replacements.</p>
          </div>
          <div className="card">
            <div className="card-icon-wrapper"><ShoppingCart size={32} color="#38bdf8" /></div>
            <h3>Electronics Store</h3>
            <p>Quality laptops, high-performance gadgets, and dependable accessories for daily computing.</p>
          </div>
          <div className="card">
            <div className="card-icon-wrapper"><Code size={32} color="#38bdf8" /></div>
            <h3>Custom Development</h3>
            <p>Building specialized web applications, databases, and institutional management systems.</p>
          </div>
          <div className="card">
            <div className="card-icon-wrapper"><GraduationCap size={32} color="#38bdf8" /></div>
            <h3>Programming Academy</h3>
            <p>Learn Python, React, C++, and database architectures hands-on with elite instruction.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Services Component with Lighter Background Image (Hardware/Repair Focus)
function Services() {
  return (
    <div>
      <div className="page-hero" style={{ backgroundImage: `linear-gradient(rgba(14, 116, 144, 0.5), rgba(15, 23, 42, 0.75)), url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80')` }}>
        <h2>Tech & Repair Services</h2>
        <p>Professional diagnostic and hardware solutions for all computer systems.</p>
      </div>
      <div className="grid-section" style={{ marginTop: '2rem' }}>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon-wrapper"><Search size={32} color="#38bdf8" /></div>
            <h3>Hardware Diagnostics</h3>
            <p>Comprehensive checks for laptops, desktops, and electronic circuits to pinpoint faults instantly.</p>
          </div>
          <div className="card">
            <div className="card-icon-wrapper"><Cpu size={32} color="#38bdf8" /></div>
            <h3>System Upgrades</h3>
            <p>RAM expansions, SSD speed optimization, and full operating system configurations.</p>
          </div>
          <div className="card">
            <div className="card-icon-wrapper"><ShieldCheck size={32} color="#38bdf8" /></div>
            <h3>Software Solutions</h3>
            <p>Malware removal, driver updates, and robust software architecture setups.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Store Component with Lighter Background Image (Electronics/Laptops Focus)
function Store() {
  return (
    <div>
      <div className="page-hero" style={{ backgroundImage: `linear-gradient(rgba(14, 116, 144, 0.5), rgba(15, 23, 42, 0.75)), url('https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1600&q=80')` }}>
        <h2>Electronics & Gadgets Store</h2>
        <p>Top-tier hardware and electronics for retail and enterprise needs.</p>
      </div>
      <div className="grid-section" style={{ marginTop: '2rem' }}>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon-wrapper"><Laptop size={32} color="#38bdf8" /></div>
            <h3>High-Performance Laptops</h3>
            <p>Powerful machines built specifically for programmers, engineers, students, and businesses.</p>
          </div>
          <div className="card">
            <div className="card-icon-wrapper"><ShoppingCart size={32} color="#38bdf8" /></div>
            <h3>Computer Accessories</h3>
            <p>Ergonomic keyboards, precision mice, external drives, cooling systems, and high-speed cables.</p>
          </div>
          <div className="card">
            <div className="card-icon-wrapper"><Server size={32} color="#38bdf8" /></div>
            <h3>General Electronics</h3>
            <p>Tested, trusted, and durable electronic equipment ready for immediate deployment.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Programming Academy Component with Lighter Background Image (Coding Focus)
function Academy() {
  return (
    <div>
      <div className="page-hero" style={{ backgroundImage: `linear-gradient(rgba(14, 116, 144, 0.5), rgba(15, 23, 42, 0.75)), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80')` }}>
        <h2>Jack.Besty Programming Academy</h2>
        <p>Master software engineering, web development, and coding from the ground up.</p>
      </div>
      <div className="grid-section" style={{ marginTop: '2rem' }}>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon-wrapper"><Terminal size={32} color="#38bdf8" /></div>
            <h3>Python Programming</h3>
            <p>Learn fundamentals, algorithmic logic, data structures, and backend scripts.</p>
          </div>
          <div className="card">
            <div className="card-icon-wrapper"><Code size={32} color="#38bdf8" /></div>
            <h3>Full-Stack Web Development</h3>
            <p>Build dynamic user interfaces with HTML, CSS, JavaScript, and React with Vite.</p>
          </div>
          <div className="card">
            <div className="card-icon-wrapper"><Cpu size={32} color="#38bdf8" /></div>
            <h3>C++ & Object-Oriented Design</h3>
            <p>Master classes, memory management, generic templates, and binary file systems.</p>
          </div>
          <div className="card">
            <div className="card-icon-wrapper"><Database size={32} color="#38bdf8" /></div>
            <h3>Databases & SQL</h3>
            <p>Master relational data storage, schema design, and queries using MySQL and PHP.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Portfolio Component
function Portfolio() {
  return (
    <div>
      <div className="page-hero" style={{ backgroundImage: `linear-gradient(rgba(14, 116, 144, 0.5), rgba(15, 23, 42, 0.75)), url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80')` }}>
        <h2>Projects & Software Portfolio</h2>
        <p>A showcase of systems and web platforms engineered by Jack.Besty.Tech.</p>
      </div>
      <div className="grid-section" style={{ marginTop: '2rem' }}>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon-wrapper"><Building2 size={32} color="#38bdf8" /></div>
            <h3>Institutional Web Portals</h3>
            <p>Multi-page websites and administration dashboards tailored for schools and learning academies.</p>
          </div>
          <div className="card">
            <div className="card-icon-wrapper"><Cpu size={32} color="#38bdf8" /></div>
            <h3>C++ Academic Systems</h3>
            <p>Course registration software featuring class hierarchies, singleton patterns, and file storage.</p>
          </div>
          <div className="card">
            <div className="card-icon-wrapper"><Code size={32} color="#38bdf8" /></div>
            <h3>Full-Stack Web Apps</h3>
            <p>Interactive web applications powered by modern routing, state management, and custom APIs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Login() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.get('email'), password: formData.get('password') }),
      });
      const data = await response.json();
      setMessage(response.ok
        ? { type: 'success', text: 'Login successful.' }
        : { type: 'error', text: data.error || 'Login failed. Check your email and password.' });
    } catch {
      setMessage({ type: 'error', text: 'Could not reach the login server. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-section">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>Enter your account details to log in.</p>
        {message && <div className={`login-message ${message.type}`} role={message.type === 'error' ? 'alert' : 'status'}>{message.text}</div>}
        <label htmlFor="login-email">Email</label>
        <input id="login-email" name="email" type="email" autoComplete="email" required />
        <label htmlFor="login-password">Password</label>
        <input id="login-password" name="password" type="password" autoComplete="current-password" required />
        <button className="cta-btn" type="submit" disabled={loading}>{loading ? 'Logging in…' : 'Login'}</button>
      </form>
    </section>
  );
}

// Contact Component connected to Formspree
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/mqpaqnle', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="page-hero" style={{ backgroundImage: `linear-gradient(rgba(14, 116, 144, 0.5), rgba(15, 23, 42, 0.75)), url('https://images.unsplash.com/photo-1423784346385-c1d4dac9093a?auto=format&fit=crop&w=1600&q=80')` }}>
        <h2>Contact & Booking Hub</h2>
        <p>Reach out for repairs, orders, custom software, or academy classes.</p>
      </div>
      <div className="grid-section" style={{ maxWidth: '600px', margin: '2rem auto 0' }}>
        {submitted ? (
          <div className="card" style={{ textAlign: 'center', background: 'rgba(6, 95, 70, 0.8)', borderColor: '#059669' }}>
            <CheckCircle size={48} color="#34d399" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ color: '#ecfdf5' }}>Thank You!</h3>
            <p style={{ color: '#d1fae5' }}>Your message has been received. We will get back to you shortly. Remember: We can't fail you!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: 'rgba(30, 41, 59, 0.7)', backdropFilter: 'blur(10px)', padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(51, 65, 85, 0.6)' }}>
            {error && <div style={{ color: '#f87171', background: 'rgba(239, 68, 68, 0.1)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>{error}</div>}
            <div>
              <label style={{ display: 'block', marginBottom: '6px', color: '#cbd5e1', fontWeight: '500' }}>Your Name:</label>
              <input type="text" name="name" required placeholder="e.g. Akau Jacob" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #475569', background: '#0f172a', color: 'white', fontSize: '0.95rem' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '6px', color: '#cbd5e1', fontWeight: '500' }}>Email or Phone:</label>
              <input type="text" name="email_or_phone" required placeholder="e.g. akaujacob77@gmail.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #475569', background: '#0f172a', color: 'white', fontSize: '0.95rem' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '6px', color: '#cbd5e1', fontWeight: '500' }}>Select Service Interest:</label>
              <select name="service" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #475569', background: '#0f172a', color: 'white', fontSize: '0.95rem' }}>
                <option>Computer / Device Repair</option>
                <option>Electronics Store Purchase</option>
                <option>Custom Web / System Development</option>
                <option>Programming Academy Enrollment</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '6px', color: '#cbd5e1', fontWeight: '500' }}>Message / Details:</label>
              <textarea name="message" rows="4" required placeholder="Tell us what you need..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #475569', background: '#0f172a', color: 'white', fontSize: '0.95rem' }}></textarea>
            </div>
            <button type="submit" disabled={loading} className="cta-btn" style={{ border: 'none', cursor: 'pointer', marginTop: '5px', width: '100%', padding: '12px', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Sending Inquiry...' : 'Send Inquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// Main App Layout with Default Export
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-container">
      {/* Navigation Bar with Logo */}
      <nav className="navbar">
        <div className="nav-brand">
          <img src={logoImg} alt="Jack.Besty.Tech Logo" className="nav-logo-img" />
          <span className="logo-text">Jack.Besty.Tech</span>
        </div>
        <button
          className="nav-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Tech & Repairs</Link></li>
          <li><Link to="/store">Electronics</Link></li>
          <li><Link to="/academy">Academy</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      {/* Page Routing Views */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/store" element={<Store />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Jack.Besty.Tech. All rights reserved. We can't fail you.</p>
      </footer>
    </div>
  );
}
