import React, {Component, PropTypes} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase  from '@material-ui/core/ButtonBase'
import Button from '@material-ui/core/Button'
import TableProduct from './TableProduct'

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
    margin: '25px',
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

class CardView extends Component {
  constructor(props){ 
    super(props)
  }

render(){
  let dataProduct = this.props.dataProduct
  const { classes } = this.props
  return (
        
          dataProduct.map((Product, i) => (
              <Paper className={classes.root} key={i}>
                  <Grid container spacing={40}>  
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="" src={'/img'+ Product.image}/>
                      </ButtonBase>
                    </Grid>
                    <Grid item container xs={8} sm={8} direction="column" spacing={40} >
                      <Grid item xs={12} sm={12}>
                        <Grid item xs={12} sm={12}>
                          <Typography>&nbsp;</Typography>
                          <Typography gutterBottom> {Product.name}</Typography>
                          <Typography color="textSecondary" gutterBottom>{Product.description}</Typography>
                        </Grid>
                        <Grid item container xs={12} sm={12} spacing={16}>
                          <Grid item>
                            <Typography gutterBottom variant="title">${Product.price}</Typography>
                          </Grid>
                          <Grid item className="marginleft">
                            <Button size="small" color="primary" data-id={Product._id}  data-name={Product.name}  data-price={Product.price} data-quantity={0} onClick={this.props.onClickCardView}>
                              Add
                          </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>

            ))
    )
  }
}

export default withStyles(styles)(CardView);