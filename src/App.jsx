import React from 'react'
import NavgationStrings from "../src/NavigationStrings/NavigationStrings.json"
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WelcomeScreen from "./components/WelcomeScreen"
import Home from './components/Home';
import UseChoose from "./components/UserChoose";
import Movies from "./components/Movies";
import Latest from "./components/Latest";
import ByList from "./components/BrowseBy";
import Detais from "./components/Details";
import BrowseBy from './components/BrowseBy';
import TvShows from './components/TvShows';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={NavgationStrings.Welcome} element={<WelcomeScreen/>} />
        <Route path={NavgationStrings.UserChoose} element={<UseChoose />} />
        <Route path={NavgationStrings.Home} element={<Home />} />
        <Route path={NavgationStrings.TVSHows} element={<TvShows />} />
        <Route path={NavgationStrings.Movies} element={<Movies />} />
        <Route path={NavgationStrings.Latest} element={<Latest />} />
        <Route path={NavgationStrings.MyList} element={<ByList />} />
        <Route path={NavgationStrings.BrowseBy} element={<BrowseBy />} />
        <Route path={NavgationStrings.id} element={<Detais />} />
      </Routes>
    </Router>
  )
}

export default App