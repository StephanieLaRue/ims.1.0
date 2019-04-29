import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Inventory from './inventory.jsx';
import Sidebar from './sidebar.jsx';


class ProductInput extends React.Component {

    render() {
      return (
        <div id="allcomponent-container">
            <Sidebar />
            <Inventory  />
        </div>
      )
    }
}


ReactDOM.render( <ProductInput />, document.getElementById('components') );