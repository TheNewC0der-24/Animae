import axios from "axios";
import React, { useState,useEffect } from "react";
import dummy from "../assets/images/dummy.png"; 

const Results = () => {
  const [data, setData] = useState([]);
  const url = "https://api.jikan.moe/v4/anime";
  useEffect(() => {
    const getAnimaeData = async () => {
      var apiData = await axios.get(url)
      var passData=apiData.data.data.map((item) => {
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
    <div className="my-3 d-flex ">
      {(data.length>0)
        ? data.map((element) => {
          return (
            <div className="card col-md-3 mx-3">
              <img
                src={element.img ? element.img : dummy}
                className="card-img-top"
                alt="Image Not Found"
              ></img>
              <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">{element.body}</p>
                <a href={element.url} className="btn btn-primary">
                  Watch
                </a>
              </div>
            </div>
          );})
        : <div className="float-center fs-1">Sorry We have Nothing to show :(</div>
      }
    </div>
  );
};

export default Results;
