import React from "react";
import axios from "axios";
import Movie from "../components/Movie"; //movie 컴포넌트 임포트
import './Home.css';

class Home extends React.Component{
  state = {
    isLoading : true,
    movies: [],
  };

  getMovies = async () => { //async//자바스크립트에게 getMovies함수는 시간이 필요하고 //(getMovies함수는 비동기)
    const{
      data:{
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating'); //await// axios.get의 실행을 기다려달라 하는것.
    this.setState({movies, isLoading : false}); //{state : 구조분해할당으로 얻은 영화 데이터가 있는 변수}-> es6에서는 객체키와 변수이름이 같다면 축약할수 있음
  };

  componentDidMount(){
    //영화 데이터 로딩
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return (
    <section className = "container">
      {isLoading ? (
      <div className = "loader">
        <span className = "loader__text">Loading...</span>
      </div>
    ) : (
      <div className = "movies">
        {movies.map(movie => (//movie 컴포넌트 출력
        <Movie
          key = {movie.id}
          id = {movie.id}
          year = {movie.year}
          title = {movie.title}
          summary = {movie.summary}
          poster = {movie.medium_cover_image}  
          genres={movie.genres}
        /> 
     ))}
      </div>
    )}
    </section>
    );
  }
}

export default Home;