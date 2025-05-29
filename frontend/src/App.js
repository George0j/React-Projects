import React from "react";
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import "./App.css";

import SimpleBottomNavigation from "./components/MainNav";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";

function App(){

    return(
        <Router>
         <Header />
           <div className="App">
             <Routes>
              <Route path="/" element={<Trending />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/search" element={<Search />} />
             </Routes>
      </div>
      <SimpleBottomNavigation />
    </Router>
    );
}

export default App;