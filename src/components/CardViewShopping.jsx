import React, {Component, PropTypes} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TableShopping from './TableShopping';
import Header from './Header';
import Button from '@material-ui/core/Button'


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '80px',
  },
  image: {
    width: 128,
    height: 128,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  padding:
  {
    paddingLeft: 140,
  },
});

class CardViewShopping extends Component  
{

  constructor(...props)
  {
    super(...props)
    this.state = { data: [], isLoading: false}
    this.back = this.back.bind(this)
  }

  componentWillMount()
  {
    this.setState({ isLoading: true });
    fetch('/api/shopping')
    .then(res => res.json())
    .then((Products) =>
    {
      this.setState({data: Products.shopping, isLoading: false })
    })
    
  }
  
  back()
  {
    this.props.history.push({
      pathname: '/checkout',
      state: { dataTable: this.props.history.location.state.dataTable }
    })
  }
  
  render() {
    const { classes } = this.props
    const { hits, isLoading } = this.state
     if (isLoading) {
      return <p>Loading ...</p>;
    }

    return(
      <div className={classes.root}>
      <Header/>
      <Grid container spacing={24} justify="center">
              <Grid item xs={6} sm={12} justify="center">
                <Grid item>
                  <Typography gutterBottom variant="title" className={classes.padding}>Shopping</Typography>
                </Grid>
              </Grid>
              <Grid container justify="flex-start" className={classes.padding}>
                <Button size="small" color="primary" onClick={this.back}>
                  back
                </Button>
              </Grid>

            <Paper>
                <TableShopping 
                key= {this.state.data}
                data= {this.state.data}
                />
            </Paper>
        </Grid>
        </div>
      )
    }
}

export default withStyles(styles)(CardViewShopping);
