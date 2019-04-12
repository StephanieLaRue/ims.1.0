import React from 'react';
import './index.scss';


//Calendar
import 'flatpickr/dist/themes/material_blue.css'
import Flatpickr from 'react-flatpickr'


class Sidebar extends React.Component {

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
				<div id="full-sidebar">
					<h4>Inventory Entry</h4>
					<div id="top-sidebar-container">
						<Flatpickr className="calendar" options={{altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d"}} value={date} onChange={date => { this.setState({date}) }} />
						<input className="product-cost" placeholder="Cost"/>
					</div>
					<div id="sidebar-container">
						<input className="product-desc" type="text" placeholder="Product Description" />
					</div>

					<div id="sidebar-dropdowns">
						<div className="dropdown-list">
							<select>
								<option value="">Brand</option>
								<option value="JanieJack">Janie and Jack</option>
								<option value="OshKosh">Osh Kosh</option>
								<option value="BabyGap">Baby Gap</option>
								<option value="Tea">Tea</option>
								<option value="HannaAnderson">Hanna Anderson</option>
								<option value="MiniBoden">Mini Boden</option>
								<option value="BabyBoden">Baby Boden</option>
								<option value="MatildaJane">Matilda Jane</option>
								<option value="LauraAshley">Laura Ashley</option>
								<option value="RalphLauren">Ralph Lauren</option>
								<option value="LillyPulitzer">Lilly Pulitzer</option>
								<option value="CrewCuts">Crew Cuts</option>
								<option value="MarthasMin">Martha's Miniatures</option>
								<option value="Persnickety">Persnickety</option>
								<option value="LibertyLondon">Liberty of London</option>
								{/* <option value=""></option>
								<option value=""></option> */}
							</select>
						</div>

						<div className="dropdown-list">
							<select>
								<option value="">Style</option>
								<option value="Dress">Dress</option>
								<option value="Skirt">Skirt</option>
								<option value="Shorts">Shorts</option>
								<option value="Pants">Pants</option>
								<option value="ShortsleeveShirt">Shortsleeve T-Shirt</option>
								<option value="LongsleeveShirt">Longsleeve T-Shirt</option>
								<option value="Jacket">Jacket</option>
								<option value="Overalls">Overalls</option>
							</select>
						</div>

						<div className="dropdown-list">
							<select>
								<option value="">Size</option>
								<option value="0-3Months">0-3 Months</option>
								<option value="3Months">3 Months</option>
								<option value="3-6Months">3-6 Months</option>
								<option value="6Months">6 Months</option>
								<option value="6-9Months">6-9 Months</option>
								<option value="9Months">9 Months</option>
								<option value="12Months">12 Months</option>
								<option value="12-18Months">12-18 Months</option>
								<option value="2/2T">2/2T</option>
								<option value="3/3T">3/3T</option>
								<option value="4/4T">4/4T</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
							</select>
						</div>

						<div className="dropdown-list">
							<select>
								<option value="">Pattern</option>
								<option value="Plaid">Plaid</option>
								<option value="PolkaDot">Polka Dot</option>
								<option value="Camo">Camo</option>
								<option value="Denim">Denim</option>
								<option value="Floral">Floral</option>
								<option value="Striped">Striped</option>
								<option value="ColorBlock">Color-Block</option>
								<option value="Tulle">Tulle</option>
							</select>
						</div>

						<div className="dropdown-list">
							<select>
								<option value="">Color</option>
								<option value="white">white</option>
								<option value="beige">beige</option>
								<option value="black">black</option>
								<option value="brown">brown</option>
								<option value="tan">tan</option>
								<option value="gray">gray</option>
								<option value="charcoal">charcoal</option>
								<option value="red">red</option>
								<option value="magenta">magenta</option>
								<option value="maroon">maroon</option>
								<option value="orange">orange</option>
								<option value="yellow">yellow</option>
								<option value="green">green</option>
								<option value="blue">blue</option>
								<option value="purple">purple</option>
								<option value="pink">pink</option>
								<option value="coral">coral</option>
								<option value="multi-color">multi-color</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		) 
	}
}

module.exports = Sidebar;