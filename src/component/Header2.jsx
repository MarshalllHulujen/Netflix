import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Header2 = () => {
  const [movies, setMovies] = useState("");

  useEffect(() => {
    const DataGetter = async (event) => {
      const result = await axios.get(
        `https://imdb8.p.rapidapi.com/auto-complete`,
        {
          params: { q: "E" },
          headers: {
            "X-RapidAPI-Key":
              "ff6756dbe6msh4d9ae1dbe00ddb6p1e859cjsnb57fb96afb73",
            "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
          },
        }
      );
      setMovies(result.data);
    };
    DataGetter();
  }, []);

  return (
    <>
      {movies?.data?.map((el) => {
        return (
          <div className="STANDINGHHERE">
            <img src={el.d.l.imageUrl}></img>
          </div>
        );
      })}
    </>
  );
};
