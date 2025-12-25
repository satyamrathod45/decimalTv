import React from "react";
import SubHeading from "./SubHeading";
import Card from "./Card";

const PageLayout = ({ title, data, onCardClick }) => {
  return (
    <main className="min-h-screen text-white px-0 sm:px-6 py-10 max-w-7xl mx-auto">

      {/* PAGE TITLE */}
      <SubHeading heading={title} />

      {/* GRID */}
      <div className="
        flex
        flex-wrap
        gap-6
        justify-center
      ">
        {data?.map((anime) => (
          <Card
            key={anime.mal_id}
            imageUrl={
              anime.images?.webp?.large_image_url ||
              anime.images?.jpg?.large_image_url
            }
            title={anime.title}
            rating={anime.score}
            onClick={() => onCardClick?.(anime.mal_id)}
          />
        ))}
      </div>

      {/* EMPTY STATE */}
      {data?.length === 0 && (
        <p className="text-center text-gray-400 mt-20">
          Nothing to show here 👀
        </p>
      )}
    </main>
  );
};

export default PageLayout;
