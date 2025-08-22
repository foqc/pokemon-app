Okay, here's the `README.md` file in English.

# Quick Start Guide

This project is divided into two main parts: the **backend** (API) and the **frontend** (user interface). For the application to work correctly, you must start both services.

---

## 💻 Backend (API)

The backend, located in the `backend/` folder, is the brain of the project. It handles the business logic and manages the data.

1.  Navigate to the backend folder in your terminal:
    ```bash
    cd backend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the server. The API will be available at `http://localhost:3000`:
    ```bash
    npm start
    ```

---

## 🎨 Frontend (User Interface)

The frontend, located in the `frontend/` folder, is what the user sees and interacts with.

1.  Open a **new terminal** and navigate to the frontend folder:
    ```bash
    cd frontend
    ```
    Create `.env` file using the example provided.

2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the application in development mode. It will open in your browser at `http://localhost:5173` (or a similar port):
    ```bash
    npm run dev
    ```

Once both servers are running, the application will be fully functional. Enjoy\!
-----

## 🧪 Testing

This project currently does not include any unit or integration tests. However, here are the recommended tools for implementing them in the future:

  * **Frontend**: For unit and integration tests, we can use **Jest** and **React Testing Library**. These tools allow you to test React components in isolation.
  * **End-to-End (E2E)**: For comprehensive E2E tests that simulate user behavior across the entire application, **Cypress** is a great choice.
  * **Backend**: The current backend, built with Express, does not have tests.