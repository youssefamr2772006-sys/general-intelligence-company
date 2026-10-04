import React, { useState } from 'react';

const stories = [
  {
    category: 'FIELD NOTES',
    title: 'The intelligence of a garden',
    description:
      'What a patch of wildflowers can teach us about cooperation, attention, and the art of getting along.',
    author: 'Mara Ellison',
    readingTime: '8 min read',
    artwork: 'garden',
  },
  {
    category: 'A SMALL THEORY',
    title: 'In praise of the unfinished thought',
    description:
      'On leaving a little room for uncertainty—and why the best ideas rarely arrive fully dressed.',
    author: 'Jonah Park',
    readingTime: '6 min read',
    artwork: 'blue',
  },
  {
    category: 'CONVERSATIONS',
    title: 'A map is also a kind of story',
    description:
      'Cartographer Elian Ruiz on the places we choose to notice and the ones that disappear.',
    author: 'Nora Bell',
    readingTime: '11 min read',
    artwork: 'moon',
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
      {diagonal ? (
        <path d="M4 12 12 4M5 4h7v7" />
      ) : (
        <path d="M2.5 8h10m-4-4 4 4-4 4" />
      )}
    </svg>
  );
}

function Landscape() {
  return (
    <svg
      className="landscape-art"
      viewBox="0 0 1200 540"
      role="img"
      aria-label="A quiet meadow at dusk, beneath a pale moon"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="evening" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dfe7e3" />
          <stop offset=".58" stopColor="#eee8d9" />
          <stop offset="1" stopColor="#f4dfc4" />
        </linearGradient>
        <linearGradient id="hills" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#788b7a" />
          <stop offset="1" stopColor="#394c47" />
        </linearGradient>
      </defs>
      <rect width="1200" height="540" fill="url(#evening)" />
      <circle cx="890" cy="135" r="57" fill="#fff9e9" />
      <path
        d="M0 295c126-43 190-15 294 2 105 17 172-73 289-48 122 26 160 92 295 52 125-37 201-52 322-1v240H0Z"
        fill="#9aa995"
      />
      <path
        d="M0 364c111-71 237-53 346-13 99 37 156-32 269-28 139 5 174 76 306 39 114-32 188-28 279 8v170H0Z"
        fill="url(#hills)"
      />
      <path
        d="M0 430c140-50 233-45 344-4 114 42 183 17 284-5 114-25 189 37 302 12 104-24 176-24 270 10v97H0Z"
        fill="#35443d"
      />
      <g fill="#f4eee0">
        <circle cx="100" cy="405" r="3" />
        <circle cx="152" cy="446" r="2.5" />
        <circle cx="250" cy="390" r="2.5" />
        <circle cx="390" cy="453" r="3" />
        <circle cx="526" cy="414" r="2" />
        <circle cx="678" cy="467" r="3" />
        <circle cx="820" cy="405" r="2.5" />
        <circle cx="1035" cy="445" r="3" />
        <circle cx="1120" cy="395" r="2" />
      </g>
      <g stroke="#efe5cb" strokeWidth="2" strokeLinecap="round">
        <path d="M184 540v-74m0 28-11-12m11 21 12-15M940 540v-91m0 32-12-15m12 23 13-17M738 540v-60m0 19-9-11" />
      </g>
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="General Intelligence Company home">
        <span className="wordmark-mark" aria-hidden="true">g</span>
        <span className="wordmark-name">
          General Intelligence
          <br />
          Company
        </span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#journal">Journal</a>
        <a href="#about">About</a>
        <a href="#newsletter">Dispatches</a>
      </nav>
      <a className="button button-outline header-cta" href="#newsletter">
        Get the dispatch <ArrowIcon diagonal />
      </a>
    </header>
  );
}

function StoryCard({ story, index }) {
  return (
    <article className={`story-card story-card-${story.artwork}`}>
      <div className={`story-art story-art-${story.artwork}`} aria-hidden="true">
        {story.artwork === 'garden' && (
          <div className="flower-field">
            <span>✳</span><span>✳</span><span>✳</span><span>✳</span><span>✳</span>
          </div>
        )}
        {story.artwork === 'moon' && <span className="story-moon" />}
        <span className="story-number">0{index + 1}</span>
      </div>
      <div className="story-content">
        <span className="eyebrow">{story.category}</span>
        <h3>{story.title}</h3>
        <p>{story.description}</p>
        <div className="story-meta">
          <span>By {story.author}</span>
          <span>{story.readingTime}</span>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <div id="top" />
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow hero-kicker">AN INDEPENDENT JOURNAL FOR CURIOUS MINDS</span>
            <h1 id="hero-title">
              There’s more
              <br />
              than one way
              <br />
              <em>to be intelligent.</em>
            </h1>
            <p className="hero-description">
              A journal about the ideas, people, and living systems that help us
              see the world a little differently.
            </p>
            <a className="button button-dark" href="#journal">
              Explore the journal <ArrowIcon />
            </a>
            <span className="hero-footnote">Issue No. 04 &nbsp;·&nbsp; Autumn 2025</span>
          </div>
          <div className="hero-illustration">
            <Landscape />
            <span className="art-caption">Somewhere between here and elsewhere</span>
          </div>
        </section>

        <section className="intro-band" id="about">
          <span className="eyebrow">A NOTE FROM US</span>
          <p>
            Intelligence isn’t a score or a finish line. It’s a way of paying
            attention—to one another, to the more-than-human world, and to
            questions that don’t have easy answers.
          </p>
          <a className="text-link" href="#journal">
            A little more about us <ArrowIcon />
          </a>
        </section>

        <section className="journal-section" id="journal">
          <div className="section-heading">
            <div>
              <span className="eyebrow">FROM THE JOURNAL</span>
              <h2>Ideas worth sitting with.</h2>
            </div>
            <a className="button button-outline" href="#newsletter">
              Browse all stories <ArrowIcon />
            </a>
          </div>
          <div className="story-grid">
            {stories.map((story, index) => (
              <StoryCard key={story.title} story={story} index={index} />
            ))}
          </div>
        </section>

        <section className="newsletter" id="newsletter">
          <div className="newsletter-copy">
            <span className="eyebrow">A LETTER, NOW AND THEN</span>
            <h2>A small light in your inbox.</h2>
            <p>
              Thoughtful reads, new work, and the occasional thing we can’t
              stop thinking about. No noise, ever.
            </p>
          </div>
          <form
            className="signup-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSubscribed(true);
            }}
          >
            <label className="visually-hidden" htmlFor="email">Your email address</label>
            <input id="email" type="email" placeholder="Your email address" required />
            <button className="button button-dark" type="submit">
              {subscribed ? 'You’re on the list' : 'Sign me up'}
              {!subscribed && <ArrowIcon />}
            </button>
            <span className="form-note">
              By subscribing, you agree to hear from us occasionally.
            </span>
          </form>
        </section>
      </main>
      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top">
          <span className="wordmark-mark" aria-hidden="true">g</span>
          <span className="wordmark-name">
            General Intelligence
            <br />
            Company
          </span>
        </a>
        <span className="footer-note">Made for the questions that matter.</span>
        <a className="footer-link" href="mailto:hello@generalintelligencecompany.com">
          Say hello <ArrowIcon diagonal />
        </a>
        <span className="copyright">© 2026 General Intelligence Company</span>
      </footer>
    </>
  );
}

export default App;
