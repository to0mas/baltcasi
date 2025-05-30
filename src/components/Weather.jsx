import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import slunicko_icon from '../assets/clear.png'
import humidity from '../assets/humidity.png'
const Weather = () => {
  return (
    <div className='weather'>
        <div className="nadpis">
            <h1>Baltčasí Počasí</h1>
        </div>
       <div className="search-bar">
        <input type="text"  placeholder='Město/Stát'/>
        <img src={search_icon} alt="" />
       </div>

       <img src={slunicko_icon} alt="" className='weather-icon' />
       <p className='temperature'>16 STUPNU</p>
       <p className='location'> Jížní Svahy</p>

       <div className="weather-data">
            <div className="col">
                <img src={humidity} alt="" />
                <div>
                    <p>91 %</p>
                    <span>Vlhkost</span>
                </div>
            </div>

            <div className="col">
                <img src={humidity} alt="" />
                <div>
                    <p>91 %</p>
                    <span>Vlhkost</span>
                </div>
            </div>

            <div className="col">
                <img src={humidity} alt="" />
                <div>
                    <p>91 %</p>
                    <span>Vlhkost</span>
                </div>
            </div>

            <div className="col">
                <img src={humidity} alt="" />
                <div>
                    <p>91 %</p>
                    <span>Vlhkost</span>
                </div>
            </div>

       </div>
    </div>
  )
}

export default Weather