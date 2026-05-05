# Project Setup Instructions

This section explains how to clone the project, install the needed dependencies, and run the frontend and backend locally.

---

## 1. Clone the repository

```bash
git clone <PASTE_REPOSITORY_LINK_HERE>
```

Then open the project folder:

```bash
cd online-store
```

---

## 2. Install dependencies

The `node_modules` folders are not uploaded to GitHub. This is normal.

After cloning the project, install the dependencies by running:

```bash
npm install
npm run install-all
```

This installs:

- Root dependencies
- Frontend dependencies
- Backend dependencies

---

## 3. Run the full project

From the root `online-store` folder, run:

```bash
npm run dev
```

This starts both:

- React frontend
- Express backend

---

## 4. Run frontend only

```bash
cd frontend
npm install
npm run dev
```

The frontend usually runs on:

```txt
http://localhost:5173
```

---

## 5. Run backend only

```bash
cd backend
npm install
npm run dev
```

The backend usually runs on:

```txt
http://localhost:5000
```

---

## 6. Environment variables

Create a `.env` file inside the `backend` folder.

Use `backend/.env.example` as a template:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_jwt_secret_here
```

Do not upload `.env` to GitHub.

---