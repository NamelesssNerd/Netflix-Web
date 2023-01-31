import React, { useState } from 'react'
import Header from './Header'
import BGImage from './BGImage'
import DataRender from './DataRender'
import { RangeData } from "userval-checker"
import Data from "../Data/moviedatas.json"
import VideoDatas from "../NavigationStrings/videoLink.json"
const Home = () => {
  const random = Math.floor(Math.random() * (VideoDatas.length - 1));
  const [action, setaction] = useState((JSON.stringify(RangeData(Data, 0, 300))));
  const [trending, settrending] = useState((JSON.stringify(RangeData(Data, 301, 600))));
  const [newrelease, setnewrelease] = useState((JSON.stringify(RangeData(Data, 601, 900))));
  const [onlyNetflix, setonlynetflix] = useState((JSON.stringify(RangeData(Data, 901, 1200))));
  const [dramas, setdramas] = useState((JSON.stringify(RangeData(Data, 1201, 1500))));
  const [ActionMovies, setacttionmovies] = useState((JSON.stringify(RangeData(Data, 1501, 1800))));
  const [popular, setpopular] = useState((JSON.stringify(RangeData(Data, 1801, 2100))));
  const [watchitagain, setwatchitagain] = useState((JSON.stringify(RangeData(Data, 2101, 2400))));
  const [workplace, setworkplace] = useState((JSON.stringify(RangeData(Data, 2401, 2700))));
  const [secret, setsecret] = useState((JSON.stringify(RangeData(Data, 2701, 3000))));
  const [bonge, setbonge] = useState((JSON.stringify(RangeData(Data, 3001, 3300))));
  const [historical, sethistorical] = useState((JSON.stringify(RangeData(Data, 3301, 3600))));
  const [Exciting, setexiting] = useState((JSON.stringify(RangeData(Data, 3601, 3900))));
  const [award, setaward] = useState((JSON.stringify(RangeData(Data, 3901, 4200))));
  const [Teen, seteteen] = useState((JSON.stringify(RangeData(Data, 4201, 4500))));
  const [womanBehind, setwomanBehind] = useState((JSON.stringify(RangeData(Data, 4501, 4800))));
  const [Cinematography, setcinematography] = useState((JSON.stringify(RangeData(Data, 4801, 5100))));
  const [topsearch, settopas] = useState((JSON.stringify(RangeData(Data, 4801, 5100))));
  const [MainVideo, setmainVideo] = useState(VideoDatas[random]);
  useState(() => {
    setmainVideo(VideoDatas[random])
  }, [random])
  return (
    <div className="container">
      <Header />
      <BGImage videoLink={MainVideo} />
      <DataRender page={1} title={"TV Action & Adventure"} data={action} />
      <DataRender page={2} title={"Trending Now"} data={trending} />
      <DataRender page={3} title={"New Releases"} data={newrelease} />
      <DataRender page={4} title={"Only On Netflix"} data={onlyNetflix} />
      <DataRender page={5} title={"Witchcraft Tv Dramas"} data={dramas} />
      <DataRender page={6} title={"Action Movies"} data={ActionMovies} />
      <DataRender page={6} title={"Popular On Netflix"} data={popular} />
      <DataRender page={7} title={"Watch It Again"} data={watchitagain} />
      <DataRender page={8} title={"Workplace TV Dramas"} data={workplace} />
      <DataRender page={9} title={"Can You Keep a Secret?"} data={secret} />
      <DataRender page={10} title={"BongeWorthy Tv Shows"} data={bonge} />
      <DataRender page={11} title={"Historical TV Shows"} data={historical} />
      <DataRender page={12} title={"Exiting US TV Thrillers & Mysteries"} data={Exciting} />
      <DataRender page={13} title={"Award Wining Films"} data={award} />
      <DataRender page={14} title={"Teen TV SHows"} data={Teen} />
      <DataRender page={15} title={"Woman Behind The Camera"} data={womanBehind} />
      <DataRender page={16} title={"Cinematography 101"} data={Cinematography} />
      <DataRender page={17} title={"Top Searches"} data={topsearch} />
    </div>
  )
}

export default Home