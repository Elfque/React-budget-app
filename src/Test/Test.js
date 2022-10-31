// import { useEffect, useState } from "react";

const Test = () => {
  // const [charWall, setCharWall] = useState(null);
  // const [mangWall, setMangWall] = useState(null);
  // const [popWall, setPopWall] = useState(null);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "174138913emshc7a7d610491d2fep1fe48ejsn51e5f94cfd9a",
  //       "X-RapidAPI-Host": "best-manga-anime-wallpapers.p.rapidapi.com",
  //     },
  //   };

  //   fetch("https://best-manga-anime-wallpapers.p.rapidapi.com", options)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       setCharWall(response[0].characters);
  //       setPopWall(response[0].popular);
  //       setMangWall(response[0].manga_anime);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div>
      <h1>Popular</h1>
      {/* {charWall?.map((wall) => (
        <div>
          <img src={wall.thumbnail} alt="" />
          <div>{wall.title}</div>
        </div>
      ))} */}
    </div>
  );
};

export default Test;
