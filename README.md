# MyBrandName — AI Branding Assistant

![MyBrandName](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)

MyBrandName is an AI-powered platform that helps startups create a complete brand identity—logos, stories, and marketing assets—in minutes.

---

## Features

- **AI-Powered Branding** – Instantly generate logos, brand stories, and marketing assets using OpenAI.
- **Authentication** – Secure user login and registration powered by Supabase.
- **Database** – Supabase for storing users, brands, assets, and subscription data.
- **Frontend** – Responsive UI built with TypeScript, Vite, and TailwindCSS.
- **Backend API** – Node.js + Express handles AI generation, authentication, and data management.
- **Subscription Management** – Stripe integration for plan upgrades and payments.
- **Continuous Integration (CI)** – Automated testing and build workflows via GitHub Actions.
- **Versioning & Changelog** – Semantic versioning with a clear project evolution record.
- **Deployment Ready** – Easily deploy frontend (Vercel) and backend (Render) with Supabase integration.

---

## Tech Stack

- Runtime: Node.js + Express.js.
- Language: TypeScript.
- Frontend: Vite + Tailwind CSS.
- Database & Auth: Supabase (Database, Storage, Authentication).
- AI Service: OpenAI API (Logo, Story, and Content Generation).
- HTTP Client: Axios/Fetch API.
- CI/CD: GitHub Actions (Automated Testing & Deployment).
- Hosting: Vercel (Frontend) + Render (Backend).

---

## Quick Start

### Prerequisites

- Node.js 16+
- Supabase project (for Authentication, Database, and Storage)
- OpenAI API key (for AI-powered logo and content generation)
- Stripe account (for subscription and payment handling)

---

### Installations

**Clone the repository**
```bash
git clone https://github.com/<your username>/mybrandname.git
```
---

### Install Dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```
---

### Environment setup

cp backend/.env.example backend/.env
Update .env with your configuration:

Supabase URL and API key

OpenAI API key

Stripe API key

Development

---

# Run backend
cd backend && npm run dev

---

# Run frontend
cd frontend && npm run dev
Production Build

npm run build
npm start
Visit: http://localhost:5173

Repository Structure

/mybrandname
├── /frontend
│   ├── /src
│   │   ├── /components        # UI Components (AuthForm, Navbar, etc.)
│   │   ├── /pages             # App pages (Home, Dashboard, Pricing)
│   │   ├── /hooks             # Custom React hooks (useAuth, useLogoGenerator)
│   │   ├── /lib               # Config files (Supabase, API client, constants)
│   │   ├── /styles            # Global and component styles
│   │   ├── App.tsx            # Main routing setup
│   │   └── main.tsx           # React entry point
│   ├── public/                # Public assets (icons, logos)
│   ├── tailwind.config.ts     # Configures Tailwind CSS settings
│   ├── vite.config.ts         # Contains build and development settings for the Vite bundler
│   └── package.json           # Lists frontend project dependencies, scripts, and metadata
│
├── /backend
│   ├── /src
│   │   ├── /routes            # Express routes (auth, brand, assets, subscription)
│   │   ├── server.ts          # Main Express server entry
│   │   └── config/            # Environment and DB configs
│   └── package.json           # Lists backend project dependencies, scripts, and metadata for Node.js
│
└── README.md

---

### Architecture Overview

#### Frontend 

- Built with TypeScript + Vite + Tailwind CSS

- Connects to Supabase for authentication, backend API for AI generation, and Stripe for payments

---

#### Backend

- Built with Node.js + Express

- Handles authentication, AI content generation, and database writes via Supabase

---

### Supabase Tables

| Table    | Purpose |
| -------- | ------- |
| users  | Stores user accounts|
| brands | Saves generated brand info|
| assets    | Links to stored images/files|
| subscriptions | Tracks plan and payment status| 

---

### Example API Endpoints

#### Auth Routes

| Endpoint	| Method | Description |
| ----------| ------- | ------------|
| /api/auth/signup | POST | Register new user |
| /api/auth/login | POST | Log in user |

#### Branding Routes

| Endpoint	| Method | Description |
| ----------| ------- | ------------|
| /api/brand/logo | POST | Generate AI-powered logo |		

#### Example Request:

```bash
POST /api/brand/logo
{
  "brandName": "NovaTech",
  "industry": "Tech",
  "style": "Modern Minimal"
}
```

#### Example Response:

```bash
{
  "logoUrl": "https://supabase.storage/novatech-logo.png",
  "palette": ["#121212", "#FF005C"]
}
```
---

### Authentication (Supabase)

```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);
```
---

### Environment Variables

| Variable    | Description |
| -------- | ------- |
| VITE_SUPABASE_URL  | Supabase project URL|
| OPENAI_API_KEY  | API key for AI generation|
| PORT  | Backend port (default: 5000)|

---

### Testing

Use Vitest/Jest for unit testing and Supertest for API routes.

```bash
npm run test
```

---

### Continuous Integration (CI)
CI automatically runs tests when you push new code. This ensures your main branch always stays stable.

Example GitHub Action Workflow:

```bash
name: MyBrandName CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: |
          cd backend && npm ci && npm run test
          cd ../frontend && npm ci && npm run build
```

**Tip:** CI helps avoid “it works on my machine” problems.

---

### Versioning & Changelog
Keep a CHANGELOG.md file documenting updates.

Use Semantic Versioning (MAJOR.MINOR.PATCH):

Example:
1.1.0 → Added new features.

---

### Contributing
We welcome contributions from developers who want to improve MyBrandName!

Follow these steps to contribute effectively:

#### Fork the Repository
Click the Fork button on GitHub to create your copy.

#### Clone Your Fork

```bash
git clone https://github.com/<your-username>/mybrandname.git
```

#### Create a Feature Branch

```bash
git checkout -b feat/your-feature-name
```

#### Set Up the Environment
Follow setup instructions in README.

#### Follow Code Style

```bash
npm run lint
```

#### Use Clear Commit Messages

`feat`: new feature

`fix`: bug fix

`docs`: documentation update

`refactor`: code restructuring

#### Write or Update Tests

```bash
npm run test
```

#### Submit a Pull Request (PR)
Include:

- Description of changes

- Issue references (for example, Closes #12)

- Screenshots or examples if applicable

#### Participate in Code Review
Be collaborative and responsive.

---

### Code of Conduct

- Be respectful, kind, and patient

- Welcome feedback constructively

- Avoid offensive or discriminatory language

- Focus on collaboration

- Credit contributors appropriately

- Report concerns privately

Let’s work together to make MyBrandName a project where everyone feels valued and supported. 💙

---

### Deployment

| Component	| Platform | Notes |
| ----------| ------- | ------------|
| Frontend | Vercel/Netlify | Add env variables |
| Backend | Render/Railway | Add Supabase & AI keys |
| Database | Supabase | Auth + Storage + Database |
		
---

### License
This project is licensed under the MIT License — see the LICENSE file for details.

---
