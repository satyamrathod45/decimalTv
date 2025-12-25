import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimePlayer from "../Components/AnimePlayer";

const WatchAnime = () => {
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAnime = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const json = await res.json();
      const data = json.data;

      const animeData = {
        id: data.mal_id,
        imageUrl: data.images?.webp?.large_image_url,
        title: data.title,
        duration: data.duration,
        episodes: data.episodes,
        score: data.score,
        desc: data.synopsis,
        year: data.year,
        status: data.status,
        studio: data.studios?.[0]?.name || "Unknown",
        trailer: data.trailer?.embed_url || null,
      };

      setAnimeDetails(animeData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAnime();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Loading trailer… 🍿
      </div>
    );
  }

  if (!animeDetails?.trailer) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        No trailer available 😔
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-black">
      <AnimePlayer
  trailer={animeDetails.trailer}
  poster={animeDetails.imageUrl}
  title={animeDetails.title}
/>

    </div>
  );
};

export default WatchAnime;
