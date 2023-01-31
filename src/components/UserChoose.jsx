import React from 'react'
import { useNavigate } from "react-router-dom"
import NavigationString from "../NavigationStrings/NavigationStrings.json"
import ImageData from "../NavigationStrings/ImageData.json"
const UserChoose = () => {
  const navigate = useNavigate()
  const redirectme = () => {
    navigate(NavigationString.Home)
  }
  const renderme = (val) => {
    return (
      <div className="imagebox" key={val.Link} onClick={redirectme}>
        <img src={val.Link} alt="" />
        <h4>{val.Name}</h4>
      </div>
    )
  }
  return (
    <div className="userChoose">
      <div className="centermain">
        <h2>Who's Is Watching?</h2>
        <div className="allimage">
          {ImageData.map(renderme)}
        </div>

      </div>
    </div>
  )
}
export default UserChoose