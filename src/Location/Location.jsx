import React from 'react';
import style from './Location.module.css';

const Location = (props) => {
console.log(props.weather.data);

    return (
    
    <div className={style.box}>
        <div className={style.location}>{props.weather.data.name},{props.weather.data.sys.country}</div>
        <div className={style.date}>{new Date().toDateString()}</div>      
    </div>

    );
}
    


export default Location;