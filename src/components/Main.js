import React, { useState, useEffect } from 'react'
import Header from './header'
import LeftSidebar from './leftSidebar';
import Search from "./searchBar";
import Results from './results';

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

  return (
    <>
      <Header />
      <div className='mx-5 mt-5'>
        <div className="row">
          <div className="col-md-3">
            <LeftSidebar topAnime={topAnime} />
          </div>
          <div className="col-md-9">
            <Search />
            <Results />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;