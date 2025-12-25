import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimeDetails = () => {
  const { id } = useParams();
  const [animedetails, setAnimedetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAnime = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const json = await res.json();
      const data = json.data;

      const animeData = {
        id: data.mal_id,
        imageUrl: data.images.webp.large_image_url,
        title: data.title,
        duration: data.duration,
        episodes: data.episodes,
        score: data.score,
        desc: data.synopsis,
        year: data.year,
        status: data.status,
        studio: data.studios?.[0]?.name || "Unknown",
      };

      setAnimedetails(animeData);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAnime();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="animedetails text-white">

{/* ===== HERO / BANNER ===== */}
<section className="relative w-full h-[40vh] sm:h-[70vh] overflow-hidden">
  {/* Background */}
  <img
    src={animedetails.imageUrl}
    alt="Anime Banner"
    className="absolute inset-0 w-full h-full object-cover scale-105 blur-sm"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20"></div>
</section>

{/* ===== POSTER + INFO (MOBILE SAFE) ===== */}
<section className="relative z-10 -mt-24 sm:-mt-40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-end">

      {/* Poster */}
      <div className="sm:min-w-[130px] w-32 sm:w-[220px] rounded-xl overflow-hidden shadow-xl">
        <img
          src={animedetails.imageUrl}

          
          alt="Poster"
          className="w-full h-full object-cover md:block"
        />
      </div>

      {/* Info */}
      <div className="max-w-2xl text-center sm:text-left">
        <h1 className="text-2xl sm:text-4xl font-bold mb-3">
          {animedetails.title}
        </h1>

        <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-sm text-gray-300 mb-4">
          <span>⭐ {animedetails.score}</span>
          <span>• {animedetails.episodes} Episodes</span>
          <span>• {animedetails.year || "—"}</span>
        </div>

        <p className="text-gray-200 leading-relaxed mb-6 line-clamp-4">
          {animedetails.desc}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="px-6 py-3 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400 transition">
            ▶ Watch Trailer
          </button>

          <button className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition">
            + Add to List
          </button>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ===== DETAILS SECTION ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-xl font-semibold mb-4">Details</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-300">
          <div>
            <p className="text-gray-400">Status</p>
            <p>{animedetails.status}</p>
          </div>

          <div>
            <p className="text-gray-400">Release</p>
            <p>{animedetails.year || "-"}</p>
          </div>

          <div>
            <p className="text-gray-400">Studio</p>
            <p>{animedetails.studio}</p>
          </div>

          <div>
            <p className="text-gray-400">Duration</p>
            <p>{animedetails.duration}</p>
          </div>
        </div>
      </section>

      {/* ===== RELATED (PLACEHOLDER) ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-xl font-semibold mb-4">Related Anime</h2>

        <div className="flex gap-4 overflow-x-auto">
          <div className="w-[150px] h-[220px] bg-white/10 rounded-xl"></div>
          <div className="w-[150px] h-[220px] bg-white/10 rounded-xl"></div>
          <div className="w-[150px] h-[220px] bg-white/10 rounded-xl"></div>
          <div className="w-[150px] h-[220px] bg-white/10 rounded-xl"></div>
        </div>
      </section>

    </div>
  );
};

export default AnimeDetails;
