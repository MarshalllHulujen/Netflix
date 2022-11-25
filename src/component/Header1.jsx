import React from "react";
import { useState } from "react";
import axios from "axios";

// export const Header1 = () => {
//   return (
//     <div id="Header">
//       <div id="text">
//         <div id="num1">
//           <img
//             src="/image/logo4.png"
//             alt="Netflix logo"
//             width={"120px"}
//             height={"110px"}
//           />
//           <button id="btn1">Home</button>
//           <button id="btn2">Series</button>
//           <button id="btn2">Films</button>
//           <button id="btn2">Latest</button>
//           <button id="btn2">My List</button>
//           <button id="btn2">Browse by Languages</button>
//           <button id="btn3">
//             <img
//               src="https://www.seekpng.com/png/full/920-9209972_magnifying-glass-png-white-search-icon-white-png.png"
//               width={"25px"}
//               height={"25px"}
//             />
//           </button>
//           <button
//             class="notifications-menu"
//             aria-haspopup="true"
//             aria-expanded="false"
//             aria-label="Notifications"
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               class="Hawkins-Icon Hawkins-Icon-Standard"
//             >
//               <path
//                 fill-rule="evenodd"
//                 clip-rule="evenodd"
//                 d="M13 4.07092C16.3922 4.55624 18.9998 7.4736 18.9998 11V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11C4.99978 7.47345 7.6076 4.55599 11 4.07086V2L13 2V4.07092ZM16.9998 15.1287V11C16.9998 8.23858 14.7612 6 11.9998 6C9.23836 6 6.99978 8.23858 6.99978 11V15.1287C8.64041 15.0437 10.3089 15 11.9998 15C13.6907 15 15.3591 15.0437 16.9998 15.1287ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
//                 fill="currentColor"
//               ></path>
//             </svg>
//           </button>
//           <button id="btn3">
//             <img
//               class="profile-icon"
//               src="http://occ-0-5163-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
//               alt=""
//             />
//             <span class="caret" role="presentation"></span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export const Header1 = () => {
  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/auto-complete",
    params: { q: "game " },
    headers: {
      "X-RapidAPI-Key": "1fd01d8a2fmsh293d5054690e67cp1c2385jsnc49794714bed",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return {};
};
