import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export  default class AlertDialog extends Component 
{

  constructor(...props)
  {
    super(...props)
    this.state = {open : false}

    this.handleClose = this.handleClose.bind(this)
  }

    handleClickOpen = () => {
    this.setState({ open: true });
    };

    handleClose = () => {
      this.setState({ open: false });
    };
  
  render() {
    return (
      <div>
        <Button >Open alert dialog</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Producto guardado"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" autoFocus onClick={this.handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
