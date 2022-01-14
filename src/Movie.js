import React from "react";
import propTypes from "prop-types";

//movie컴포넌트
//state가 필요하지 않으므로 함수형 컴포넌트로 작성
function Movie({id, title, year, summary, poster}){
    return <h1>{title}</h1>;
}

Movie.propTypes = {
    id : propTypes.number.isRequired,//isRequired-> 반드시 있어야 한다는 뜻
    year : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired
               
}; 

export default Movie;