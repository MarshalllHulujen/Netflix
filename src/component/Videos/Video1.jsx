import { useState, useEffect } from "react";
import axios from "axios";

export const Video = () => {
  const [data, setData] = useState({});
  const API_ID = `tt7046974`;
  const options = `https://2embed.org/embed/movie?imdb=${API_ID}`;
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(options).then((response) => {});
      setData(response.data);
    };
    getData();
  }, []);
  console.log(data.data);
};
