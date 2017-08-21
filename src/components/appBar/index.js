import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import './styles.css';

class MainMenu extends Component {
    render() {
        return (
            <div>
                <Paper zDepth={3} className={'side-bar ' + this.state.sideBarState}>
                    <div className='list'>
                        <FlatButton className="list__element" label="Категории"/>
                        <FlatButton className="list__element" label="Лаки"/>
                        <FlatButton className="list__element" label="Инструменты"/>
                        <FlatButton className="list__element" label="Присыпки"/>
                    </div>
                </Paper>
                <AppBar
                    zDepth={2}
                    title={(
                        <div>
                            <TextField
                                type="search"
                                hintText="Search"
                            />
                        </div>
                    )}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.toggleSideBar}>
                </AppBar>
                <div className="backdrop"
                     style={
                         {'display': this.state.isSideBarOpened ? 'inline-block' : 'none'}
                     }
                     onClick={this.toggleSideBar}
                ></div>
            </div>
        );
    }
}

export default MainMenu;