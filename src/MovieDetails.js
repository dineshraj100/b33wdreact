import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {API} from "./global";
export function MovieDetails() {
  const { movieid } = useParams();
  
  const [movie, setMovie] = useState({});
  useEffect(()=>{
    fetch(`${API}/movies/${movieid}`)
    .then((data)=> data.json())
    .then((mv)=> setMovie(mv));
  },[movieid]);
  const navigate = useNavigate();
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  return (
    <div className="movie-detail-container">

      <div className="movie-mini">
      {/* <iframe width="900" height="506" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        <h3 className="movie-name">{movie.name}</h3>
        <p style={styles}>⭐{movie.rating}</p>
      </div>
      <p>{movie.summary}</p>
      <button onClick={() => { navigate(-1); }}>Back</button>
    </div>

  );
}
