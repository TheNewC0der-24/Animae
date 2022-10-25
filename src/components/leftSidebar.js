import React from 'react';

const LeftSidebar = ({ topAnime }) => {

  const style = {
    cursor: 'pointer'
  }

  return (
    <>
      <h4>Top 5 Anime</h4>
      <ul style={style} className='list-group mt-3 mb-5'>
        {topAnime.map(anime => (
          <a
            href={anime.url}
            target='_blank'
            key={anime.mal_id}
            className='list-group-item list-group-item-primary rounded mb-3'>
            {anime.title_english}
          </a>
        ))}
      </ul>
    </>
  )
}

export default LeftSidebar;