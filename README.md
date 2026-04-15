# KeenKeeper — Personal CRM for Friendships

KeenKeeper is a minimalist relationship management dashboard designed to help users maintain meaningful connections. It tracks interaction frequency, sets relationship goals, and visualizes friendship health through real-time analytics and an automated timeline.

---

## Technologies Used

| Layer | Technology |
|---|---|
| Framework | React.js |
| Routing | React Router DOM (v6+) |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Icons | React Icons (Lucide, FontAwesome, Io) |
| Notifications | React Hot Toast / Toastify |
| Deployment | Vercel / Netlify |

---

## Key Features

### Smart Relationship Tracking
Manage a curated list of friend profiles using a specialized JSON-driven dashboard. Each friend card features a dynamic Status Indicator — `on-track`, `almost due`, or `overdue` — that changes color based on your contact goals to ensure no one is forgotten.

### Interaction Timeline
Never lose track of your last conversation. The Quick Check-In feature allows you to log Calls, Texts, and Video chats with a single click. These interactions are automatically timestamped and stored in a master Timeline Page, which includes filtering capabilities to sort by interaction type.

### Friendship Analytics
Visualize your social habits through the Friendship Analytics page. Using Recharts, KeenKeeper generates a sleek Donut Chart that breaks down your communication style (Call vs. Text vs. Video), helping you understand how you best connect with your circle.

---

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/keen-keeper.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Project Structure
```
keen-keeper-react-communication-webapp
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ friends.json
├─ README.md
├─ src
│  ├─ assets
│  │  ├─ call.png
│  │  ├─ facebook.png
│  │  ├─ instagram.png
│  │  ├─ logo-xl.png
│  │  ├─ logo.png
│  │  ├─ text.png
│  │  ├─ twitter.png
│  │  └─ video.png
│  ├─ component
│  │  ├─ banner
│  │  │  └─ Banner.jsx
│  │  ├─ footer
│  │  │  └─ Footer.jsx
│  │  ├─ friendDetails
│  │  │  └─ FriendDetails.jsx
│  │  ├─ friends
│  │  │  ├─ Friend.jsx
│  │  │  └─ Friends.jsx
│  │  ├─ home
│  │  │  └─ Homepage.jsx
│  │  ├─ navbar
│  │  │  └─ Navbar.jsx
│  │  ├─ stat
│  │  │  └─ StatPage.jsx
│  │  └─ timeline
│  │     └─ TimelinePage.jsx
│  ├─ context
│  │  └─ ContextProvider.jsx
│  ├─ eroor
│  │  ├─ ErrorPage.jsx
│  │  └─ ScrollToTop.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ root
│  │  └─ Root.jsx
│  └─ route
│     └─ Router.jsx
└─ vite.config.js

```



## Live Demo & Source

[Live Demo](#) &nbsp;|&nbsp; [LinkedIn](www.linkedin.com/in/rokan45)

---

*Developed by [Rokanuzzaman] — CS Undergraduate | Full-Stack Aspirant*
