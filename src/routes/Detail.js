import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  // const getMovie = async () => {
  //   const json = await (
  //     await fetch(
  //       `https://api.themoviedb.org/3/movie/157336?api_key=0da33e1534845c1687aa49230d4613ba`
  //     )
  //   ).json();
  //   console.log(json);
  // };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGEzM2UxNTM0ODQ1YzE2ODdhYTQ5MjMwZDQ2MTNiYSIsInN1YiI6IjY0NjQ4ZWY1MDI4NDIwMDBlMTFkZWI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.43RQxK3g4CHT402J9KlxFy6tD-aW6N2z3e4jqQdl-dk",
    },
  };

  const getMovie = async () => {
    const response = fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));

    return response;
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Detail</h1>;
    </div>
  );
}
export default Detail;
