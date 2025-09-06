```markdown
# URL Shortener Project
> A full-stack application by **Sivaji Chinnam (22HT1A4422)**

A full-stack URL shortener application built with **React** for the frontend and **Node.js + Express** for the backend. This project allows users to create short URLs, track usage analytics, and manage URL expiry.

---

## ✨ Features

-   **Shorten URLs**: Convert long URLs into concise links.
-   **Custom Shortcodes**: Users can suggest an optional custom shortcode for their link.
-   **URL Expiry**: Set a validity period (in minutes) for how long a short link remains active.
-   **Click Analytics**: Track the total number of clicks, along with the timestamp, referrer, and location for each click.
-   **Seamless Redirection**: Automatically redirects short URLs to their original destination.
-   **Responsive UI**: A clean and modern user interface built with Material-UI that works on all devices.

---

## 🛠️ Technologies Used

-   **Frontend**: React, React Router, Material-UI, Axios
-   **Backend**: Node.js, Express.js
-   **Unique ID Generation**: NanoID
-   **Logging**: Custom Logging Middleware
-   **Version Control**: Git & GitHub

---

## 📂 Folder Structure

The project is organized in a monorepo structure with three main folders: `backend`, `frontend`, and `logging-middleware`.

```

22HT1A4422/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── url.controller.js
│   │   ├── models/
│   │   │   └── url.model.js
│   │   ├── routes/
│   │   │   └── url.routes.js
│   │   └── index.js
│   ├── .env
│   ├── .gitignore
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── UrlInput.jsx
│   │   │   ├── StatsTable.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── ShortenerPage.jsx
│   │   │   └── StatisticsPage.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   └── package.json
│
├── logging-middleware/
│   ├── index.js
│   └── package.json
│
└── README.md

````

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:
* [Node.js](https://nodejs.org/en/) (v18 or higher)
* [npm](https://www.npmjs.com/) (Node Package Manager)
* [Git](https://git-scm.com/)

### Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone [https://github.com/Sivaji4829/22HT1A4422.git](https://github.com/Sivaji4829/22HT1A4422.git)
    cd 22HT1A4422
    ```

2.  Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3.  Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

### Running the Application

You'll need to run the backend and frontend servers in two separate terminals.

1.  **Start the Backend Server:**
    ```bash
    cd backend
    npm run dev 
    ```
    > The backend will be running on **http://localhost:5000**

2.  **Start the Frontend Development Server:**
    ```bash
    cd frontend
    npm run dev
    ```
    > The frontend will be running on **http://localhost:3000**

---

## 🔌 API Endpoints

| Method | Endpoint                  | Description                        |
| :----- | :------------------------ | :--------------------------------- |
| `POST` | `/shorturls`              | Create a new short URL.            |
| `GET`  | `/shorturls/:shortcode`   | Get stats for a specific short URL.|
| `GET`  | `/:shortcode`             | Redirect to the original URL.      |
| `GET`  | `/shorturls`              | Get all URLs and their stats.      |

#### **Example Request Body:** `POST /shorturls`

```json
{
  "url": "[https://example.com/a-very-long-url-to-be-shortened](https://example.com/a-very-long-url-to-be-shortened)",
  "validity": 30,
  "shortcode": "custom"
}
````

#### **Example Success Response:**

```json
{
  "shortLink": "http://localhost:5000/custom",
  "expiry": "2025-09-06T07:30:00.000Z"
}
```

```
```
