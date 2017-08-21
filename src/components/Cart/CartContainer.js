import React, {Component} from 'react';
import CartItemsList from './CartItemsList';
import DeliveryPayment from './DeliveryPayment'
import OrderResult from './OrderResult'

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItemsList: props.cartItemsList
        };
    }

    render() {
        const { cartItemsList } = this.state;

        return (
            <div className="cart-container">
                <CartItemsList items={cartItemsList} />
                <DeliveryPayment/>
                <OrderResult/>
            </div>
        );
    }
}