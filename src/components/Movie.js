import React from "react";
import propTypes from "prop-types";
import './Movie.css';
import {Link} from 'react-router-dom';

//movie컴포넌트
//state가 필요하지 않으므로 함수형 컴포넌트로 작성
function Movie({ title, year, summary, poster, genres}){
    return (
        <div className = "movie">
            <Link to={{pathname:'/movie-detail', state:{year, title, summary, poster, genres}}}>
            <img src = {poster} alt = {title} title = {title} />
            <div className = "movie__data">
               <h3 className = "movie__title">{title}</h3>
               <h5 className = "movie__year">{year}</h5>
               <ul className="movie__genres">
                   {genres.map((genre, index) => { //map()함수에 전달할 함수의 두번째 인자를 키값으로
                       return <li key={index} className="movie__genres">{genre}</li>;
                   })}
               </ul>
               <p className = "movie__summary">{summary.slice(0,180)}...</p>
            </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {//isRequired-> 반드시 있어야 한다는 뜻
    year : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired           
}; 

export default Movie;