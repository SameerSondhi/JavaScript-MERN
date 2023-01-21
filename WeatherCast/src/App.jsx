import React, {useState} from 'react'
import axios from 'axios'
import './index.css';

function App() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6bc3dfc22960ac2616160be7cdbb19a6&units=imperial`

  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
})
    setLocation('')
    }
  }
  

  return (
    <div className="App">
      <div className="search">
      <input value={location} 
      onChange = {event => setLocation(event.target.value)} 
      onKeyDown = {searchLocation}
      type="text" placeholder='Enter location' />
      </div>
      <div class="card">
                <h1 className="card-title p-2">{data.name}</h1>
                {/* <img src='http://openweathermap.org/img/wn/{data.weather[0].icon}@4x.png' class="card-img-top" alt="{data.weather[0].description}"/> */}
                <div className="card-body">
                    {data.main ? <h1 className="card-title">{data.main.temp.toFixed()}°F</h1>: null}
                    {data.weather ? <h1 className="card-text">{data.weather[0].main}</h1>:null}
                  </div>
                  {data.name !== undefined &&
                  <div className="bottom">
                    <div className="humidity">
                    {data.main ? <p className="card-text">{data.main.humidity}%</p>:null}
                    <p>Humidity</p>
                    </div>
                    <div className="feels">
                    {data.main ? <p className="card-text">{data.main.feels_like.toFixed()}°F</p>:null}
                    <p>Feels Like</p>
                    </div>
                    <div className="winds">
                    {data.wind ? <p className="card-text">{data.wind.speed.toFixed()}MPH</p>:null}
                    <p>Winds</p>
                    </div>
                </div>
}
                </div>
                
            </div>
  )

      /* <div className="container">
      <div className="top">
        <div className="location">
          <h1>{data.name}</h1>
        </div>
      </div>
      <div className="middle">
        <div className="temperature">
        {data.main ? <h1>{data.main.temp.toFixed()}°F</h1>: null}
        </div>
        <div className="description">
          {data.weather ? <h2>{data.weather[0].description}</h2>:null}
        </div>
      </div>
{data.name !== undefined &&
      <div className="bottom">
      <div className="feels">
        {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p>:null}
        <p className='bold'>Feels Like</p>
      </div>
      <div className="humidity">
        {data.main ? <p className='bold'>{data.main.humidity}%</p>:null}
        <p className='bold'>Humidity</p>
      </div>
      <div className="wind">
        {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p>:null}
        <p className='bold'>Winds</p>
      </div>
      </div>
}
      </div> */
  
    // </div>
      
  // );


}
export default App;

