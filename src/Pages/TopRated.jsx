import React, { useEffect, useState } from "react";
import PageLayout from "../Components/PageLayout";
import { useNavigate } from "react-router-dom";

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getTopRated = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://api.jikan.moe/v4/top/anime?limit=25"
      );
      const json = await res.json();

      const sorted =
        json?.data
          ?.filter((anime) => anime.score !== null)
          ?.sort((a, b) => b.score - a.score) || [];

      setTopRated(sorted);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTopRated();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center mt-20">
        Loading Top Rated Anime...
      </div>
    );
  }

  return (
    <PageLayout
      title="⭐ Top Rated Anime"
      data={topRated}
      onCardClick={(id) => navigate(`/anime/${id}`)}
    />
  );
};

export default TopRated;
