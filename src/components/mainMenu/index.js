import React, {Component} from 'react';
import Search from '../search';
import Offers from '../offers';
import '../offers/styles.css';


class MainMenu extends Component {
    render() {
        return (
            <div>
                <Search />
                <Offers />
            </div>
        );
    }
}

export default MainMenu;