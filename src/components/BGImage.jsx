import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai"
import { GrPlayFill } from "react-icons/gr"
const BGImage = ({videoLink}) => {
  return (
    <div className="imagemainconttainer">
      <video src={videoLink} autoPlay loop muted className='video' />
      <div className="info">
        <button>
          <GrPlayFill className='play' />
          <h6>Play</h6>
        </button>
        <div className="ii">
          <AiOutlineInfoCircle className='play' />
          <h6>More Info</h6>
        </div>
      </div>
    </div>
  )
}

export default BGImage