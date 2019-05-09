import React from 'react';
import './index.scss';

//Calendar
import 'flatpickr/dist/themes/material_blue.css'
import Flatpickr from 'react-flatpickr'
import { log } from 'util';


class Sidebar extends React.Component {

	constructor() {
		super();
	
		this.state = {
			date: new Date(),
			description: "",
			cost: "",
			brand: "",
			style : "",
			size: "",
			pattern: "",
			color: ""
		
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }

	  handleChange(eve) {
		let name = eve.target.name
		let value = eve.target.value;
		  
		this.setState({ [name]: value });      
	  }

	  handleSubmit(eve) {
		eve.preventDefault();
		
		let newItem = {
			description: this.state.description,
			cost: this.state.cost,
			date: this.state.date,
			brand: this.state.brand,
			style : this.state.style,
			size: this.state.size,
			pattern: this.state.pattern,
			color: this.state.color
		}

		console.log(newItem.date);
		

		this.userRegistration(newItem)

	  }

	  userRegistration(item) {
		let url = `${location.origin}/add-new-item`;
		let params = {
		  method: 'post',
		  headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(item)
		}
		fetch(url, params)
		// .then((res) => res.text())
		// .then((data) => {
		//   if(data == 'registered') {
		// 	this.setState({newUser: true})
		//   }
		//   else if (data == 'userexists') {
		// 	this.setState({userexists: true})
		//   } 
		// })
		// .catch((err) => {
		//   return err;
		// })
	  }

	render() {
		const { date} = this.state;

		return(

			<div>
				<div id="full-sidebar">
					<h4>Inventory Entry</h4>

					<form onSubmit={this.handleSubmit}>
					
						<div id="top-sidebar-container">
							<Flatpickr name="date" className="calendar" options={{altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d"}} value={date} onChange={date => { this.setState({date}) }} />
							<input name="cost" id="cost-select" className="product-cost" placeholder="Cost" value={this.state.cost} onChange={this.handleChange}/>
						</div>
						<div id="sidebar-container">
							<input name="description" id="description-select" className="product-desc" type="text" placeholder="Product Description" value={this.state.description} onChange={this.handleChange}/>
						</div>

						<div id="sidebar-dropdowns">
							<div className="dropdown-list">
								<select name="brand" id="brand-select" value={this.state.brand} onChange={this.handleChange}>
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
									<option value="Other">Other</option>
								</select>
							</div>

							<div className="dropdown-list">
								<select name="style" id="style-select" value={this.state.style} onChange={this.handleChange}>
									<option value="">Style</option>
									<option value="Dress">Dress</option>
									<option value="Skirt">Skirt</option>
									<option value="Shorts">Shorts</option>
									<option value="Pants">Pants</option>
									<option value="ShortsleeveShirt">Shortsleeve T-Shirt</option>
									<option value="LongsleeveShirt">Longsleeve T-Shirt</option>
									<option value="Jacket">Jacket</option>
									<option value="Overalls">Overalls</option>
									<option value="Other">Other</option>
								</select>
							</div>

							<div className="dropdown-list">
								<select name="size" id="size-select" value={this.state.size} onChange={this.handleChange}>
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
									<option value="12">13+</option>
								</select>
							</div>

							<div className="dropdown-list">
								<select name="pattern" id="pattern-select" value={this.state.pattern} onChange={this.handleChange}>
									<option value="">Pattern</option>
									<option value="Plaid">Plaid</option>
									<option value="PolkaDot">Polka Dot</option>
									<option value="Camo">Camo</option>
									<option value="Denim">Denim</option>
									<option value="Floral">Floral</option>
									<option value="Striped">Striped</option>
									<option value="ColorBlock">Color-Block</option>
									<option value="Tulle">Tulle</option>
									<option value="Other">Other</option>
								</select>
							</div>

							<div className="dropdown-list">
								<select name="color" id="color-select" value={this.state.color} onChange={this.handleChange}>
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
									<option value="Other">Other</option>
								</select>
							</div>
						</div>
							<button type="submit">Submit</button>
					</form>
				</div>
				
			</div>
		) 
	}
}

export default Sidebar;