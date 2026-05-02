# BookNest Library

BookNest Library is a modern digital library web application built with Next.js, Tailwind CSS, DaisyUI, BetterAuth, and MongoDB. Users can browse books, filter by category, search by title, login/register, view private book details, borrow books digitally, and update their profile information.

## Live URL

Add your deployed URL here:

```txt
https://your-project-name.vercel.app
```

## Key Features

- Modern responsive homepage
- Navbar with conditional login/logout UI
- Footer with social and contact section
- Book data generated with JSON
- All books page
- Search books by title
- Category sidebar filter: Story, Tech, Science
- Private single book details page
- Borrow confirmation toast
- Login with email and password
- Register with name, email, photo URL and password
- Google social login
- My Profile private page
- Update user name and image
- Animate.css animation used in banner
- Environment variables used for secure keys
- Ready for Vercel deployment

## Tech Stack

- Next.js
- React
- Tailwind CSS
- DaisyUI
- BetterAuth
- MongoDB
- React Hot Toast
- Animate.css

## NPM Packages Used

```bash
better-auth
mongodb
react-hot-toast
animate.css
daisyui
swiper
```

## Project Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create environment file

Copy `.env.local.example` and rename it to `.env.local`.

```bash
cp .env.local.example .env.local
```

Then update the values:

```env
BETTER_AUTH_SECRET=replace-with-a-long-random-secret
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your-mongodb-uri
MONGODB_DB=booknest-library
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 3. Run development server

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Google OAuth Setup

In Google Cloud Console, add these redirect URLs.

Local:

```txt
http://localhost:3000/api/auth/callback/google
```

Production:

```txt
https://your-project-name.vercel.app/api/auth/callback/google
```

## Deployment on Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Add all environment variables in Vercel project settings.
4. Change production environment variable:

```env
BETTER_AUTH_URL=https://your-project-name.vercel.app
```

5. Deploy.

## Suggested GitHub Commits

```bash
git add .
git commit -m "Initial Next.js project setup"

git add .
git commit -m "Configure Tailwind CSS and DaisyUI"

git add .
git commit -m "Create main layout with navbar and footer"

git add .
git commit -m "Add book JSON data and API routes"

git add .
git commit -m "Create home page sections"

git add .
git commit -m "Build all books page with search and filters"

git add .
git commit -m "Add private book details page"

git add .
git commit -m "Configure BetterAuth with MongoDB"

git add .
git commit -m "Create login and registration pages"

git add .
git commit -m "Create profile and update profile pages"

git add .
git commit -m "Add deployment configuration and README"
```

## Important Notes

- Do not push `.env.local` to GitHub.
- Add environment variables in Vercel before deployment.
- This project uses remote Unsplash image URLs, so no local image download is required.
- Protected routes are handled using `PrivateRoute`.
