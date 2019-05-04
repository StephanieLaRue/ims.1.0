import React from 'react';
import './index.scss';

//Calendar
import 'flatpickr/dist/themes/material_blue.css'


class Inventory extends React.Component {

	constructor() {
		super();
	
		this.state = {
            date: new Date(),
            rawInventory: [],
            cleanInventory: [],
            // soldItem: "red",
            soldStatus: false
        };
        
        this.viewInventory = this.viewInventory.bind(this)
        this.getInventory = this.getInventory.bind(this)
        this.handleSoldClick = this.handleSoldClick.bind(this);
    }
      
    componentDidMount() {
        this.getInventory()
    }

    handleSoldClick() {
        this.setState({
            soldStatus: this.state.soldStatus = true
        });

        console.log(this.state.soldStatus);

        let sold = { soldStatus: this.state.soldStatus }
        
        let params = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(sold)
          }
          fetch(`${location.origin}/sold-item/status`, params)
        //   .then(res => res.json())
        //   .then((data) => {
            // this.setState({rawInventory: data.rows}, () => {
            //   this.viewInventory(this.state.rawInventory)
            // })  
        //   })
        //   .catch(error => console.error('Error GETTING Data:', error))
      }

    

    getInventory() {
        let params = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }
          fetch(`${location.origin}/view-inventory`, params)
          .then(res => res.json())
          .then((data) => {
              console.log(data.rows);
              
            this.setState({rawInventory: data.rows}, () => {
              this.viewInventory(this.state.rawInventory)
            })  
          })
          .catch(error => console.error('Error GETTING Data:', error))
    }

    viewInventory(data) {
        
        let inventory = data.map((item, ind) => {

            let soldBtn = <div id="soldBtn" onClick={this.handleSoldClick} style={{backgroundColor: this.state.soldItem}}> </div>

            return (

                    <tr className="list-item">
                        <th className="header-row" colspan="100">
                            <div className="list-item-text" >Item: 1234</div>
                            {soldBtn}
                        </th>
                        
                        <tr className="data-row">
                            <th className="table-headers">Date</th>
                            <td className="table-data">{item.date}</td>
                        </tr>
                        <tr className="data-row">                                                        
                            <th className="table-headers">Description</th>
                            <td className="table-data">{item.description}</td>
                        </tr>
                        <tr className="data-row">      
                            <th className="table-headers">Brand</th>
                            <td className="table-data">{item.brand}</td>
                        </tr>

                        <tr className="data-row">
                            <th className="table-headers">Cost</th>
                            <td className="table-data">{item.cost}</td>
                        </tr>

                        <tr className="data-row">
                            <th className="table-headers">Style</th>
                            <td className="table-data">{item.style}</td>
                        </tr>
                        <tr className="data-row">
                            <th className="table-headers">Size</th>
                            <td className="table-data">{item.size}</td>
                        </tr>
                        <tr className="data-row">
                            <th className="table-headers">Color</th>
                            <td className="table-data">{item.color}</td>
                        </tr>
                        <tr className="data-row">
                            <th className="table-headers">Pattern</th>
                            <td className="table-data">{item.pattern}</td>
                        </tr>
                    </tr> 
            )
        })
        this.setState({cleanInventory: inventory})
    }

	render() {

		return(

            <div id="inventory-container">
                <table id="list">
                    <th id="header-text">Inventory</th>
                    {this.state.cleanInventory}
                </table>
			</div>
		) 
	}
}

export default Inventory;