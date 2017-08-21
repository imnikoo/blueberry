import React, {Component} from 'react';
import MainMenu from '../mainMenu';
import CartContainer from '../Cart/CartContainer';
import ItemsList from '../itemsList';
import Item from '../Item/item';
import filter from 'lodash/filter';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import classnames from 'classnames';

import './styles.css';

class AppComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItems: [],
            menuBarClasses: classnames({
                'menubar': true,
                'sticky': true
            }),
            sideBarClasses: classnames({
                'side-bar': true,
                'active': false
            }),

        };

        this.toggleSideBar = this.toggleSideBar.bind(this);
        this.addItemToCart = this.addItemToCart.bind(this);
    }

    addItemToCart = (item) => {
        let isThereSameItem = filter(this.state.cartItems, ['item.id', item.id]).length;
        if (isThereSameItem) {
            //tell about it to user
            console.warn('There are thou item in tha cart');
            return;
        }
        let cartItem = {
            item,
            amount: 1
        };
        this.setState((prevState) => {
            return {
                cartItems: [...prevState.cartItems, cartItem]
            }
        });

    };

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
        const {
            isSideBarOpened,
            sideBarClasses,
            menuBarClasses,
            cartItems
        } = this.state;

        return (
            <div>
                <div className={sideBarClasses} />
                <div className={menuBarClasses}>
                    <i className="material-icons menubar__menu" onClick={this.toggleSideBar}>menu</i>
                    <span className="menubar__logo">Blueberry</span>
                    <Link to="/cart" className="menubar__cart">
                        <i className="material-icons">
                            shopping_cart
                        </i>
                    </Link>

                </div>
                <div className="workplace">
                    <Route exact path="/" component={MainMenu}/>
                    <Route exact path="/items" render={(props) => <ItemsList {...props} addItemToCart={this.addItemToCart}/>}/>
                    <Route path="/items/:id" render={(props) => <Item {...props} addItemToCart={this.addItemToCart}/>}/>
                    <Route path="/cart" render={(props) => <CartContainer {...props} cartItemsList={cartItems}/>}/>
                </div>
                <div className="footer" />
                <div className="backdrop"
                     style={
                         {'display': isSideBarOpened ? 'inline-block' : 'none'}
                     }
                     onClick={this.toggleSideBar}
                />
            </div>
        );
    }
}

export default AppComponent;