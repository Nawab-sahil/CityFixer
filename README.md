# CityFixer - Local Service Provider Platform

A MERN stack application for connecting local service providers with customers, similar to Urban Company.

## Project Structure

```
CityFixer/
├── server/          # Express.js backend
│   ├── server.js
│   └── package.json
├── client/          # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
└── package.json     # Root package.json
```

## Tech Stack

**Frontend:**
- React 18
- React Router
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Nawab-sahil/CityFixer.git
cd CityFixer
```

### 2. Install Dependencies
```bash
npm run install-all
```

Or install manually:
```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Environment Variables

**Server (.env):**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/cityfixer
JWT_SECRET=your_secret_key
NODE_ENV=development
```

**Client (.env):**
```
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Start the Application

**Development Mode (both server and client):**
```bash
npm run dev
```

**Or separately:**
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm start
```

The frontend will run on `http://localhost:3000` and backend on `http://localhost:5000`

## GitHub Setup Instructions

### First Time Setup:

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name: `CityFixer`
   - Choose "Public" or "Private"
   - Click "Create repository"

2. **Connect your local repository to GitHub:**
   ```bash
   git remote add origin https://github.com/Nawab-sahil/CityFixer.git
   ```

3. **Verify the connection:**
   ```bash
   git remote -v
   ```

### Daily Workflow:

1. **Make changes and stage them:**
   ```bash
   git add .
   ```

2. **Commit your changes:**
   ```bash
   git commit -m "Feature: Add [feature name]"
   ```

3. **Push to GitHub:**
   ```bash
   git push origin main
   ```

### Helpful Git Commands:

```bash
# Check status
git status

# View commit history
git log --oneline

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Merge branch
git merge feature-name

# Pull latest changes
git pull origin main
```

## Features to Build

- [ ] User authentication (Login/Register)
- [ ] Service provider profiles
- [ ] Service booking system
- [ ] Payment integration
- [ ] Rating and reviews
- [ ] Order history
- [ ] Admin dashboard

## Contributing

1. Create a new branch for each feature
2. Commit regularly with meaningful messages
3. Push daily
4. Create pull requests for review

## License

ISC

## Author

Nawab-sahil
