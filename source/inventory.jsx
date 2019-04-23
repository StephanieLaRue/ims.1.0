import React from 'react';
import './index.scss';

//Calendar
import 'flatpickr/dist/themes/material_blue.css'

class Inventory extends React.Component {

	constructor() {
		super();
	
		this.state = {
		  date: new Date()
		};
	  }

	render() {
		const { date } = this.state;

		return(

			<div>
                <div id="inventory-container">

                    <table id="list">
                        <th id="header-text">Inventory</th>

                        <tr className="list-item">
                        {/* HAVE DATA POPULATE ALL TD ELEMENTS */}
                        {/* MUST GENERATE ALL LIST ITEMS AND DATA INSIDE LIST ITEMS */}
                            <th className="list-item-text" colSpan="100">Item: 1234</th>
                            <tr className="data-row">
                                <th className="table-headers">Date</th>
                                <td className="table-data"> April 13, 2019</td>
                            </tr>
                            <tr className="data-row">                                                        
                                <th className="table-headers">Description</th>
                                <td className="table-data">Button Down Plaid Shortsleeve T-Shirt</td>
                            </tr>
                            <tr className="data-row">      
                                <th className="table-headers">Brand</th>
                                <td className="table-data">Janie and Jack</td>
                            </tr>

                            <tr className="data-row">
                                <th className="table-headers">Cost</th>
                                <td className="table-data">$1.99</td>
                            </tr>

                            <tr className="data-row">
                                <th className="table-headers">Style</th>
                                <td className="table-data">Button Down</td>
                            </tr>
                            <tr className="data-row">
                                <th className="table-headers">Size</th>
                                <td className="table-data">12 Months</td>
                            </tr>
                            <tr className="data-row">
                                <th className="table-headers">Color</th>
                                <td className="table-data">Blue</td>
                            </tr>
                            <tr className="data-row">
                                <th className="table-headers">Pattern</th>
                                <td className="table-data">Button Down</td>
                            </tr>
                        </tr>

                        <tr className="list-item">
                            <th className="list-item-text" colSpan="100">Item: 6789</th>
                            <tr className="data-row">
                                <th className="table-headers">Date</th>
                                <td className="table-data"> April 13, 2019</td>
                            </tr>
                            <tr className="data-row">                                                        
                                <th className="table-headers">Description</th>
                                <td className="table-data">Button Down Plaid Shortsleeve T-Shirt</td>
                            </tr>
                            <tr className="data-row">      
                                <th className="table-headers">Brand</th>
                                <td className="table-data">Janie and Jack</td>
                            </tr>

                            <tr className="data-row">
                                <th className="table-headers">Cost</th>
                                <td className="table-data">$1.99</td>
                            </tr>

                            <tr className="data-row">
                                <th className="table-headers">Style</th>
                                <td className="table-data">Button Down</td>
                            </tr>
                            <tr className="data-row">
                                <th className="table-headers">Size</th>
                                <td className="table-data">12 Months</td>
                            </tr>
                            <tr className="data-row">
                                <th className="table-headers">Color</th>
                                <td className="table-data">Blue</td>
                            </tr>
                            <tr className="data-row">
                                <th className="table-headers">Pattern</th>
                                <td className="table-data">Button Down</td>
                            </tr>
                        </tr>

                        <tr className="list-item">
                            <th className="list-item-text" colSpan="100">Item: 5010</th>
                            <tr className="data-row">
                                <th className="table-headers">Date</th>
                                <td className="table-data"> April 13, 2019</td>
                            </tr>
                            <tr className="data-row">                                                        
                                <th className="table-headers">Description</th>
                                <td className="table-data">Button Down Plaid Shortsleeve T-Shirt</td>
                            </tr>
                            <tr className="data-row">      
                                <th className="table-headers">Brand</th>
                                <td className="table-data">Janie and Jack</td>
                            </tr>

                            <tr className="data-row">
                                <th className="table-headers">Cost</th>
                                <td className="table-data">$1.99</td>
                            </tr>

                            <tr className="data-row">
                                <th className="table-headers">Style</th>
                                <td className="table-data">Button Down</td>
                            </tr>
                            <tr className="data-row">
                                <th className="table-headers">Size</th>
                                <td className="table-data">12 Months</td>
                            </tr>
                            <tr className="data-row">
                                <th className="table-headers">Color</th>
                                <td className="table-data">Blue</td>
                            </tr>
                            <tr className="data-row">
                                <th className="table-headers">Pattern</th>
                                <td className="table-data">Button Down</td>
                            </tr>
                        </tr>

                    </table>
                </div>
			</div>
		) 
	}
}

export default Inventory;