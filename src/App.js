import "./App.css";
import {useState} from "react";
export default function App() {
  const movie=[
    {
      name: "K.G.F: Chapter 1",
      poster: "https://wallpaperaccess.com/full/2365127.jpg",
      summary: "The movie dates back to 1951. Here, two incidents take place; The birth of the hero and other in the Kolar Gold Fields (K.G.F) they get gold. The hero is brought up in poverty. When he is very young itself he goes to Mumbai to become a mafia don. His mother's wish was to see her son rich and powerful. After being in Mumbai for some time he returns back. Will he be able to become a Don? Will he set his people free from the age old slavery? Forms the plot of the movie?",
      cast: "Yash, Srinidhi Shetty, Ramachandra Raju",
      director: "Prashanth Neel",
      music: "Ravi Basur",
      year: 2018,
      rating: 8.2,
      },{
        name: "K.G.F: Chapter 2",
        poster: "https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_.jpg",
        summary: "The blood-soaked land of Kolar Gold Fields (KGF) has a new overlord now - Rocky, whose name strikes fear in the heart of his foes. His allies look up to Rocky as their savior, the government sees him as a threat to law and order; enemies are clamoring for revenge and conspiring for his downfall. Bloodier battles and darker days await as Rocky continues on his quest for unchallenged supremacy.",
        cast: "Yash, Srinidhi Shetty, Sanjay Dutt",
        director: "Prashanth Neel",
        music: "Ravi Basur",
        year: 2022,
        rating: 9,
        },{
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
            },{
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
  return (
    <div className="App">
      <div className="title">
      <h1>Welcome to Movie App😎😎🎇</h1>
      <h3>These are the movies added so far in our database:</h3>
      </div>
      
      <div className="movie-list">
      {movie.map(({name,poster,summary,cast,director,music,year,rating})=> <Msg name={name} poster={poster} summary={summary} cast={cast} dir={director} music={music} year={year} rating={rating} />)}
      </div>
    </div>
  );
}
function Counter(){
  const [like,setLike]= useState(0);
  const [dlike,setDlike]= useState(0);
  return(
    <div className="likes">
      <button type="button" class="btn btn-primary" onClick={()=>setLike(like+1)}>👍🏻 {like}</button>
      <button type="button" class="btn btn-danger" onClick={()=>setDlike(dlike+1)}>👎🏻 {dlike}</button>
    </div>
   
  )
}
function Msg({name,poster,summary,cast,dir,music,year,rating}) {
  return (
    <div className="movie-container">
      <img src={poster} alt={name} width="200" height="250"></img>
      <div className="movie-mini">
      <h3 className="movie-name">{name}</h3>
      <p>⭐{rating}</p>
      </div>
      <div className="movie-detail">
        <h6><span>Cast:</span> {cast}</h6>
      <h6><span>Director:</span> {dir}</h6>
      <h6><span>Music:</span> {music}</h6>
      <h6><span>Year:</span> {year}</h6>
      </div>
      <div className="movie-summary">
        <p>{summary}</p>
      </div>
      <Counter />
    </div>
  );
}
