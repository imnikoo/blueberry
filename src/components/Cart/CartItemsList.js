import React, {Component} from 'react';
import './cartItemsStyles.css';

class CartItemsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>Ваш заказ</span>
                <div></div>
            </div>
        );
    }
}

export default CartItemsList;
