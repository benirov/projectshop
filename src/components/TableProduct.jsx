import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 400,
  },
});

function addTotal(dataTable)
{
    let price = ''
    dataTable.map((row, i) => {
        if(row)
        {
          price =  Number(price)+Number(row.price)          
        }
      })      
    return price
}

function TableProduct(props) {
  
  const { classes } = props;

  return (
    <div className={classes.root}>
    <Paper className={classes.root}>
      <Table className={classes.table} className="tableCar">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell numeric>Quantity</TableCell>
            <TableCell numeric>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
              props.dataTable.map((row, i) => {
                if(row)
                {
                    return (
                    <TableRow key={row.id} id={row.id}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell numeric>{row.quantity}</TableCell>
                      <TableCell numeric>{row.price}</TableCell>
                    </TableRow>
                  )
                }
                
              })
          }
        </TableBody>
      </Table>
    </Paper>
    <div style={{ padding: 24 }}>
      <Grid container justify="flex-end">
        <Grid item style={{ padding: 24 }}>
          <Typography gutterBottom variant="title">Total</Typography>
        </Grid>
        <Grid item style={{ padding: 24 }}>
          <Typography gutterBottom variant="title" id="total">{addTotal(props.dataTable)}</Typography>
        </Grid>
      </Grid>
    </div>
    <div>

      <Grid container justify="flex-end" >
        <Button size="small" color="primary" onClick={props.OnClickCheckOut}>
          View
        </Button>
      </Grid>
    </div>
    </div>
    
  );
}

TableProduct.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableProduct);
