import React from 'react';
import ReactDOM from 'react-dom';
// import './public/index.css';


class ProductInput extends React.Component {
	constructor(props) {
        super(props)
	}

	componentDidMount() {
	}

	render() {
		return(
			<div>
                <input type="text" placeholder="Product" />
			</div>
		) 
	}
}

ReactDOM.render( <ProductInput />, document.getElementById('inventoryInput') );

