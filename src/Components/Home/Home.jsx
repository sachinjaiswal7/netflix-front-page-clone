import axios from "axios";
import React, { useEffect, useState } from "react";
import {AiOutlinePlus} from "react-icons/ai"
import {BsPlayFill} from "react-icons/bs"
// component for showing the cards
const Card = ({ img }) => {
  return (
    <>
      <img className="card" src={img} alt="something" />
    </>
  );
};

// one particular row of the card.
const Row = ({
  title,
  arr = [
    {
      img: "https://res.cloudinary.com/dbvox9jkm/image/upload/v1687375817/products/s0cygsbvdq1dlowelhz6.jpg",
    },
  ],
}) => {
  return (
    <div className="row">
      <h3>{title}</h3>
      <div>
        {arr.map((item, index) => {
          return (
            <Card key={index} img={`${imageBaseUrl}/${item.poster_path}`} />
          );
        })}
      </div>
      <hr />
    </div>
  );
};

//all urls
const baseUrl = "https://api.themoviedb.org/3/movie/";
const imageBaseUrl = "https://image.tmdb.org/t/p/original";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";
const upcoming = "upcoming";

const Home = () => {
  let [upcomingData, setUpcomingData] = useState([]);
  let [popularData, setPopularData] = useState([]);
  let [topRatedData, setTopRated] = useState([]);
  let [nowPlayingData, setNowPlaying] = useState([]);

  useEffect(() => {
    const options = {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2Y1OThkYjE4YjAxMjMwMzNkM2U2ZTliMTdmYzYzNiIsInN1YiI6IjY0YmQyM2QyZWI3OWMyMDBmZjlkNDQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nH6T3y51UY0LhEHeClS5hh6B2cbYkV5dugjCmg5Y7Q0",
      },
    };
    // fetching the data of upcoming movies
    const fetchUpcoming = async () => {
      const { data } = await axios.get(
        `${baseUrl}/${upcoming}?page=2`,
        options
      );
      setUpcomingData(data.results);
    };
    fetchUpcoming();

    // fetching the data of the popular movies
    const fetchPopular = async () => {
      const { data } = await axios.get(`${baseUrl}/${popular}`, options);
      setPopularData(data.results);
    };
    fetchPopular();

    //fetching the data of the topRated movies
    const fetchTopRated = async () => {
      const { data } = await axios.get(`${baseUrl}/${topRated}`, options);
      setTopRated(data.results);
    };
    fetchTopRated();

    //fetching the data of the nowPlaying movies
    const fetchNowPlaying = async () => {
      const { data } = await axios.get(`${baseUrl}/${nowPlaying}`, options);
      setNowPlaying(data.results);
    };
    fetchNowPlaying();
  }, []);

  return (
    <section>
      <div
        className="banner"
        style={{
          backgroundImage: popularData[0]
            ? `url(${imageBaseUrl}/${popularData[0].poster_path})`
            : "none",
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        {popularData[0] ? (
            <div className="info">
              <h1>{popularData[0].original_title}</h1>
              <div className="btn">
                <button><BsPlayFill/> Play</button>
                <button><AiOutlinePlus/>My List</button>
              </div>
              <p>{popularData[0].overview}</p>
          </div>
        ) : (
         null
        )}
      </div>
      <Row title={"Popular on Netflix"} arr={popularData} />
      <Row title={"Upcoming"} arr={upcomingData} />
      <Row title={"Top Rated"} arr={topRatedData} />
      <Row title={"Now Playing"} arr={nowPlayingData} />



     
    </section>
  );
};

export default Home;
