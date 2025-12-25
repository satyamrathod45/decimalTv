import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import SearchBanner from '../assets/searchBanner.png'

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search/${encodeURIComponent(query)}`);
  };

  return (
    <div className="relative w-full sm:h-[60vh] h-[30vh] overflow-hidden rounded-3xl">
      <img
        src={SearchBanner}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <form onSubmit={handleSearch} className="relative w-full max-w-md">
          {/* Search Icon Button */}
          <button
            type="submit"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-400 transition"
          >
            <HiOutlineSearch size={22} />
          </button>

          {/* Input */}
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search anime..."
            className="
              w-full pl-12 pr-4 py-3
              rounded-lg
              bg-[#0B0F1A]/80
              text-white
              outline-none
              placeholder-gray-400
              focus:ring-2 focus:ring-green-500/40
            "
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
