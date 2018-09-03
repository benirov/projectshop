import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableProduct from './TableProduct';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function CardContentShopping( props ){
  const { classes } = props

   return(
    <div className={classes.root}>
      <Table className={classes.table} className="tableCar">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell numeric>price</TableCell>
            <TableCell numeric>quiantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.datashopping.map((row, i) => {
              if(row)
              {
                  return (
                      <TableRow>
                        <TableCell>{row.name}</TableCell>
                        <TableCell numeric>{row.quantity}</TableCell>
                        <TableCell numeric>{row.price}</TableCell>
                     </TableRow>
                    )
                }
              })
            }
        </TableBody>
      </Table>
    </div>
          
    )
    

}
   
    

// Card.propTypes = {
//   // classes: PropTypes.object.isRequired,
// };

// export default IceCreamsList

export default withStyles(styles)(CardContentShopping);