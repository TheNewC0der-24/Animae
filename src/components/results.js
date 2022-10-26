import React from "react";

import TextTruncate from 'react-text-truncate';

import dummy from "../assets/dummy.png";
import defaultImg from "../assets/default.png";

const Results = (props) => {

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.animeData.length > 0 ?
          props.animeData.map(anime => (
            <div className="col">
              <div className="card h-100">
                <img
                  src={anime.img ? anime.img : dummy}
                  className="img-fluid img-thumbnail"
                  alt="thumbnail"
                />
                <div className="card-body">
                  <h5 className="card-title">{anime.title ? anime.title : "Anonymous"}</h5>
                  <span className="badge bg-primary">{anime.rating}</span>
                  <hr />
                  <TextTruncate line={3} element="p" truncateText="…" text={anime.body} className="card-text" />
                  <a href={anime.url} target="_blank" rel="noreferrer" className="btn btn-primary d-block">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          )) : (
            <div className="w-100">
              <img className="img-fluid d-flex mx-auto" width={300} src={defaultImg} alt="No Record" />
              <h1 className="text-center">Sorry We have Nothing to show :(</h1>
            </div>
          )}
      </div>
    </>
  );
};

export default Results;
