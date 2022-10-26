import React, { useState, useEffect } from 'react';

import Header from './header';
import LeftSidebar from './leftSidebar';
import Search from "./searchBar";
import Results from './results';
import axios from 'axios';

const Main = () => {

  const [topAnime, setTopAnime] = useState([]);
  const [searchAnime, setSearchAnime] = useState("");
  const [animeData, setAnimeData] = useState([]);

  const getTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
      .then(res => res.json());

    setTopAnime(temp.data.slice(0, 5));
  }

  useEffect(() => {
    getTopAnime();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(searchAnime);
  }

  const fetchAnime = async (query) => {
    const temp = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&limit=20`);
    const data = temp.data.data.map((item) => {
      return {
        img: item.images.jpg.large_image_url,
        title: item.title_english,
        body: item.synopsis,
        url: item.url,
      };
    })
    setAnimeData(data);
  }

  return (
    <>
      <Header />
      <div className='mx-5 mt-5'>
        <div className="row">
          <div className="col-md-3 bg-light h-50 p-3 mb-5">
            <LeftSidebar topAnime={topAnime} />
          </div>
          <div className="col-md-9">
            <Search
              handleSearch={handleSearch}
              searchAnime={searchAnime}
              setSearchAnime={setSearchAnime}
            />
            <hr />
            <Results
              animeData={animeData}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;