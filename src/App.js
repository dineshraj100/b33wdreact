import "./App.css";
import { Counter } from "./Counter";
import { AddColor } from "./AddColor";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { AddMovies } from "./AddMovies";
import { Home, NotFound } from "./Home";
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { MovieDetails } from "./MovieDetails";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {API} from "./global";
const Initial_movielist = [
  {
    name: "K.G.F: Chapter 1",
    poster: "https://wallpaperaccess.com/full/2365127.jpg",
    trailer: "https://www.youtube.com/embed/3oxo-wacE50",
    summary: "The movie dates back to 1951. Here, two incidents take place; The birth of the hero and other in the Kolar Gold Fields (K.G.F) they get gold. The hero is brought up in poverty. When he is very young itself he goes to Mumbai to become a mafia don. His mother's wish was to see her son rich and powerful. After being in Mumbai for some time he returns back. Will he be able to become a Don? Will he set his people free from the age old slavery? Forms the plot of the movie?",
    cast: "Yash, Srinidhi Shetty, Ramachandra Raju",
    director: "Prashanth Neel",
    music: "Ravi Basur",
    year: 2018,
    rating: 8.2,
  }, {
    name: "K.G.F: Chapter 2",
    poster: "https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_.jpg",
    trailer: "https://youtu.be/tLeTx5OdjZs",
    summary: "The blood-soaked land of Kolar Gold Fields (KGF) has a new overlord now - Rocky, whose name strikes fear in the heart of his foes. His allies look up to Rocky as their savior, the government sees him as a threat to law and order; enemies are clamoring for revenge and conspiring for his downfall. Bloodier battles and darker days await as Rocky continues on his quest for unchallenged supremacy.",
    cast: "Yash, Srinidhi Shetty, Sanjay Dutt",
    director: "Prashanth Neel",
    music: "Ravi Basur",
    year: 2022,
    rating: 9,
  }, {
    name: "Thuppakki",
    poster: "https://www.themoviedb.org/t/p/original/qkvz7dJ0isbxUTM20Vce6rho0wG.jpg",
    summary: "Jagdish is an army captain, who comes to his home in Mumbai to spend some time with his family, along with getting his marriage fixed with a girl, whom he earlier dislikes and later likes. However, during all this, a bomb explosion in a bus makes him to search and nab down the terrorist, after which he founds out the plan of the terrorist and his gang, and with his entire Army team, manages to thwart the plans of the gang.",
    cast: "Vijay, Kajal Agarwal, Vidyut Jammwal",
    director: "A.R.Murugadoss",
    music: "Harris Jayaraj",
    year: 2012,
    rating: 8.1
  },
  {
    name: "Pushpa: The Rise - Part 1",
    poster: "https://static.toiimg.com/photo/88334935/88334935.jpg?v=3",
    summary: "Pushpa a labor works for small sum but dreams of living a life of king. But he is always let down by his step brothers for being an illegitimate child of their father. He gets chance to work in dense forest of red sanders where red sanders are smuggled to other countries. The labors are always under the scanner of DSP Govindappa but Pushpa dares to go against everyone creating hurdles for DSP. Pushpa manages to save a smuggling consignment worth crores under the eye of DSP and becomes known to Reddy Brothers.",
    cast: "Allu Arjun, Fahadh Faasil, Rashmika Mandanna",
    director: "Sukumar",
    music: "Devi Sri Prasad",
    year: 2021,
    rating: 7.9
  },
  {
    name: "Mankatha",
    poster: "https://i.pinimg.com/564x/5c/ce/44/5cce446b9de4e3a035eb1b8bd469a3da.jpg",
    summary: "Mankatha is a racy and adrenaline-rushing story of a Maharashtra police officer Vinayak Mahadevan (Ajith) who is suspended for helping a smuggler to escape from police encounter. He starts leading life in his own way. He falls for Sanjana (Trisha), daughter of an influential local goon Arumuga Chettiyar (Jayaprakash) in Mumbai. A tough cop Prithvi (Arjun) takes charge to end betting scandal in IPL cricket in Mumbai. Arumuga uses his links with dons in Mumbai tries to route through his old theatre, a cash of over Rs 500 crore to be used in betting. Sumanth (Vaibhav), a goon working for Arumuga Chettiyarplans to take away the booty with the help of his friends Ganesh (Ashwin), Mahanth (Mahanth), who owns a bar in Mumbai and Prem (Premji), a IIT graduate. Vinayak joins the race.",
    cast: "Ajith Kumar, Arjun Sarja, Trisha Krishnan",
    director: "Venkat Prabhu",
    music: "Yuvan Shankar Raja",
    year: 2011,
    rating: 7.6
  },
  {
    name: "The Hangover",
    poster: "https://www.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzF6UmNRVXZwcUwuX0FDX1NMMTUwMF8uanBn.jpg",
    summary: "If everything goes according to plan, in less than forty-eight hours, husband-to-be, Doug, will walk down the aisle with his sweetheart, Tracy. Bent on throwing the bachelor party to end all bachelor parties, Doug's bosom friends and groomsmen, schoolteacher, Phil, and Stu, the dentist, head to dazzling Las Vegas on a borrowed 1965 Mercedes-Benz 220SE convertible. However, instead of spending a wild night drinking and gambling, the boys, along with Tracy's socially inept brother, Alan, wake up in a trashed, $4,200-a-night suite at Caesars Palace, having no recollection of what has happened the night before.",
    cast: "Zach Galifianakis, Bradley Cooper, Justin Bartha",
    director: "Todd Phillips",
    music: "Christophe Beck",
    year: 2009,
    rating: 7.7
  },
  {
    name: "The Avengers",
    poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    summary: "S.H.I.E.L.D. has located the mysterious Tesseract device and the Army's super soldier Captain America. The Tesseract is actually a gateway to an entirely new world called Asgard. A mysterious being known as Loki arrives on earth and immediately assumes that he can rule all human beings. But that irks S.H.I.E.L.D. director Nick Fury the wrong way. As Loki escapes with the Tesseract, Nick Fury believes this is an act of war against Earth. His only hope is to assemble an actual team of super heroes. Dr. Bruce Banner, who turns into an enormous green rage monster known as the Hulk.",
    cast: "Robert Downey Jr. , Chris Evans, Scarlett Johansson",
    director: "Joss Whedon",
    music: "Alan Silvestri",
    year: 2012,
    rating: 8.0,
  }, {
    name: "The Gentlemen",
    poster: "https://www.themoviedb.org/t/p/original/jtrhTYB7xSrJxR1vusu99nvnZ1g.jpg",
    summary: "A talented American graduate of Oxford, using his unique skills, and audacity, creates a marijuana empire using the estates of impoverished British aristocrats. However, when he tries to sell his empire to a fellow American billionaire, a chain of events unfolds, involving blackmail, deception, mayhem and murder between street thugs, Russian oligarchs, Triad gangsters and gutter journalists.",
    cast: "Matthew McConaughey, Charlie Hunnam, Michelle Dockery",
    director: "Guy Ritchie",
    music: "Christopher Benstead",
    year: 2019,
    rating: 7.8
  }

];

export default function App() {
  const [list, setList] = useState(Initial_movielist);
  const navigate = useNavigate();
  const[mode,setMode]= useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{minHeight:"100vh"}} >
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=> navigate("/")}>Home</Button>
          <Button color="inherit" onClick={()=> navigate("/movies")}>Movies</Button>
          <Button color="inherit" onClick={()=> navigate("/movies/add")}>Add Movie</Button>
          <Button color="inherit" onClick={()=> navigate("/color-game")}>Color game</Button>
          <Button 
          startIcon={
            mode==="dark" ? <Brightness7Icon /> : <Brightness4Icon />} color="inherit" 
            onClick={()=> setMode(mode==="dark"? "light":"dark")}>
              {mode === "dark" ?"light" : "dark"}Mode</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie list={list} />} />
        <Route path="/films" element={<Navigate replace to ="/movies" />} />
        <Route path="/movies/:movieid" element={<MovieDetails list={list} setList={setList} />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/movies/add" element={<AddMovies  list={list} setList={setList}/>} />
        <Route path="*" element={<Navigate replace to ="404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
    </Paper>
    </ThemeProvider>
  );
  }


function Movie() {
  const [movieList,setMovieList]=useState([]);
  useEffect(()=> {
    fetch(`${API}/movies`)
    .then((data)=> data.json())
    .then((movies)=>setMovieList(movies))
  },[]);
  return (<div>
    <div className="title">
      <h1>Welcome to Movie App😎😎🎇</h1>
      <h3>These are the movies added so far in our database:</h3>
    </div>
    <div className="movie-list">
      {movieList.map(({ name, poster, summary, cast, director, music, year, rating }, index) => (
        <Msg key={index} name={name} id={index} poster={poster} summary={summary} cast={cast} dir={director} music={music} year={year} rating={rating} />
      ))}
    </div>
  </div>

  );
}
function Msg({ id, name, poster, summary, cast, dir, music, year, rating }) {
  //conditional styling method to toggle
  const styles = {
    color: rating > 8 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  const summaryStyles = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();
  return (
    <Card className="movie-container">
      <img src={poster} alt={name} width="200" height="250"></img>
      <CardContent>
      <div className="movie-mini">
        <h3 className="movie-name">{name}</h3>
        <p style={styles}>⭐{rating}</p>
      </div>
      <div className="movie-detail">
        <h6><span>Cast:</span> {cast}</h6>
        <h6><span>Director:</span> {dir}</h6>
        <h6><span>Music:</span> {music}</h6>
        <h6><span>Year:</span> {year}</h6>
      </div>
      <IconButton aria-label="info-btn" color="primary" onClick={() => { navigate("/movies/" + id) }}>
      <InfoIcon />
      </IconButton>
      <IconButton aria-label="toggledes-btn" color="primary" onClick={() => { setShow(!show) }}>
       {show ? <ExpandLessIcon />:<ExpandMoreIcon /> }
      </IconButton>

      {/* conditional rendering method to toggle */}

      <div className="movie-summary" style={summaryStyles}>
        {/* {show ? <p >{summary}</p>:"" } */}
        <p >{summary}</p>
      </div>
      </CardContent>
      <CardActions>
      <Counter />
      </CardActions>
      
    </Card>
  );
}


