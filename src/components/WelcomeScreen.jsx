import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import NavigationStrings from "../NavigationStrings/NavigationStrings.json"
import ImageData from "../NavigationStrings/ImageData.json";
import "./Main.scss"
const SecondLogo = "../../public/images/secondLogo.jpg";
const WelcomeScreen = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate(NavigationStrings.UserChoose)
    }, 3000);
  }, [])
  return (
    <div className="welcome">
      <img src={SecondLogo} />
    </div>
  )
}

export default WelcomeScreen