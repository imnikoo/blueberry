import React, {Component} from 'react';
import './orderInfoStyles.css';

class OrderInfo extends Component {
    render() {
        return (
            <div className="order-info">
                <span>Имя</span>
                <input type="text"/>
                <span>Фамилия</span>
                <input type="text"/>
                <span>Телефон</span>
                <input type="tel"/>
            </div>
        );
    }
}

export default OrderInfo;
