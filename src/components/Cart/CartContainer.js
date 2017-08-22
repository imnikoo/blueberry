import React, {Component} from 'react';
import map from 'lodash/map';

import CartItem from './CartItem';
import DeliveryPayment from './DeliveryPayment'
import OrderResult from './OrderResult'
import OrderInfo from './OrderInfo'

import './cartContainerStyles.css';

export default class extends Component {
   componentDidMount = () => {
      this.props.changeTitle('Ваш заказ');
   };

   render() {
      const { cartItemsList, increaseQuantity, decreaseQuantity} = this.props;

      return (
         <div className="cart-container">
            <div className="list-header">
               <span className="header-image"></span>
               <span className="header-name">Название</span>
               <span className="header-price">Количество</span>
            </div>
            <div className='cart-items'>
               {map(cartItemsList, (item, i) =>
                  <CartItem key={i} cartItem={item} increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}/>
               )}
            </div>
             <OrderInfo />
            <DeliveryPayment/>
            <OrderResult/>
         </div>
      );
   }
}