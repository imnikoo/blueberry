import React, {Component} from 'react';
import './item.css';
import map from 'lodash/map';
import join from 'lodash/join';
import Swipeable from 'react-swipeable';
import classnames from 'classnames';

import image from './confetti.jpg';

export default class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: {},
            cartButtonBottom: false,
            cartClasses: classnames({
                'material-icons': true,
                'add-item-to-cart': true,
            })
        };

    }

    componentDidMount() {
        let item = {
            image,
            name: 'Набор конфетти в баночках 10шт',
            categories: [
                { name: 'Декор' },
                { name: 'Конфетти' }
            ],
            quantity: 3,
            price: 80
        };
        this.setState({
            item
        })
    }

    renderCategory(categories) {
        let names = map(categories, 'name');
        return <div className="item-categories">
            {join(names, ' > ')}
        </div>
    }

    /*cartButtonGoBottom() {
        if (this && !this.state.cartButtonBottom) {
            this.setState({
                cartButtonBottom: true,
                cartClasses: classnames({
                    'material-icons': true,
                    'add-item-to-cart': true,
                    'bottom': true
                })
            });
        }

    }*/

    render() {
        return (
            <Swipeable className="item-container">
                {this.renderCategory(this.state.item.categories)}
                <div className="item-image">
                    <img className="item-image" src={this.state.item.image} alt={this.state.item.name} />
                    <i className={this.state.cartClasses}>add_shopping_cart</i>
                </div>
                <div className="item-description">
                    <span className="item-title">{this.state.item.name}</span>
                    <span className="item-price"><span style={{textDecoration: 'line-through'}}>160 грн.</span> {this.state.item.price} грн.</span>
                </div>
                <span className="item-additional-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis tincidunt quam. In sollicitudin nisi facilisis, porttitor mi vel, fringilla nisl. Donec vulputate magna ut mauris porta auctor. Nam gravida orci in turpis dignissim condimentum in nec sem. Duis et enim congue quam congue viverra. Pellentesque porta id dolor ac faucibus. Praesent leo metus, consectetur sit amet ligula eu, venenatis dapibus nunc. Pellentesque sed quam turpis. Donec efficitur, sapien vitae hendrerit dapibus, nibh justo bibendum ex, sed mollis elit lacus ac arcu. Duis non sem tempor, dignissim est ut, ornare massa. Sed tempor libero cursus, tincidunt magna et, consequat eros. Maecenas nec tristique dolor. Mauris faucibus egestas nunc, vel convallis nibh cursus et.</span>
            </Swipeable>
        );
    }
}
