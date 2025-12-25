import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const AnimePlayer = ({ trailer, poster, title }) => {
  const [play, setPlay] = useState(false);

  if (!trailer) {
    return (
      <div className="w-full aspect-video bg-black flex items-center justify-center text-gray-400">
        No trailer available 😔
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
      
      {/* Poster */}
      {!play && (
        <>
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
            <button
              onClick={() => setPlay(true)}
              className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 transition"
            >
              <FaPlay className="text-black text-2xl ml-1" />
            </button>

            <p className="mt-4 text-white text-lg font-semibold text-center px-4">
              Watch Trailer
            </p>
          </div>
        </>
      )}

      {/* Player */}
      {play && (
        <iframe
          src={trailer}
          title={title}
          allowFullScreen
          className="w-full h-full"
          frameBorder="0"
        />
      )}
    </div>
  );
};

export default AnimePlayer;
