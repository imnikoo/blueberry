import React, { Component } from 'react';
import Card from '../Card/card';
import './styles.css';
import sale from './sale.jpg';
import anotherTopSellsImage from './top_sells.jpg';
import trendsImage from './trends.jpg';
import auctionsImage from './auctions.jpg';

class Offers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="offers-container">
                <Card image={sale} title="Распродажа"/>
                <Card image={anotherTopSellsImage} title="Топ продаж"/>
                <Card image={trendsImage} title="Тренды"/>
                <Card image={auctionsImage} title="Акции"/>
            </div>
        );
    }
}

export default Offers;