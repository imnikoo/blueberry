import React, {Component} from 'react';
import MainMenu from '../mainMenu';
import CartContainer from '../Cart/CartContainer';
import ItemsList from '../itemsList';
import Item from '../Item/item';
import filter from 'lodash/filter';
import map from 'lodash/map';
import assign from 'lodash/assign';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import classnames from 'classnames';

import './styles.css';

class AppComponent extends Component {
   constructor(props) {
      super(props);

      this.state = {
         appTitle: 'Blueberry',
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
         quantity: 1
      };
      this.setState((prevState) => {
         return {
            cartItems: [...prevState.cartItems, cartItem]
         }
      });
   };

   increaseQuantity = (cartItemToIncrease) => {
      this.setState((prevState) => {
         let cartItems = map(prevState.cartItems, (cartItem) => {
            if (cartItem.item.id === cartItemToIncrease.item.id) {
               return assign({}, cartItem, {
                  quantity: cartItem.quantity + 1
               })
            }
            return cartItem;
         });
         return {
            ...prevState,
            cartItems
         }
      });
   };

   decreaseQuantity = (cartItemToDecrease) => {
      this.setState((prevState) => {
         let cartItems = map(prevState.cartItems, (cartItem) => {
            if (cartItem.item.id === cartItemToDecrease.item.id && cartItem.quantity !== 1) {
               return assign({}, cartItem, {
                  quantity: cartItem.quantity - 1
               })
            }
            return cartItem;
         });
         return {
            cartItems
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

   isItemInCart = (item) => {
      return !!filter(this.state.cartItems, ['item.id', item.id]).length;
   };

   renderCartItemsAmount = () => {
      let items = this.state.cartItems;
      if (!items.length) {
         return null;
      }
      let badgeClasses = classnames({
         'cart-items-badge': true,
         'scale-in-center': items.length === 1
      });
      return <div className={badgeClasses} ref={(badge) => this.cartBadge = badge}>
         {items.length}
      </div>
   };

   changeTitle = (newTitle) => {
      if (newTitle) {
         this.setState({
            appTitle: newTitle
         });
      }
   };

   render() {
      const {
         isSideBarOpened,
         sideBarClasses,
         menuBarClasses,
         cartItems,
         appTitle
      } = this.state;

      return (
         <div>
            <div className={sideBarClasses}/>
            <div className={menuBarClasses}>
               <i className="material-icons menubar__menu" onClick={this.toggleSideBar}>menu</i>
               <span className="menubar__logo">{appTitle}</span>
               <Link to="/cart" className="menubar__cart">
                  <i className="material-icons">
                     shopping_cart
                  </i>
                  {this.renderCartItemsAmount()}
               </Link>
            </div>
            <div className="workplace">
               <Route exact path="/" component={MainMenu}/>
               <Route exact path="/items" render={(props) => <ItemsList {...props}
                                                                        isItemInCart={this.isItemInCart}
                                                                        addItemToCart={this.addItemToCart}
                                                                        changeTitle={this.changeTitle}
                                                               />}/>
               <Route path="/items/:id" render={(props) => <Item {...props} addItemToCart={this.addItemToCart} changeTitle={this.changeTitle}/>}/>
               <Route path="/cart" render={(props) => <CartContainer {...props}
                                                                     cartItemsList={cartItems}
                                                                     changeTitle={this.changeTitle}
                                                                     increaseQuantity={this.increaseQuantity}
                                                                     decreaseQuantity={this.decreaseQuantity}/>}/>
            </div>
            <div className="footer"/>
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