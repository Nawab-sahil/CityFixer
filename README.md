# CityFixer

CityFixer is a MERN-based local services platform where customers can discover and book services, service providers can manage their work, and admins can monitor platform activity through a dedicated admin panel.

## Tech Stack

- Frontend: React, React Router, Axios, CSS
- Backend: Node.js, Express, MongoDB, Mongoose
- Auth: JWT-based authentication with role-aware route protection

## Key Features

- User authentication (signup/login/logout)
- Role-based users: customer, service provider, admin
- Service discovery and service details pages
- Booking flow and payment UI
- User dashboard and profile pages
- Admin panel route (`/admin`) protected for `admin` users only

## Project Structure

```text
CityFixer/
  client/   # React frontend
  server/   # Express + MongoDB backend
```

## Getting Started

### 1. Install dependencies

From repository root:

```bash
npm run install-all
```

### 2. Configure environment

Create `server/.env` and set values like:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/cityfixer
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
```

Optional frontend API override in `client/.env`:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 3. Run backend

```bash
cd server
npm run dev
```

### 4. Run frontend

```bash
cd client
npm start
```

Frontend runs on `http://localhost:3000` and backend on `http://localhost:5000`.

## Build

```bash
cd client
npm run build
```

## Admin Panel Access

- Route: `/admin`
- Protected by frontend `ProtectedRoute` with `requiredRole="admin"`
- Backend allows `admin` as a valid `userType`

## Available Scripts (root)

- `npm run dev` - starts both server and client
- `npm run server` - starts backend in dev mode
- `npm run client` - starts frontend
- `npm run build` - builds frontend production bundle

## Author

- Nawab-sahil
