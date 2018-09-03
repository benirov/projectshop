import React, {Component, PropTypes} from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CardView from './CardView';
import Header from './Header';
import Card from './Card';
import { Link, withRouter } from "react-router-dom";


class App extends Component 
{
	constructor(...props)
	{
		super(...props)
		this.state = {dataProduct : [], dataTable : []}

		this.handleOnClickCardView = this.handleOnClickCardView.bind(this)
		this.handleOnClickCheckOut = this.handleOnClickCheckOut.bind(this)
	}

	componentWillMount()
	{
		fetch('/api/product')
		.then(res => res.json())
		.then((Products) =>
		{
			this.setState({dataProduct: Products.product})
		})
	}

	handleOnClickCardView(e)
	{

	   	let dataElement = e.target;
	    if(e.target.tagName == 'SPAN')
	    {
	      dataElement = e.target.parentNode
	    }
	    dataElement.setAttribute('data-quantity', Number(dataElement.getAttribute('data-quantity'))+1)
	    let dataInfo = 
	    {
	      id: dataElement.getAttribute('data-id'),
	      name: dataElement.getAttribute('data-name'),
	      price: Number(dataElement.getAttribute('data-price'))*Number(dataElement.getAttribute('data-quantity')),
	      quantity: dataElement.getAttribute('data-quantity')
	    }
	    if(this.state.dataTable.length > 0)
		 {
		 	this.state.dataTable.map((element, i) =>
		 	{
		 		if(element)
		 		{
		 			if(dataInfo.id === element.id)
			 		{
			 			delete this.state.dataTable[i];
			 		}
		 		}
		 	});
		 }
	    this.setState({dataTable: [...this.state.dataTable, dataInfo]})
	}

	handleOnClickCheckOut(e)
	{
		 let table = document.querySelector('.tableCar').childNodes[1].childNodes
		 table.forEach((element, index) =>
		 	{
		 			console.log(element)
		 	})

		 // this.props.history.push("/checkout");
		 this.props.history.push({
		  pathname: '/checkout',
		  state: { dataTable: this.state.dataTable }
		})
		 // console.log(table)

	}
	render(){
		return (
			<div>
				<Header />
				<Grid  container>
					<Grid item xs={6} sm={6} >
						<CardView
							key= {this.state.dataProduct._id}
							dataProduct= {this.state.dataProduct}
							onClickCardView = {this.handleOnClickCardView}
							

						/>
					</Grid>
					<Grid item xs={6} sm={6} >
						<Card 
						dataTable = {this.state.dataTable}
						OnClickCheckOut = {this.handleOnClickCheckOut}
						/>
					</Grid>
				</Grid>
			</div>
			
		)
	}
}

App.propTypes = {}

App.defaultProps = {}

export default App
