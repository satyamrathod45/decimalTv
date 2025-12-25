import React, { useEffect, useState } from "react";
import PageLayout from "../Components/PageLayout";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getTrending = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=25"
      );
      const json = await res.json();
      setTrending(json?.data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTrending();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center mt-20">
        Loading Trending Anime...
      </div>
    );
  }

  return (
    <PageLayout
      title="🔥 Trending Anime"
      data={trending}
      onCardClick={(id) => navigate(`/anime/${id}`)}
    />
  );
};

export default Trending;
