import './App.css';
function App() {
  return (
    <div className="website">
      <nav className="navbar">
        <a href="/" className="logo">
          CODE<span>2</span>CHILL
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#domains">Domains</a>
          <a href="#events">Events</a>
          <a href="#team">Team</a>
        </div>

        <a href="#join" className="nav-button">
          Join the Club ↗
        </a>
      </nav>

      <main className="hero">
        <p className="hero-label">
          <span className="status-dot"></span>
          CHITKARA UNIVERSITY · TECH COMMUNITY
        </p>

        <h1>
          THINK.
          <br />
          BUILD.
          <br />
          <span>CREATE.</span>
        </h1>

        <div className="hero-bottom">
          <p>
            A community of curious minds, creative thinkers
            and builders shaping what comes next.
          </p>

          <a href="#about" className="explore-link">
            EXPLORE THE COMMUNITY ↓
          </a>
        </div>
      </main>
      <section className="about" id="about">
  <p className="section-label">01 — WHO WE ARE</p>

  <h2>
    MORE THAN
    <br />
    JUST <span>A CLUB.</span>
  </h2>

  <div className="about-content">
    <p>
      Code2Chill is a student-driven tech community at
      Chitkara University, bringing together curious minds
      who love learning, building and experimenting with
      technology.
    </p>

    <p>
      From coding and innovation to collaboration and
      creativity, we create opportunities for students
      to turn ideas into meaningful experiences.
    </p>
  </div>
</section>
    </div>
  );
}

export default App;