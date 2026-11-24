# Code2Chill — Official Website

A modern, responsive website for **Code2Chill**, the student-led technical community at Chitkara University. The website introduces the club, showcases its technical domains and activities, and highlights events conducted by the community.

## About Code2Chill

Code2Chill is a student-led technical club at Chitkara University focused on innovation, coding, emerging technologies, and practical learning.

Through workshops, hackathons, coding competitions, and technical talks, the community encourages students to explore technology, develop practical skills, collaborate, and build innovative solutions.

## Project Overview

The Code2Chill website serves as the club's digital presence, providing visitors with information about the community, its technical domains, and its events through a modern and interactive interface.

### Key Features

- **Navigation Bar:** Easy navigation between the website's main sections.
- **Hero Section:** Introduces Code2Chill with its central message — "THINK. BUILD. CREATE."
- **About Section:** Provides an introduction to the club and its purpose.
- **Domains Section:** Features the technical domains through an interactive domain selector.
- **Events Section:** Highlights the club's event activities.
- **Past Events Archive:** Displays completed events with their posters and event information.
- **Event Details Popup:** Allows visitors to view additional information about an event by selecting its card.
- **Responsive Layout:** CSS styling includes layouts and adjustments for smaller screens.

## Events Showcased

The website currently features three completed events:

| Event | Date | Venue |
|---|---|---|
| ON FIRE — The LeetCode Competition | 23 September 2026 | Einstein Hall |
| DOMINATION — The Frontend Challenge | 18 July 2026 | Pierre Hall, Architecture Block |
| BYTE THE VIBE — Coding & Build Sprint | 18 May 2026 | Pierre Hall, Architecture Block |

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| JavaScript | Website functionality and interactivity |
| CSS3 | Styling, layouts, animations, and responsiveness |
| Vite | Development server and build tooling |
| HTML5 | Website structure |

## Project Structure

```text
code2chill-website/
│
├── public/
│   └── events/
│       ├── on-fire.jpg
│       ├── domination.jpg
│       └── byte-the-vibe.jpg
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

### Important Files

- `src/App.jsx` — Main React application, website sections, event data, and interactive functionality.
- `src/App.css` — Component-specific styling, layouts, animations, and responsive design.
- `src/index.css` — Global styles and base styling.
- `public/events/` — Event poster images used in the website.
- `index.html` — Main HTML entry point.
- `package.json` — Project dependencies and available scripts.
- `vite.config.js` — Vite configuration.
- `README.md` — Project documentation.

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Navigate to the Project Directory

```bash
cd code2chill-website
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Vite will provide a local URL in the terminal. Open that URL in your browser to view the website.

## Running a Production Build

To create a production build, run:

```bash
npm run build
```

The generated production files will be available in the `dist/` directory.

## Project Status

The project currently focuses on the frontend implementation of the official Code2Chill website, including its main sections, interactive domain selection, event archive, and event details popup.

## Institution

**Chitkara University**  
Rajpura, Punjab, India

## Developed For

**Code2Chill — Technical Club**

*THINK. BUILD. CREATE.*

---

