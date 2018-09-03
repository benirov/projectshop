import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TableProduct from './TableProduct';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
    margin: '10px',
    marginTop: '80px',
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

function Card( props ){
  const { classes } = props
   return(
          <Paper className={classes.root}>
      <Grid container>
        <Grid item>
          <Typography gutterBottom variant="title">CAR</Typography>
        </Grid>
        <TableProduct 
        key= {props.dataTable}
        dataTable= {props.dataTable}
        OnClickCheckOut = {props.OnClickCheckOut}
        dataTotal = {props.dataTotal}
        />
      </Grid>
    </Paper>
    )
    

}
export default withStyles(styles)(Card);