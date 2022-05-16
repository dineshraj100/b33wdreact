import { useState } from "react";

export function AddMovies({ list, setList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [cast, setCast] = useState("");
  const [director, setDirector] = useState("");
  const [summary, setSummary] = useState("");
  const [music, setMusic] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  return (
    <div className="Addmovies">

      <h3 id="addmoviename">Add Movie page</h3>
      <br></br>
      <div className="inputsec">
        <input onChange={(event) => setName(event.target.value)} type="text" placeholder="Enter the movie name" />
        <br></br>
        <input onChange={(event) => setPoster(event.target.value)} type="text"  placeholder="Enter the image link" />
        <br></br>
        <input onChange={(event) => setCast(event.target.value)} type="text"  placeholder="Enter the cast name" />
        <br></br>
        <input onChange={(event) => setDirector(event.target.value)} type="text"  placeholder="Enter the director name" />
        <br></br>
        <input onChange={(event) => setSummary(event.target.value)} type="text"  placeholder="Enter the summary" />
        <br></br>
        <input onChange={(event) => setMusic(event.target.value)} type="text"  placeholder="Enter the music composer name" />
        <br></br>
        <input onChange={(event) => setYear(event.target.value)} type="text"  placeholder="Enter the year of release" />
        <br></br>
        <input onChange={(event) => setRating(event.target.value)} type="text"  placeholder="Enter the rating of movie" />
        <br></br>
        <button onClick={() => {
          const newMovie = {
            name,
            poster,
            summary,
            cast,
            director,
            music,
            year,
            rating
          }
          setList([...list, newMovie]);
          console.log(list);
        }}>Submit</button>
      </div>
    </div>
  );
}
