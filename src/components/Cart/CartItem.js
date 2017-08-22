import React, {Component} from 'react';
import './cartItemStyles.css';

class CartItem extends Component {
    render() {
       const { cartItem, increaseQuantity, decreaseQuantity } = this.props;

        return (
            <div className="cart-item">
               <img className='cart-item__image' src={cartItem.item.image} alt={cartItem.item.name}/>
               <div className="cart-item__info">
                  <span className="cart-item__name">{cartItem.item.name}</span>
                  <span className="cart-item__price">{cartItem.item.price} грн.</span>
               </div>
               <div className="cart-item__quantity">
                  <i className="material-icons more" onClick={() => increaseQuantity(cartItem)}>keyboard_arrow_up</i>
                  <span>{cartItem.quantity}</span>
                  <i className="material-icons less" onClick={() => decreaseQuantity(cartItem)}>keyboard_arrow_down</i>
               </div>
            </div>
        );
    }
}

export default CartItem;
