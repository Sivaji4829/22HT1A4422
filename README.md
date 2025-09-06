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
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ utils/
│  │  ├─ App.jsx
│  │  └─ index.js
│  └─ package.json
├─ backend/
│  ├─ src/
│  │  ├─ controllers/
│  │  ├─ middlewares/
│  │  ├─ models/
│  │  ├─ routes/
│  │  └─ index.js
│  └─ package.json
└─ README.md

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
git clone https://github.com/<your-username>/22HT1A4422.git
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

Runs on **[http://localhost:5173](http://localhost:5173)** (or **[http://localhost:3000](http://localhost:3000)** if configured)

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
