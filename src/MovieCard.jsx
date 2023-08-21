import React from 'react'

const MovieCard = ({ movie1 }) =>  {
    return(
        <div className='flex flex-col relative rounded-3xl hover:scale-105 transition-all duration-200 group'>

            <div className=' absolute left-3 top-3 hidden group-hover:block transition-all duration-200'>
                <p className=' text-indigo-200 '>
                {movie1.Year}
                </p>
            </div>

            <div>
                <img className=' rounded-xl group-hover:opacity-50 transition-all duration-200' src={movie1.Poster} alt="" />
            </div>

            <div className=' flex flex-col bg-gray-600 absolute bottom-0 inset-x-0 pl-5  pb-5  pt-3 rounded-b-xl group-hover:bg-transparent transition-all duration-200 gap-2'>
                <span className='text-lg text-white opacity-80 '>
                {movie1.Type}
                </span>
                <h1 className='text-2xl text-indigo-300 font-bold'>
                {movie1.Title}
                </h1>
            </div>
        </div>
    );
}


export default MovieCard;