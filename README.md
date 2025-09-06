```markdown
# URL Shortener Project

A full-stack URL shortener application built with **React** (frontend) and **Node.js + Express** (backend). Users can create short URLs, track analytics, and manage URL expiry.

---

## Features

- Shorten long URLs with optional custom shortcodes  
- Set validity period for short URLs  
- Track analytics: total clicks, timestamp, referrer, IP  
- Redirect short URLs to the original URLs  
- Clean and responsive UI using Material-UI  

---

## Folder Structure

```

22HT1A4422/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── url.controller.js      # Logic to handle requests (create, redirect, get stats)
│   │   ├── models/
│   │   │   └── url.model.js           # Defines the data structure for a URL
│   │   ├── routes/
│   │   │   └── url.routes.js          # Defines API endpoints (e.g., /shorturls)
│   │   └── index.js                   # Main server file (entry point)
│   ├── .env                           # Environment variables (e.g., PORT)
│   ├── .gitignore                     # To ignore node_modules
│   └── package.json                   # Backend dependencies and scripts
│
├── frontend/
│   ├── public/
│   │   └── index.html                 # The single HTML page for your React app
│   ├── src/
│   │   ├── components/
│   │   │   ├── UrlInput.jsx           # Reusable component for a single URL input form
│   │   │   ├── StatsTable.jsx         # Component to display click statistics in a table
│   │   │   └── Navbar.jsx             # Navigation component
│   │   ├── pages/
│   │   │   ├── ShortenerPage.jsx      # Page for creating short URLs
│   │   │   └── StatisticsPage.jsx     # Page for viewing URL statistics
│   │   ├── services/
│   │   │   └── api.js                 # Centralized functions for making API calls to the backend
│   │   ├── App.jsx                    # Main application component with routing
│   │   ├── index.css                  # Global CSS styles
│   │   └── main.jsx                   # The entry point for the React application
│   ├── .gitignore                     # To ignore node_modules
│   └── package.json                   # Frontend dependencies (React, Material-UI) and scripts
│
├── logging-middleware/
│   ├── index.js                       # The main file exporting your Log() function
│   ├── .gitignore                     # To ignore node_modules, if any
│   └── package.json                   # Defines this as a reusable package
│
└── README.md                          # Project documentation

````

---

## Technologies Used

- **Frontend:** React, React Router, Material-UI, Axios  
- **Backend:** Node.js, Express, NanoID  
- **Logging:** Custom logging middleware using Axios  
- **Version Control:** Git  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Sivaji4829/22HT1A4422.git
cd 22HT1A4422
````

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Install frontend dependencies:

```bash
cd ../frontend
npm install
```

---

## Running the Project

### Backend

```bash
cd backend
npm run dev
```

Runs on **[http://localhost:5000](http://localhost:5000)**

### Frontend

```bash
cd frontend
npm run dev
```

Runs on  **[http://localhost:3000](http://localhost:3000)** 

---

## API Endpoints

| Method | Endpoint                | Description                        |
| ------ | ----------------------- | ---------------------------------- |
| POST   | `/shorturls`            | Create a new short URL             |
| GET    | `/shorturls/:shortcode` | Get stats for a specific short URL |
| GET    | `/:shortcode`           | Redirect to original URL           |
| GET    | `/shorturls`            | Get all URLs and their stats       |

**Example Request:**

```json
POST /shorturls
{
  "url": "https://example.com/long-url",
  "validity": 30,
  "shortcode": "myfirst"
}
```

**Example Response:**

```json
{
  "shortLink": "http://localhost:5000/myfirst",
  "expiry": "2025-09-06T07:00:07.411Z"
}
```
