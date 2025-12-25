import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Card from '../Components/Card';
import SubHeading from '../Components/SubHeading';
import { useNavigate } from 'react-router-dom';
import Search from '../Components/Search';
const SearchResult = () => {
    const navigate = useNavigate();
const {query} = useParams()
const [animeList, setAnimeList] = useState([])
const [isLoading, setIsLoading] = useState(true)

const getAnime = async (query) => {
    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`)
        const anime = await res.json();
        console.log(anime.data);
        setAnimeList(anime.data);
        setIsLoading(false)
    }catch (e){
        console.log(e);
        
    }
}

useEffect(
    () => {
        getAnime(query)
    }
    ,[query]
)

const handleCardClick = (id) => {
    navigate(`/anime/${encodeURIComponent(id)}`);
}
  return (
    <>

     {/* SeacrhBar */}
     <div  className='p-5 sm:p-10'>
        <Search />
     </div>
    <SubHeading heading={`Search Result for: ${query}`}/>
    <div className='flex flex-wrap gap-5 p-3 justify-center'>
        {
        animeList.map(
            anime => {
                return <Card key={anime.mal_id} imageUrl={anime.images.jpg.image_url} rating={anime.score} onClick={() => handleCardClick(anime.mal_id)}/>
            }
        )
        
        }

    
    </div>
    </>
  )
}

export default SearchResult