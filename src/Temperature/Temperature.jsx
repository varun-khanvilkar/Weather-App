import React from 'react';
import style from './Temperature.module.css';

const Temperature = (props) => (

    <div className={style.box}>
        <div className={style.temperature}>{Math.round(props.weather.data.main.temp)}°C</div>
        <div className={style.weather}>{props.weather.data.weather[0].main}</div>      
    </div>

);
    


export default Temperature;