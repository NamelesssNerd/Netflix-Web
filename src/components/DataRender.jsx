import React from 'react'
import { Link } from "react-router-dom"
import Topic from './Topic'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import NavigationString from "../NavigationStrings/NavigationStrings.json"
const DataRender = ({ data, page, title }) => {
    const realData = JSON.parse(data)
    const back = () => {
        var slider = document.getElementById(`slider+${page}`);
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const forward = () => {
        var slider = document.getElementById(`slider+${page}`);
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    return (
        <div className="datarender">
            <Topic title={title} />
            <div className="data" id={`slider+${page}`}>
                <IoIosArrowBack className='back' onClick={back} />
                {realData.map((curren) => {
                    return (
                        <Link to={`${NavigationString.id}`} key={curren._id.$oid}>
                            <div className="box"  >
                                <img src={curren.Poster} alt={curren.Title} />
                            </div>
                        </Link>

                    )
                })}
                <IoIosArrowForward className='forward' onClick={forward} />
            </div>
        </div>
    )
}

export default DataRender