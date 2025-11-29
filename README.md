<div align="center">
  <img src="Frontend/public/logo.png" alt="plot" width="30" style="vertical-align: middle;" />
  <span style="vertical-align: middle; margin-left: 10px;">SecondBrain</span>
</div>

SecondBrain is a full-stack web application that acts as a personal, lightweight inbox for your ideas and content from across the web. Save articles, YouTube videos, and Twitter threads, and let SecondBrain organize them for you in a clean, visual dashboard.

## Features

- **Multi-Content Support**: Save and organize content from various sources, including articles, YouTube videos, and Twitter posts.
- **Visual Dashboard**: Your saved content is displayed in a neat, responsive masonry grid layout.
- **Automatic Content Preview**: The application automatically generates appropriate previews for different content types, including embedding YouTube videos and Twitter posts.
- **User Authentication**: Secure sign-up and sign-in functionality using JSON Web Tokens (JWT).
- **Share Your Brain**: Generate a unique, shareable link to your entire collection of saved content.
- **Lazy Loading**: Content cards are lazy-loaded for improved performance, only rendering when they enter the viewport.
- **RESTful API**: A well-defined backend API for managing users and content.

## Tech Stack

The project is a monorepo containing a separate frontend and backend.

-   **Frontend**:
    -   **Framework**: React
    -   **Language**: TypeScript
    -   **Build Tool**: Vite
    -   **Styling**: Tailwind CSS
    -   **Routing**: React Router
    -   **HTTP Client**: Axios

-   **Backend**:
    -   **Framework**: Express.js
    -   **Language**: TypeScript
    -   **Database**: MongoDB with Mongoose ODM
    -   **Authentication**: JSON Web Tokens (JWT)

## Project Structure

```
.
├── Backend/      # Contains the Node.js/Express backend
│   ├── src/
│   │   ├── index.ts    # Main server entry point and API routes
│   │   ├── db.ts       # Mongoose schemas and models
│   │   ├── middleware.ts # Authentication middleware
│   │   └── utils.ts      # Utility functions
│   └── ...
└── Frontend/     # Contains the React/Vite frontend
    ├── src/
    │   ├── pages/      # Top-level page components (Dashboard, SignIn, etc.)
    │   ├── components/ # Reusable React components (Card, Sidebar, etc.)
    │   ├── hooks/      # Custom hooks (e.g., useContent)
    │   ├── icons/      # SVG icon components
    │   ├── utils/      # Utility functions and configuration
    │   └── App.tsx     # Main application component with routing
    └── ...
```

## Setup and Installation

To run this project locally, you will need Node.js, npm, and a running MongoDB instance.

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm
-   MongoDB

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd Backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create an environment file:**
    Create a `.env` file in the `Backend` directory and add the following variables.

    ```env
    MONGO_URL=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_jwt_key
    PORT=3000
    ```

4.  **Start the backend server:**
    ```bash
    npm run dev
    ```
    The server will start on the port specified in your `.env` file (defaults to 3000).

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd Frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
3. **Configure Backend URL (if necessary)**:
    By default, the frontend is configured to connect to the backend at `http://localhost:3000`. If your backend is running on a different URL, update it in `Frontend/src/utils/config.tsx`.

4.  **Start the frontend development server:**
    ```bash
    npm run dev
    ```
    The development server will start, typically on `http://localhost:5173`.

## API Endpoints

The backend exposes the following REST API endpoints:

| Method | Endpoint                    | Description                                         | Authentication |
| :----- | :-------------------------- | :-------------------------------------------------- | :------------- |
| `POST` | `/api/v1/signup`            | Creates a new user account.                         | None           |
| `POST` | `/api/v1/signin`            | Logs in a user and returns a JWT.                   | None           |
| `POST` | `/api/v1/content`           | Adds new content for the authenticated user.        | JWT Required   |
| `GET`  | `/api/v1/content`           | Retrieves all content for the authenticated user.   | JWT Required   |
| `DELETE`| `/api/v1/content`          | Deletes a piece of content by its ID.               | JWT Required   |
| `POST` | `/api/v1/brain/share`       | Creates or revokes a public share link.             | JWT Required   |
| `POST` | `/api/v1/brain/:sharelink`  | Retrieves public content from a share link.         | JWT Required   |
