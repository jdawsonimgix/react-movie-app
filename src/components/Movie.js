import React from "react";
import Imgix from "react-imgix";
import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "lazysizes/plugins/attrchange/ls.attrchange";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const Movie = ({ title, poster_path, overview, vote_average, mono }) => (
  <div className='movie'>
    <Imgix
      src={
        "https://jamie-dawson.imgix.net/image.tmdb.org/t/p/w1280" + poster_path
      }
      imgixParams={{
        auto: "compress,format",
        monochrome: mono,
      }}
      className='lazyload'
      sizes='auto'
      attributeConfig={{
        src: "data-src",
        srcSet: "data-srcset",
        sizes: "data-sizes",
      }}
      htmlAttributes={{
        src: "https://jdawson.imgix.net/photo-1543466835-00a7907e9de1.jpeg?w=10",
      }}
    />

    <div className='movie-info'>
      <h3>{title}</h3>
      <h6>{mono}</h6>
      <span className={`tag ${setVoteClass(vote_average)}`}>
        {vote_average}
      </span>
    </div>
    <div className='movie-over'>
      <h2>Overview:</h2>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movie;

{
  /* <Imgix 
        src={'https://jamie-dawson.imgix.net/image.tmdb.org/t/p/w1280' + poster_path} 
        width={300}
        height={450}
        imgixParams={{ monochrome: mono, auto: "compress,format" }}
        /> */
}
