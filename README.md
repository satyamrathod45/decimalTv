# 🎬 DecimalTv — Anime Streaming UI (React)

DecimalTv is a modern, responsive anime streaming web application inspired by popular OTT platforms.  
It focuses on clean UI/UX, smooth navigation, and real-world frontend architecture using React.

---

## 🚀 Features

- 🎥 **Dynamic Hero Section**

  - Auto-switching featured anime (One Piece, Naruto, Spy×Family)
  - Background video on desktop with image fallback on mobile
  - Poster, rating, and description overlay

- 🔍 **Search Anime**
  - Search anime using Jikan API (MyAnimeList data)
  - Dedicated search results page

- 🔥 **Trending Anime**
  - Displays currently popular anime using Jikan API
  - Responsive grid layout

- ⭐ **Top Rated Anime**
  - Client-side sorted anime based on score
  - Clean pagination-ready structure

- ❤️ **My List**
  - Custom page designed for future local storage / user favorites

- 📱 **Fully Responsive**
  - Mobile-first design
  - Horizontal scrolling sections
  - Touch-friendly UI

- 🧭 **Reusable Page Layout**
  - Common page component for Trending, Top Rated, and future pages

- 🧩 **Modern Navigation**
  - Sticky navbar
  - Mobile slide menu
  - Footer always pinned to bottom using CSS Grid

---

## 🛠 Tech Stack

- **Frontend:** React, React Router
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **API:** Jikan API (MyAnimeList unofficial)
- **State Management:** React Hooks
- **Build Tool:** Vite

---

## 🧠 Architecture Highlights

- Reusable components (`Card`, `PageLayout`, `SubHeading`)
- Clean separation of UI and API logic
- Defensive rendering to avoid runtime crashes
- Layout-first approach (Grid + Flex)
- Scalable folder structure

---

## 📂 Folder Structure

src/
├─ Components/
│ ├─ Card.jsx
│ ├─ PageLayout.jsx
│ ├─ Search.jsx
│ ├─ SubHeading.jsx
│ ├─ Navbar.jsx
│ └─ Footer.jsx
├─ Pages/
│ ├─ Home.jsx
│ ├─ Trending.jsx
│ ├─ TopRated.jsx
│ ├─ SearchResult.jsx
│ └─ AnimeDetails.jsx
├─ assets/
└─ App.jsx

yaml
Copy code

---

## ⚠️ Disclaimer

DecimalTv does not host or stream any media content.  
All anime data is fetched from the public **Jikan API** for educational and portfolio purposes only.

---

## 👤 Author

**Satyam Rathod**  
Frontend Developer | React Enthusiast  

- GitHub: https://github.com/satyamrathod45  
- LinkedIn: https://linkedin.com  
- Instagram: https://instagram.com  

---

## 📌 Note for Recruiters

This project demonstrates:
- Strong React fundamentals
- Real-world UI architecture
- API integration handling
- Responsive design thinking
- Clean, maintainable code practices
