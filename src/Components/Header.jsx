import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'
import{BiSearch} from "react-icons/bi"
import {SlOptionsVertical} from "react-icons/sl"
import {PiDotOutline} from "react-icons/pi"
import { useState } from 'react'
import {RxCross1} from "react-icons/rx"

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handleOptionsClick = () => {
      setIsActive(true);
  }
  return (
    <>
    {console.log(isActive)}
    <nav className='container'>
        <img src={logo} alt="" />
        <div className='big-screen'>
          <Link to="/">Tv Shows</Link>
          <Link to="/">Movies</Link>
          <Link to="/">Recently Added</Link>
          <Link to="/">My List</Link>
        </div>
        <BiSearch className='search'/>
        <SlOptionsVertical className='options' onClick={handleOptionsClick}/>



       
        
      
    </nav>
    <div className={!isActive  ? "small-screen"  : "small-second-screen"}>
          <RxCross1 onClick={() => {
            setIsActive(false);
          }}/>
          <div>
          <Link to="/"><PiDotOutline/>Tv Shows</Link>
          <Link to="/"><PiDotOutline/>Movies</Link>
          <Link to="/"><PiDotOutline/>Recently Added</Link>
          <Link to="/"><PiDotOutline/>My List</Link>
          </div>
        </div>
    </>
  )
}

export default Header