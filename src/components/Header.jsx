import React from 'react'
const SecondLogo = "../../public/images/secondLogo.jpg"
import Nav from "../NavigationStrings/Nav.json"
import { Link } from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai"
import { IoIosNotificationsOutline } from "react-icons/io"
import Ok from "../NavigationStrings/ImageData.json"
const Header = () => {

  return (
    <div className="header">
      <div className="left">
        <div className="image">
          <img src={SecondLogo} alt="" />
        </div>
        <div className="naav">
          {Nav.map((currenElem, i) => {
            return (
              <Link to={currenElem.Link} key={i}>
                <h6>{currenElem.Name}</h6>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="right">
        <AiOutlineSearch className='search' />
        <h5 className='search'>Kids</h5>
        <h5 className='search'>DVD</h5>
        <IoIosNotificationsOutline className='search' />
        <img src={Ok[2].Link} alt="" />
      </div>
    </div>
  )
}

export default Header