# JobTrack — Job Application Tracker

JobTrack is a React-based web application for managing job applications in one place. It helps users track application statuses, search and filter opportunities, and manage their job search more efficiently.

## Features

- **Dashboard:** View total applications and counts by status.
- **Application management:** Add, edit, and delete job applications.
- **Search:** Find applications by company name or job role.
- **Filter:** Filter applications by status.
- **Job details:** Open an individual application on its own page.
- **Persistent storage:** Save job data in the browser using localStorage.
- **Form validation:** Validate job information before saving.
- **Responsive UI:** Adapt the layout for different screen sizes.
- **Reusable components:** Organize the interface into maintainable React components.

## Tech Stack

- React 19
- React Router 7
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite 8
- Browser localStorage

## Getting Started

### Prerequisites

Install Node.js and npm before running the project.

### Installation


## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Vedant-web10/JobTrack.git
   ```

2. Navigate into the project folder:

   ```bash
   cd JobTrack
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in your terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the project with ESLint |

## Data Storage

JobTrack uses the browser's localStorage to persist job applications between page refreshes. The data is stored locally in the browser and is not synchronized across devices or users.

## Future Improvements

- Backend integration and database storage
- User authentication
- Application deadlines and reminders
- Sorting and additional filters

## Author

Vedant Dalavi
https://github.com/Vedant-web10