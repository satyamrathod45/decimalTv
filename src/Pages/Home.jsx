
import React, { useEffect, useState } from "react";
import Search from "../Components/Search";
import SubHeading from "../Components/SubHeading";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";
/* ================= HERO LOCAL DATA ================= */
const heroAnimes = [
  {
    id: 1,
    title: "One Piece",
    desc:
      "Monkey D. Luffy sets sail with his crew of Straw Hats in search of the ultimate treasure, One Piece.",
    rating: 9.1,
    banner: "/images/hero/onepiece-banner.jpg",
    poster: "https://cdn.myanimelist.net/images/anime/1405/149053l.webp",
    video: "https://motionbgs.com/media/5818/gear-5-technique.960x540.mp4",
  },
  {
    id: 2,
    title: "Naruto",
    desc:
      "Naruto Uzumaki dreams of becoming Hokage while battling powerful enemies and his own destiny.",
    rating: 8.9,
    banner: "/images/hero/naruto-banner.jpg",
    poster: "https://cdn.myanimelist.net/images/anime/1141/142503l.webp",
    video: "https://motionbgs.com/media/153/sasuke.960x540.mp4",
  },
  {
    id: 3,
    title: "SPY × FAMILY",
    desc:
      "A spy, an assassin, and a telepath form a fake family—each hiding their true identity.",
    rating: 8.8,
    banner: "/images/hero/spyfamily-banner.jpg",
    poster: "https://cdn.myanimelist.net/images/anime/1111/127508.jpg",
    video: "https://motionbgs.com/media/2736/forger-family-spy-x-family.960x540.mp4",
  },
];


const Home = () => {
  /* ================= HERO STATE ================= */
  const [heroIndex, setHeroIndex] = useState(0);

  /* ================= HOME DATA ================= */
  const [homePageAnime, setHomePageAnime] = useState({
    trending: [],
    topRated: [],
    upcoming: [],
  });

  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);

  /* ================= FETCH HOME DATA ================= */
  const getHomePage = async () => {
    try {
      setLoading(true);

      // ONE call for trending + topRated (avoid rate-limit)
      const topRes = await fetch(
        "https://api.jikan.moe/v4/top/anime?limit=25"
      );
      const topJson = await topRes.json();

      const trending = topJson?.data?.slice(0, 10) || [];

      const topRated =
        topJson?.data
          ?.filter((anime) => anime.score !== null)
          ?.sort((a, b) => b.score - a.score)
          ?.slice(0, 10) || [];

      // Upcoming (separate endpoint)
      const upcomingRes = await fetch(
        "https://api.jikan.moe/v4/seasons/upcoming"
      );
      const upcomingJson = await upcomingRes.json();

      setHomePageAnime({
        trending,
        topRated,
        upcoming: upcomingJson?.data?.slice(0, 10) || [],
      });
    } catch (e) {
      console.error("Home API Error:", e);
    } finally {
      setLoading(false);
    }
  };

  /* ================= EFFECTS ================= */
  useEffect(() => {
    getHomePage();

    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroAnimes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center mt-20">
        Loading Home Page...
      </div>
    );
  }

  return (
    <main className="text-white  p-10">

      {/* SEARCH */}
      <Search />

      {/* ================= HERO ================= */}
      <section className="relative mt-5 p-10 w-full h-[60vh] sm:h-[80vh] overflow-hidden text-white rounded-3xl">

  {/* ===== DESKTOP VIDEO BACKGROUND ===== */}
  <video
    key={heroAnimes[heroIndex].video}
    autoPlay
    loop
    muted
    playsInline
    poster={heroAnimes[heroIndex].banner}
    className="sm:block absolute inset-0 w-full h-full object-cover rounded-3xl"
  >
    <source src={heroAnimes[heroIndex].video} type="video/mp4" />
  </video>

  {/* ===== MOBILE IMAGE FALLBACK ===== */}
  <img
    src={heroAnimes[heroIndex].banner}
    alt={heroAnimes[heroIndex].title}
    className="block sm:hidden absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

  {/* Content */}
  <div className="relative z-10 h-full flex items-end">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-end">

        {/* Poster */}
        <div className="hidden sm:block sm:w-[220px] rounded-xl overflow-hidden shadow-xl">
          <img
            src={heroAnimes[heroIndex].poster}
            alt="Poster"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3">
            {heroAnimes[heroIndex].title}
          </h1>

          <div className="text-sm text-gray-300 mb-4">
            ⭐ {heroAnimes[heroIndex].rating}
          </div>

          <p className="text-gray-200 mb-6 line-clamp-3">
            {heroAnimes[heroIndex].desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition">
              ▶ Watch
            </button>
            <button className="px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition">
              + My List
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


      {/* ================= TRENDING ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <SubHeading heading="Trending Anime" />
        <div className="flex gap-4 overflow-x-auto flex-nowrap scrollbar-hide pb-2">
          {homePageAnime.trending.map((anime) => (
            <Card
              key={anime.mal_id}
              imageUrl={
                anime.images?.webp?.large_image_url ||
                anime.images?.jpg?.large_image_url
              }
              title={anime.title}
              rating={anime.score}
              onClick={() => navigate(`/anime/${anime.mal_id}`)}  
            />
          ))}
        </div>
      </section>

      {/* ================= TOP RATED ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <SubHeading heading="Top Rated" />
        <div className="flex gap-4 overflow-x-auto flex-nowrap scrollbar-hide pb-2">
          {homePageAnime.topRated.map((anime) => (
            <Card
              key={anime.mal_id}
              imageUrl={
                anime.images?.webp?.large_image_url ||
                anime.images?.jpg?.large_image_url
              }
              title={anime.title}
              rating={anime.score}
              onClick={() => navigate(`/anime/${anime.mal_id}`)}
            />
          ))}
        </div>
      </section>

      {/* ================= RECOMMENDED ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
        <SubHeading heading="Recommended For You" />
        <div className="flex gap-4 overflow-x-auto flex-nowrap scrollbar-hide pb-2">
          {homePageAnime.upcoming.map((anime) => (
            <Card
              key={anime.mal_id}
              imageUrl={
                anime.images?.webp?.large_image_url ||
                anime.images?.jpg?.large_image_url
              }
              title={anime.title}
              rating={anime.score}
              onClick={() => navigate(`/anime/${anime.mal_id}`)}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
