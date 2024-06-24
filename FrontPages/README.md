# This project includes the following (FRONT END):

- Sign Up Page
- Login page
- Data Entry page
- Tracker page
- Tailwind

- Structure of Project:

  src/
  │
  ├── assets/
  │ └── Logo and Images used throughout the project
  │
  ├── components/
  │ ├── Intro.tsx (Contains company introduction paragraph)
  │ ├── LoginForm.tsx
  │ ├── RegForm.tsx
  │ ├── OGFirstPage(Redundant).tsx (Old code for first page)
  │ ├── TopBarDash.tsx
  │ ├── Sidebar.tsx
  │ ├── DataEntries.tsx
  │ ├── DummyData.tsx (Pre-filled data for Data Entries page)
  │ ├── TrackerEntries.tsx
  │ └── DummyDataTracker.tsx (Pre-filled data for the Tracker Entries page)
  │
  ├── pages/
  │ ├── Login.tsx
  │ ├── Register.tsx
  │ ├── DataEntryDashboard.tsx
  │ └── TrackerDashboard.tsx
  │
  ├── store/
  │ ├── AuthSlice.tsx
  │ ├── DashboardSlice.tsx
  │ └── Store.tsx
  │
  ├── index.css (contains tailwind css files)
  ├── App.tsx
  └── main.tsx
