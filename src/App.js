import React, {Component} from 'react';
import './App.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import AppComponent from './components/appComponent';
import {
    BrowserRouter as Router
} from 'react-router-dom';

class App extends Component {
   render() {
      return (
         <div className="App">
             <Router>
                 <AppComponent/>
             </Router>
         </div>
      );
   }
}

export default App;
