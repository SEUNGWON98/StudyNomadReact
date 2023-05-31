import { useState, useEffect } from "react";
// import "../components/Coin.css";
import "../components/BoxOffice.css";
import Movie from "../components/Movie";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//about list map
// function App(){" "}{
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);

//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault(); //submit하는 걸 막는 함수
//     if (toDo === "") {
//       return;
//     }
//     setToDo("");
//     setToDos((currentArray) => [toDo, ...currentArray]); //currentArray에 toDo르 추가 시켜준다.
//   };
//   console.log(toDos);
//   return (
//     <div>
//       <h1>내 배열 개수 {toDos.length}</h1>
//       <form>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Wrtie your to do..."
//         />
//         <button onClick={onSubmit}>Add To Do</button>
//         <hr />
//         <ul>
//           {toDos.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </form>
//     </div>
//   );
// }

//coin price api
// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const [cost, setCost] = useState(1);
//   const [need, setNeed] = useState(1);
//   const onChange = (event) => {
//     setCost(event.target.value);
//     setNeed(1);
//   };
//   const handleInput = (event) => {
//     setNeed(event.target.value);
//   };

//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div>
//       <div className="Main">
//         <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>

//         {loading ? (
//           <strong> Loading...</strong>
//         ) : (
//           <select className="Main" onChange={onChange}>
//             <option>Select Coin!!</option>
//             {coins.map((coin, index) => (
//               <option
//                 key={index}
//                 value={coin.quotes.USD.price}
//                 id={coin.symbol}
//                 symbol={coin.symbol}
//               >
//                 {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
//               </option>
//             ))}
//           </select>
//         )}
//         <br />
//         <br />

//         <div className="PriceInput">
//           <input
//             onChange={handleInput}
//             value={need}
//             type="number"
//             placeholder="보유 달러 입력"
//           />
//           <input value={need / cost} type="number" disabled />
//           <h1> 당신의 교환 비율은 {need / cost} 입니다.</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  let today = new Date();

  let date =
    today.getFullYear() +
    ("00" + (today.getMonth() + 1).toString()).slice(-2) +
    ("00" + (today.getDate() - 1).toString()).slice(-2);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGEzM2UxNTM0ODQ1YzE2ODdhYTQ5MjMwZDQ2MTNiYSIsInN1YiI6IjY0NjQ4ZWY1MDI4NDIwMDBlMTFkZWI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.43RQxK3g4CHT402J9KlxFy6tD-aW6N2z3e4jqQdl-dk",
    },
  };

  const getMovies = async () => {
    const response = fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));

    // setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    // setLoading(false);
    // console.log(response);

    return response;
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getMovies();
      setMovies(response.results);

      setLoading(false);
    };
    fetchMovies();
  }, []); //[]안에 getMovies를 넣는다면
  console.log(movies);
  // console.log(date);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="body">
          <div className="navbar">SEObox</div>

          <Slider className="slide">
            {movies.map((movie) => (
              <div>
                <img
                  src={`https://www.themoviedb.org/t/p/w1280${movie.backdrop_path}`}
                  alt={movie.title}
                  className="backimg"
                />
                <div className="slide_description">
                  <h3 className="slide_title">{movie.title}</h3>
                  <div className="slide_overview">{movie.overview}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="rank">이번 주 인기 영화 목록</div>
          <div className="BoxOffice">
            {movies.map((movie) => (
              <Movie
                id={movie.id}
                key={movie.vote_count}
                stack={movie.overview}
                title={movie.title}
                openDt={movie.release_date}
                poster={movie.poster_path}
                backdrop={movie.backdrop_path}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
