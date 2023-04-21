import React,{useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import "./App.scss";

function App() {
  const[sterm,setsterm]=useState("");
  return (
    <div className="app">
      <Router>
        <Header sterm={sterm}  setsterm={setsterm}/>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home sterm={sterm}  setsterm={setsterm}/>} />
            <Route path="/movie/:imdbID" exact element={<MovieDetail/>} />
            <Route path='*' exact element={<PageNotFound/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;