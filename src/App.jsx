
import { useState, useEffect } from 'react';
import './App.css';

const domains = [
  {
    number: '01',
    name: 'SOFTWARE DEVELOPMENT',
    description:
      'Transform ideas into functional software. Explore programming, problem-solving and building real-world applications.',
    tag: 'BUILD WHAT MATTERS',
  },
  {
    number: '02',
    name: 'WEB & MOBILE',
    description:
      'Design and develop digital experiences through modern websites and mobile applications.',
    tag: 'CREATE EXPERIENCES',
  },
  {
    number: '03',
    name: 'ARTIFICIAL INTELLIGENCE',
    description:
      'Explore intelligent systems, machine learning and the technologies shaping the future.',
    tag: 'EXPLORE INTELLIGENCE',
  },
  {
    number: '04',
    name: 'CYBERSECURITY',
    description:
      'Understand digital security, identify vulnerabilities and explore ways to build safer systems.',
    tag: 'SECURE THE DIGITAL',
  },
  {
    number: '05',
    name: 'CLOUD COMPUTING',
    description:
      'Discover cloud technologies, infrastructure and the systems powering modern applications.',
    tag: 'THINK BEYOND LIMITS',
  },
  {
    number: '06',
    name: 'INTERNET OF THINGS',
    description:
      'Explore connected devices and the relationship between software and the physical world.',
    tag: 'CONNECT THE WORLD',
  },
];

const teamMembers = [
  {
    name: 'Jiya Arora',
    role: 'Core Member',
  },
  {
    name: 'Divyana Garg',
    role: 'Core Member',
  },
  {
    name: 'Hunar Mehndiratta',
    role: 'Core Member',
  },
  {
    name: 'Tamanna Kakkar',
    role: 'Content Head',
  },
  {
    name: 'Samanyu Thakur',
    role: 'Technical Head',
  },
  {
    name: 'Bhupinder Singh',
    role: 'Technical Head',
  },
  {
    name: 'Ayush Sharma',
    role: 'Content Head',
  },
  {
    name: 'Jashan Bhalla',
    role: 'Social Media Head',
  },
  {
    name: 'Muskan Dhanda',
    role: 'Promotion Head',
  },
];



function App() {
  const [activeDomain, setActiveDomain] = useState(0);
  const [displayedDomain, setDisplayedDomain] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
 
useEffect(() => {
  const elements = document.querySelectorAll('.reveal');
  console.log('Reveal elements found:', elements.length);

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => {
      element.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Revealed:', entry.target.className);
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);

  useEffect(() => {
    if (activeDomain === displayedDomain) return;

    setIsChanging(true);

    const timer = setTimeout(() => {
      setDisplayedDomain(activeDomain);
      setIsChanging(false);
    }, 220);

    return () => clearTimeout(timer);
  }, [activeDomain, displayedDomain]);

  const selectedDomain = domains[displayedDomain];
  const events = [
  {
    id: 'on-fire',
    number: '01',
    title: 'ON FIRE',
    subtitle: 'The LeetCode Competition',
    date: '23 SEP 2026',
    venue: 'Einstein Hall',
    image: '/events/on-fire.jpg',
    participants: 'Competition',
    description:
      'A LeetCode competition organised by Code2Chill, featuring competitive programming and problem-solving.',
    extra: 'Cash prizes: ₹6,100 · ₹4,100 · ₹2,100. Participation certificates for all.',
  },
  {
    id: 'domination',
    number: '02',
    title: 'DOMINATION',
    subtitle: 'The Frontend Challenge',
    date: '18 JUL 2026',
    venue: 'Pierre Hall, Architecture Block',
    image: '/events/domination.jpg',
    participants: '215 participants',
    description:
      'A frontend challenge where students developed web solutions using modern frontend technologies.',
    extra:
      'Projects were evaluated on design, responsiveness, accessibility, performance and relevance.',
  },
  {
    id: 'byte-the-vibe',
    number: '03',
    title: 'BYTE THE VIBE',
    subtitle: 'Coding & Build Sprint',
    date: '18 MAY 2026',
    venue: 'Pierre Hall, Architecture Block',
    image: '/events/byte-the-vibe.jpg',
    participants: 'Around 110–115 participants',
    description:
      'A coding event featuring a live build sprint, team-based problem-solving, mentor guidance and final pitches.',
    extra: 'Teams of 2. Cash prizes: ₹2,500 · ₹1,500 · ₹1,000.',
  },
];

  return (
    <div className="website">
      {/* NAVIGATION */}

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

      {/* HERO SECTION */}

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

      {/* ABOUT SECTION */}

      <section className="about reveal" id="about">
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

      {/* FREQUENCY SECTION */}

      <section className="frequency reveal" id="domains">
        <div className="frequency-heading">
          <p className="section-label">
            02 — THE CODE2CHILL FREQUENCY
          </p>

          <h2>
            ONE COMMUNITY.
            <br />
            <span>INFINITE DIRECTIONS.</span>
          </h2>

          <p className="frequency-intro">
            Different technologies. Different possibilities.
            One community exploring what's next.
          </p>
        </div>

        <div className="frequency-interface">

          {/* FREQUENCY LIST */}

          <div className="frequency-list">
            <div className="frequency-list-heading">
              <span>SELECT A FREQUENCY</span>
              <span>01 — 06</span>
            </div>

            {domains.map((domain, index) => (
              <button
                key={domain.number}
                className={`frequency-item ${
                  activeDomain === index ? 'active' : ''
                }`}
                onClick={() => setActiveDomain(index)}
                aria-pressed={activeDomain === index}
              >
                <span className="frequency-number">
                  {domain.number}
                </span>

                <span className="frequency-name">
                  {domain.name}
                </span>

                <span className="frequency-arrow">↗</span>
              </button>
            ))}
          </div>

          {/* FREQUENCY DETAIL PANEL */}

          <div
            className={`frequency-detail ${
              isChanging ? 'is-changing' : ''
            }`}
            aria-live="polite"
          >
            <div className="frequency-detail-top">
              <span>ACTIVE FREQUENCY</span>

              <span className="live-indicator">
                <span className="status-dot"></span>
                CONNECTED
              </span>
            </div>

            {/* INDIVIDUAL VISUAL SIGNATURES */}

            <div
              className={`signal-visual signature-${displayedDomain + 1}`}
            >

              {/* 01 — SOFTWARE DEVELOPMENT */}

             
{displayedDomain === 0 && (
  <div className="signature-code">
    <div className="editor-topbar">
      <div className="editor-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span className="editor-filename">build.js</span>
      <span className="editor-status">JS</span>
    </div>

    <div className="editor-body">
      <div className="editor-line">
        <span className="line-number">01</span>
        <span><span className="code-purple">function</span> <span className="code-blue">build</span>() {'{'}</span>
      </div>

      <div className="editor-line">
        <span className="line-number">02</span>
        <span>&nbsp;&nbsp;<span className="code-purple">const</span> ideas = <span className="code-orange">true</span>;</span>
      </div>

      <div className="editor-line">
        <span className="line-number">03</span>
        <span>&nbsp;&nbsp;<span className="code-purple">return</span> <span className="code-blue">create</span>();</span>
      </div>

      <div className="editor-line">
        <span className="line-number">04</span>
        <span>{'}'}</span>
      </div>

      <div className="editor-line editor-comment">
        <span className="line-number">05</span>
        <span>// build what matters<span className="editor-cursor"></span></span>
      </div>
    </div>
  </div>
)}


              {/* 02 — WEB & MOBILE */}

              {displayedDomain === 1 && (
                <div className="signature-nodes">
                  {Array.from({ length: 7 }, (_, i) => (
                    <span key={i}></span>
                  ))}
                </div>
              )}

              {/* 03 — ARTIFICIAL INTELLIGENCE */}

             
{displayedDomain === 2 && (
  <div className="signature-neural">
    <svg
      className="neural-network"
      viewBox="0 0 320 150"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Interconnected artificial neural network"
    >
      <g className="neural-lines">
        <line x1="30" y1="72" x2="85" y2="28" />
        <line x1="30" y1="72" x2="90" y2="105" />
        <line x1="85" y1="28" x2="145" y2="55" />
        <line x1="85" y1="28" x2="155" y2="120" />
        <line x1="90" y1="105" x2="145" y2="55" />
        <line x1="90" y1="105" x2="155" y2="120" />
        <line x1="145" y1="55" x2="210" y2="20" />
        <line x1="145" y1="55" x2="220" y2="85" />
        <line x1="155" y1="120" x2="220" y2="85" />
        <line x1="155" y1="120" x2="270" y2="125" />
        <line x1="210" y1="20" x2="220" y2="85" />
        <line x1="210" y1="20" x2="285" y2="48" />
        <line x1="220" y1="85" x2="285" y2="48" />
        <line x1="220" y1="85" x2="270" y2="125" />
        <line x1="285" y1="48" x2="270" y2="125" />
      </g>

      <g className="neural-nodes">
        <circle cx="30" cy="72" r="6" />
        <circle cx="85" cy="28" r="5" />
        <circle cx="90" cy="105" r="7" />
        <circle cx="145" cy="55" r="8" />
        <circle cx="155" cy="120" r="5" />
        <circle cx="210" cy="20" r="6" />
        <circle cx="220" cy="85" r="9" />
        <circle cx="285" cy="48" r="6" />
        <circle cx="270" cy="125" r="7" />
      </g>
    </svg>
  </div>
)}

              {/* 04 — CYBERSECURITY */}

              {displayedDomain === 3 && (
                <div className="signature-shield">
                  <span>⌑</span>
                  <i>SECURE</i>
                </div>
              )}

              {/* 05 — CLOUD COMPUTING */}

              {displayedDomain === 4 && (
                <div className="signature-cloud">
                  <span>☁</span>
                  <div>CONNECTED CLOUD</div>
                </div>
              )}

              {/* 06 — INTERNET OF THINGS */}

              {displayedDomain === 5 && (
                <div className="signature-iot">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}

            </div>

            {/* FREQUENCY INFORMATION */}

            <p className="frequency-detail-number">
              FREQUENCY / {selectedDomain.number}
            </p>

            <h3>{selectedDomain.name}</h3>

            <p className="frequency-description">
              {selectedDomain.description}
            </p>

            <div className="frequency-detail-bottom">
              <span>{selectedDomain.tag}</span>
              <span>CODE2CHILL ↗</span>
            </div>

          </div>
        </div>
          </section>


        
      {/* EVENTS — SIGNAL DETECTED HERO */}

      <section className="events-hero reveal" id="events">
        <div className="events-hero-content">

          <p className="events-hero-label">
            <span className="events-signal-dot"></span>
            CODE2CHILL / EVENT INTELLIGENCE
          </p>

          <h2 className="events-hero-title">
            WHERE IDEAS
            <span>GO LIVE.</span>
          </h2>

          <p className="events-hero-description">
            Competitions. Challenges. Experiences.
            Explore the moments where Code2Chill turns
            curiosity into action.
          </p>

          <div className="events-hero-meta">

            <div className="events-hero-meta-item">
              <span className="events-hero-meta-value">03</span>
              <span className="events-hero-meta-label">
                PAST EVENTS
              </span>
            </div>

            <div className="events-hero-meta-item">
              <span className="events-hero-meta-value">2026</span>
              <span className="events-hero-meta-label">
                ARCHIVE YEAR
              </span>
            </div>

            <div className="events-hero-meta-item">
              <span className="events-hero-meta-value">∞</span>
              <span className="events-hero-meta-label">
                POSSIBILITIES
              </span>
            </div>

          </div>
        </div>
      
            </section>

      {/* EVENT ARCHIVE */}
      <section className="event-archive reveal" id="event-archive">
        <div className="event-archive-heading">
          <p className="section-label">03 — THE EVENT ARCHIVE</p>
          <h2>
            MOMENTS THAT
            <br />
            <span>MADE THE CODE.</span>
          </h2>
          <p>
            A look back at the challenges, ideas and people
            that brought our community together.
          </p>
        </div>

        <div className="event-archive-grid">
          {events.map((event, index) => (
            <article
             className={`event-card event-card-${index + 1} reveal`}
              key={event.id}
            >
              <div className="event-card-poster">
                <img src={event.image} alt={`${event.title} event poster`} />
                <span className="event-card-number">
                  / {event.number}
                </span>
                <button
  className="event-card-open"
  onClick={() => setSelectedEvent(event)}
  type="button"
>
  VIEW EVENT ↗
</button>
              </div>

              <div className="event-card-info">
                <div>
                  <p className="event-card-date">{event.date}</p>
                  <h3>{event.title}</h3>
                  <p className="event-card-subtitle">{event.subtitle}</p>
                </div>
                <span className="event-card-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section reveal" id="team">
        <div className="team-heading">
          <p className="team-eyebrow">CODE2CHILL / THE PEOPLE</p>
          <h2>
            THE PEOPLE
            <br />
            BEHIND THE <span>SIGNAL.</span>
          </h2>
          <p className="team-description">
            The minds, makers and doers building the Code2Chill community.
          </p>
        </div>

        {/* PRESIDENT SPOTLIGHT */}
        <div className="president-card">
          <div className="president-avatar">LK</div>

          <div className="president-info">
            <p className="member-label">01 / CLUB LEADERSHIP</p>
            <h3>Lakshay Kalra</h3>
            <p className="president-role">CLUB PRESIDENT</p>
          </div>

          <div className="president-mark">PRESIDENT</div>
        </div>

        {/* CORE TEAM */}
        <div className="team-subheading">
          <h3>THE CORE TEAM<span>.</span></h3>
          <p>09 MEMBERS / ONE COMMUNITY</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => {
            const initials = member.name
              .split(' ')
              .map((part) => part[0])
              .join('');

            return (
              <article className="team-card" key={member.name}>
                <div className="team-card-top">
                  <span className="team-number">
                    / {String(index + 2).padStart(2, '0')}
                  </span>
                  <span className="team-dot"></span>
                </div>

                <div className="team-avatar">{initials}</div>

                <div className="team-member-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section reveal" id="team">
        <div className="team-heading">
          <p className="team-eyebrow">CODE2CHILL / THE PEOPLE</p>
          <h2>
            THE PEOPLE
            <br />
            BEHIND THE <span>SIGNAL.</span>
          </h2>
          <p className="team-description">
            The minds, makers and doers building the Code2Chill community.
          </p>
        </div>

        {/* PRESIDENT SPOTLIGHT */}
        <div className="president-card">
          <div className="president-avatar">LK</div>

          <div className="president-info">
            <p className="member-label">01 / CLUB LEADERSHIP</p>
            <h3>Lakshay Kalra</h3>
            <p className="president-role">CLUB PRESIDENT</p>
          </div>

          <div className="president-mark">PRESIDENT</div>
        </div>

        {/* CORE TEAM */}
        <div className="team-subheading">
          <h3>THE CORE TEAM<span>.</span></h3>
          <p>09 MEMBERS / ONE COMMUNITY</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => {
            const initials = member.name
              .split(' ')
              .map((part) => part[0])
              .join('');

            return (
              <article className="team-card" key={member.name}>
                <div className="team-card-top">
                  <span className="team-number">
                    / {String(index + 2).padStart(2, '0')}
                  </span>
                  <span className="team-dot"></span>
                </div>

                <div className="team-avatar">{initials}</div>

                <div className="team-member-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>


            {selectedEvent && (
        <div
          className="event-modal-overlay"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="event-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="event-modal-close"
              onClick={() => setSelectedEvent(null)}
              type="button"
            >
              ✕
            </button>

            <div className="event-modal-image">
              <img
                src={selectedEvent.image}
                alt={`${selectedEvent.title} poster`}
              />
            </div>

            <div className="event-modal-content">
              <p className="event-modal-label">
                CODE2CHILL / EVENT ARCHIVE
              </p>

              <p className="event-card-date">
                {selectedEvent.date}
              </p>

              <h2>{selectedEvent.title}</h2>
              <h3>{selectedEvent.subtitle}</h3>

              <p>{selectedEvent.description}</p>

              <div className="event-modal-details">
                <p><strong>VENUE</strong></p>
                <p>{selectedEvent.venue}</p>

                <p><strong>EVENT DETAILS</strong></p>
                <p>{selectedEvent.extra}</p>

                <p>{selectedEvent.participants}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>

  
 
    
     );
}




  

export default App;
