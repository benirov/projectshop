import React, {Component, PropTypes} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardContentTable from './CardContent';



const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '99px',
  },
  table: {
    
  },
});

class TableShopping extends Component {
  constructor(props){ 
    super(props)
  }

render(){
  let dataProduct = this.props.data
  const { classes } = this.props

  return (
    
    
      <div>
      {
      dataProduct.map((element, i) => 
        {
          return (
            <div className={classes.root}>
            <Paper>
            <Grid container>
              <Grid container justify="center">
                <Grid item xs={6} sm={6}>
                  <Typography gutterBottom variant="title">Date :  {element.date}</Typography>
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item xs={6} sm={6}>
                  <Typography gutterBottom variant="title">Total :  {element.total}$</Typography>
                </Grid>
              </Grid>
                  <CardContentTable 
                    key={element}
                    datashopping={element.product}
                  />
            </Grid>
            </Paper>
            </div>
          )
        })
      }
      </div>
    
    
  );
    
  }
  
  
}

export default withStyles(styles)(TableShopping);
