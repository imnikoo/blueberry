import React, {Component} from 'react';
import MainMenu from '../mainMenu';
import ItemsList from '../itemsList';
import Item from '../Item/item';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import classnames from 'classnames';

import './styles.css';

class AppComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuBarClasses: classnames({
                'menubar': true,
                'sticky': true
            }),
            sideBarClasses: classnames({
                'side-bar': true,
                'active': false
            })
        };

        this.toggleSideBar = this.toggleSideBar.bind(this);
    }

    toggleSideBar = (e) => {
        e.preventDefault();
        let newSideBarState = !this.state.isSideBarOpened;
        this.setState({
            isSideBarOpened: newSideBarState,
            sideBarClasses: classnames({
                'side-bar': true,
                'active': newSideBarState
            })
        });
        document.body.classList.toggle('block-scroll');
    };

    render() {
        return (
            <div>
                <div className={this.state.sideBarClasses}></div>
                <div className={this.state.menuBarClasses}>
                    <i className="material-icons menubar__menu" onClick={this.toggleSideBar}>menu</i>
                    <span className="menubar__logo">Blueberry</span>
                    <i className="material-icons menubar__cart">shopping_cart</i>
                </div>
                <div className="workplace">
                    <Route exact path="/" component={MainMenu} />
                    <Route exact path="/items" component={ItemsList}/>
                    <Route path="/items/:id" component={Item} />
                </div>
                <div className="footer"></div>
                <div className="backdrop"
                     style={
                         {'display': this.state.isSideBarOpened ? 'inline-block' : 'none'}
                     }
                     onClick={this.toggleSideBar}
                ></div>
            </div>
        );
    }
}

export default AppComponent;