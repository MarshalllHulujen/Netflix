import React from "react";

export const Header1 = () => {
  return (
    <header>
      <div className="main">
        <div className="navbar">
          <a href="rsgonsrgh">
            <img src="/image/Vector.png" width={"136px"} height={"38.8px"} />
          </a>
          <a href="oidrtnd" className="Link">
            Home
          </a>
          <a href="oidrtnd" className="Link2">
            TV Shows
          </a>
          <a href="oidrtnd" className="Link2">
            Movies
          </a>
          <a href="oidrtnd" className="Link2">
            New & Popular{" "}
          </a>
          <a href="oidrtnd" className="Link2">
            My List{" "}
          </a>
          <a href="oidrtnd" className="Link2">
            Browse by Language
          </a>
        </div>
        <div className="navbar2">
          <button className="btn1">
            <img src="/image/Search.png" width={"36px"} height={"28px"}></img>
          </button>
          <button className="btn1">
            <img src="/image/Bell.png"></img>
          </button>
          <button className="btn1">
            <img src="/image/Avatar.png" width={"28px"} height={"28px"}></img>
          </button>
          <button className="btn1">
            <img src="/image/Arrow.png"></img>
          </button>
        </div>
        <video
          width={"1920px"}
          height={"1162px"}
          autoPlay
          muted
          loop
          id="Trailer"
        >
          <source src="/image/Trailer1.mp4" type="video/mp4" />
        </video>
      </div>
      <div id="Title">
        <img
          src="https://occ-0-2909-325.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcEZtusRgzulwZKAsulpi85KqPlKavbJa8uVcN9KC7v5I-ocVipC5clD8tSRQEs4-UlA___fwC3SCLiLu6IIDEQdAU6dufpLmzrbBfR_zl5Tp-YOsMDcLqxQD2FI5bnLnlsYfmTqOHjW4A7diiKH9gx9P7lzzJAlOB2sILd-SMRA7nS4tK7dVg.png?r=e11"
          alt="All Quiet on the Western Front"
          class="logo"
          data-uia="title-logo"
          className="Title"
          width={"700px"}
        ></img>
        <div className="texts">
          War breaks out in Germany in 1914. Paul Bäumer and his classmates
          quickly enlist in the army to serve their fatherland. No sooner are
          they drafted than the first images from the battlefield show them the
          reality of war.
        </div>
        <div className="button">
          <button className="button12">
            <a
              href="https://2embed.org//embed/movie?tmdb=49046"
              className="Play"
            >
              <img src="/image/Polygon1.png" width={"20px"} height={"20px"} />{" "}
              Play
            </a>
          </button>
          <button className="button123124">More Info</button>
        </div>
      </div>
    </header>
  );
};
