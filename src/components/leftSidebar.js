import React from 'react';

const LeftSidebar = ({ topAnime }) => {

  const style = {
    cursor: 'pointer'
  }

  return (
    <>
      <h4>Top 5 Anime</h4>
      <hr />
      <ul style={style} className='list-group'>
        {topAnime.map(anime => (
          <a
            href={anime.url}
            target='_blank'
            rel="noreferrer"
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