import React from 'react';
import style from './Searchbar.module.css';

class Searchbar extends React.Component {


    CountryName(event) {
        this.props.onCountryName(event.target.value)
    }

    Search(e) {
        this.props.onSearch(e.key);
    }
    

    render() {
        return (
            <div className={style.box}>
            <input
                type="text"
                className={style.bar}
                placeholder="Search country..."
                onChange={this.CountryName.bind(this)}
                onKeyPress={this.Search.bind(this)}
                value={this.props.country}
            />
        </div>   
        );
    }
       
}
   


export default Searchbar;