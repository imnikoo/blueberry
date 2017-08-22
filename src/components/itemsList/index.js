import React, {Component} from 'react';
import map from 'lodash/map';
import classnames from 'classnames';
import Card from '../Card/card';
import img from '../offers/top_sells.jpg';
import './styles.css';

import acrilyc from './images/acrilyc.jpg';
import lamp from './images/lamp_red.jpg';
import chameleons from './images/chameleons.jpg';

class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsToShow: [
                {
                    id: 1,
                    name: 'Мономер для акриловой пудры 58мл',
                    category: 'Жидкости',
                    price: '90',
                    image: acrilyc
                },
                {
                    id: 2,
                    name: 'Лампа красная 48ватт (гель, акрилл, шекллак)',
                    category: 'снтрументы',
                    price: '250',
                    image: lamp
                }, {
                    id: 3,
                    name: 'Хамелеоны микс размеров. Упаковка 1440шт',
                    category: 'Декор',
                    price: '100',
                    image: chameleons
                },
                {
                    id: 4,
                    name: 'Набор для покраски Estel (миска, кисть, пресс-ключ)',
                    category: 'Инструменты, фрезеры',
                    price: '100'
                },
                {
                    id: 5,
                    name: 'Кристалы пикси',
                    category: 'Стразы, стекло',
                    price: '90'
                },
                {
                    id: 6,
                    name: 'Конфетти',
                    category: 'Декор, конфетти',
                    price: '25',
                    discountPrice: '10'
                }, {
                    id: 7,
                    name: 'Типсы на лак',
                    category: 'Типсы',
                    price: '1'
                },
                {
                    id: 8,
                    name: 'Набор для покраски Estel (миска, кисть, пресс-ключ)',
                    category: 'Инструменты, фрезеры',
                    price: '100'
                }
            ]
        }
    }

    componentDidMount = () => {
      this.props.changeTitle('Товар');
    };

    renderPrice(item) {
        if (!item.discountPrice) {
            return <span className="price">{item.price}₴</span>
        }
        return <div className="price-container">
            <span className="previous-price">{item.price}₴</span>
            <span className="price">{item.discountPrice}₴</span>
        </div>
    }

    renderCart = (item) => {
        const { addItemToCart } = this.props;
        const isItemInCart = this.props.isItemInCart(item);
        const cartClasses = classnames({
           'material-icons' : true,
           'to-cart': !isItemInCart,
           'from-cart': isItemInCart
        });
        return <i className={cartClasses} onClick={() => addItemToCart(item)}>
           { isItemInCart ? `remove_shopping_cart` : `add_shopping_cart` }
        </i>;
    };

    render() {

        return (
            <div className="items-container">
                {map(this.state.itemsToShow, (item, i) =>
                    <Card
                        title={item.name}
                        key={i}
                        image={item.image ? item.image : img}
                        leftBottomComponent={this.renderPrice(item)}
                        rightBottomComponent={this.renderCart(item)}
                    />
                )}
            </div>
        );
    }
}

export default ItemsList;