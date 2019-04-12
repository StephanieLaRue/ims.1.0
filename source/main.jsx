import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Inventory from './inventory.jsx';
import Sidebar from './sidebar.jsx';


class ProductInput extends React.Component {
  
    render() {
      return (
        <div >
            <h1>MAIN TEST TEXT</h1>
            <Inventory  />
            <Sidebar />
        </div>
      )
    }
}


ReactDOM.render( <ProductInput />, document.getElementById('components') );