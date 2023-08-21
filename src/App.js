import { useEffect, useState } from 'react';
import './index.css';
import SearchIcon from "./search.svg"
import MovieCard from './MovieCard';

//46cefbd4
const API_URL = 'http://www.omdbapi.com?apikey=46cefbd4';

function App() {

  const [movies ,setMovies] = useState([]);
  const [searchTerm , setSearchTerm] =useState('');

  const searchMovie = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();
    console.log(data);

    setMovies(data.Search);

  }


  useEffect(() => {

    searchMovie('batman');

  } , []);

  const movie1 = {
    Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "Batman Begins",
    Type: "movie",
    Year: "2005",
    imdbID: "tt0372784"
}

  return (
    <>
      <body className='bg-gray-900 flex flex-col items-center pt-32 min-h-screen'>
          <h1 className='text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 mb-10'>Movie Land
          </h1>

        <div className='flex justify-between border border-indigo-500 rounded-full pr-5 w-[80%] h-[60px] pl-6 shadow-lg shadow-gray-700' >
          <input className='text-gray-400 bg-transparent text-xl w-full h-full focus:outline-none' type="text"
          placeholder='write your movie title here'
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          />

          <img className='py-3 hover:cursor-pointer'
          src={SearchIcon}
          alt="Search"
          onClick={() => {
            searchMovie(searchTerm);
          }}
            />
        </div>
        
        {
          movies?.length > 0 
          ? (
            <div className='flex flex-wrap justify-center w-[85%] py-10 gap-14 '>
            {
              movies.map((movie) => {
                return <MovieCard movie = {movie} />
              })
            }
            </div>
          ) :
          <div className='flex justify-center items-center w-full h-full mt-20 text-2xl text-indigo-300'>
            <h2>no movies found</h2>
          </div>
        }

        
        
          
      </body>
      
    </>
  );
}

export default App;
