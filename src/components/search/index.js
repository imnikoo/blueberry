import React, {Component} from 'react';
import './styles.css';

class Search extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="search-container">
                <i className="material-icons search-icon">search</i>
                <input
                    className="search-container__input"
                    placeholder="Search"
                />
                <i className="material-icons clear-icon">clear</i>
            </div>
        );
    }
}

export default Search;