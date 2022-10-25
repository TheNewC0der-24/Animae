import React, { useState, useEffect } from "react";

import dummy from "../assets/images/dummy.png";

import axios from "axios";

const Results = () => {
  const [data, setData] = useState([]);

  const url = "https://api.jikan.moe/v4/anime";

  useEffect(() => {
    const getAnimaeData = async () => {
      var apiData = await axios.get(url)
      var passData = apiData.data.data.map((item) => {
        return {
          img: item.trailer.images.image_url,
          title: item.title_english,
          body: item.synopsis,
          url: item.url,
        };
      })
      setData(passData)
    }
    getAnimaeData();
  }, [])

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img
              src={dummy}
              className="card-img-top img-fluid img-thumbnail"
              alt="Image Not Found"
            ></img>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <a href="" className="btn btn-primary">
                Watch
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img
              src=""
              className="card-img-top"
              alt="Image Not Found"
            ></img>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <a href="" className="btn btn-primary">
                Watch
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img
              src=""
              className="card-img-top"
              alt="Image Not Found"
            ></img>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <a href="" className="btn btn-primary">
                Watch
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="float-center fs-1">Sorry We have Nothing to show :(</div> */}
    </>
  );
};

export default Results;
