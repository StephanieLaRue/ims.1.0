import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Inventory from './inventory.jsx';
import Sidebar from './sidebar.jsx';


class ProductInput extends React.Component {

  componentDidMount() {

      let params = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
      fetch(`${location.origin}/view-inventory`, params)
      .then(res => res.json())
      .then(function(data) {
        console.log(data);
        
        // workoutList = data;  
        // generateList(data)
      })
      .catch(error => console.error('Error GETTING Data:', error))
    
  
  }

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