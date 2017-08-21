import React, {Component} from 'react';
import './card.css';
import classnames from 'classnames';

//image="" title="" leftBottomComponent="" rightBottomComponent=""
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardTitleClasses: classnames({
                'card-title': true,
                'left-align': this.props.leftBottomComponent || this.props.rightBottomComponent
            })
        };
    }

    renderBottomContainer() {
        return this.props.leftBottomComponent || this.props.rightBottomComponent ?
            <div className="bottom-container">
                {this.props.leftBottomComponent}
                {this.props.rightBottomComponent}
            </div> :
            null;
    }

    render() {
        return (
            <div className="card-container">
                <img className="card-image" src={this.props.image}/>
                <div className={this.state.cardTitleClasses}>{this.props.title}</div>
                {this.renderBottomContainer()}
            </div>
        );
    }
}

export default Card;