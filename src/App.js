import React from 'react';
import Searchbar from './SearchBar/Searchbar';
import './App.module.css';
import Location from './Location/Location';
import Temperature from './Temperature/Temperature';
import axios from 'axios';

const api = {
  url :'https://api.openweathermap.org/data/2.5/weather',
  key : '0fbf9564acdc696cbf6c8f3e5ae57aa0'
}


class App extends React.Component {
 
state = {
  country : ' ',
  weather : '',
  loaded : false
}

onSearch(event) {
    if(event === "Enter") {
      try {
        axios.get(`${api.url}?q=${this.state.country}&units=metrics&APPID=${api.key}`)
       .then(data => {
         console.log(data);
        this.setState({weather:data , loaded : true});
       })                     
      } catch (error) {
        console.log(error);
      } 
    }
}
onCountryName(name) {
  this.setState({country : name});
}

  render() {
    console.log(this.state.country);
    return(
      <div className={(this.state.loaded) ? ((this.state.weather.data.main.temp > 300) ? 'app warm' : 'app') : 'app'}>
        <main>
          <Searchbar 
            onSearch={this.onSearch.bind(this)}
            onCountryName={this.onCountryName.bind(this)}
            country={this.state.country}
          />
          {(this.state.loaded) ? (<Location  weather={this.state.weather}/>):('Loading..')}
          {(this.state.loaded) ? (<Temperature weather={this.state.weather}/>):('')}
        </main>
      </div>
    );
  }
}

export default App;
