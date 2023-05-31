import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, stack, title, openDt, poster, backdrop }) {
  return (
    <div className="movieBox">
      <div>
        <img
          className="imgSize"
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`}
          alt={title}
        />
        <h2>
          <Link className="link" to={`/movie/${id}`}>
            {title}
          </Link>
        </h2>
        <p>{openDt}</p>
      </div>
      {/* <div className="description">
        <h3 className="white">{stack}</h3>
      </div> */}
    </div>
    //     <div>
    //       <div id="carouselExampleIndicators" class="carousel slide">
    //   <div class="carousel-indicators">
    //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //   </div>
    //   <div class="carousel-inner">
    //     <div class="carousel-item active">
    //       <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${backdrop}`} className="d-block w-100" alt="...">
    //     </div>
    //     <div class="carousel-item">
    //       <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${backdrop}`} classNamw="d-block w-100" alt="...">
    //     </div>
    //     <div class="carousel-item">
    //       <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${backdrop}`} className="d-block w-100" alt="...">

    //     </div>
    //   </div>
    //   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Previous</span>
    //   </button>
    //   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Next</span>
    //   </button>
    // </div>
    //     </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
};

export default Movie;
