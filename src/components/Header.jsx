import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


export  default class Header extends Component 
{

	render(){
		return(
				<AppBar position="absolute" color="default">
		          <Toolbar>
		            <Typography variant="title" color="inherit" noWrap>
		              Shop
		            </Typography>
		          </Toolbar>
		        </AppBar>
			);	
	}

}