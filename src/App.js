import React from "react";
import './App.css';
import {HashRouter,  Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
//라우터는 사용자가 입력한 url을 통해 특정 컴포넌트를 불러준다. 


function App(){
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home}/> 
      {/* //exact props는 route컴포넌트가 path props와 정확하게 일치하는 url만 반응해준다. */}
      <Route path="/about" component={About}/>
      <Route path="/movie-detail" component={Detail}/>
    </HashRouter>
  );
}

export default App;