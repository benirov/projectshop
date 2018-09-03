import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddCircle from '@material-ui/icons/AddCircle'
import Remove from '@material-ui/icons/Remove' 
import Icon from '@material-ui/core/Icon'
import red from '@material-ui/core/colors/red'
import classNames from 'classnames'
import IconButton from '@material-ui/core/IconButton'
import AlertDialog, {openSnackbar} from './AlertDialog'
import Header from './Header';


const styles = theme => ({
  root: {
    
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    marginTop: '80px',
  },
  padding:
  {
    paddingLeft: 140,
  },
  table: {
    minWidth: 200,
  },
  hidden: 
  {
    display: 'none' 
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
},
button: {
    margin: theme.spacing.unit,
  },
})

class CheckOut extends Component  
{

  constructor(...props)
  {
    super(...props)
    this.state = { open: false}
    this.addTotal = this.addTotal.bind(this)
    this.OnCliAddProduct = this.OnCliAddProduct.bind(this)
    this.buyProduct = this.buyProduct.bind(this)
    this.back = this.back.bind(this)
    this.shopping = this.shopping.bind(this)
    
  }

    // functions

    addTotal(dataTable, option)
    {
      let price = ''
      switch(option)
      {
        case 1:
        
          dataTable.map((row, i) => {
              if(row)
              {
                price =  Number(price)+Number(row.price)
              }
            })
          return price
        break;

        case 0:
         
          let table  = document.querySelector('.tableCheckOut').childNodes[1].childNodes
          console.log(table);

          table.forEach((row, i) => {
                price =  Number(price)+Number(row.childNodes[2].innerHTML)
              
            })
          return price
        break;
      }
        
    }

  OnCliAddProduct(event, option)
  {
    switch(option)
    {
      case 1:
        document.getElementById(event).childNodes[1].innerHTML = Number(document.getElementById(event).childNodes[1].innerHTML)+1
        document.getElementById(event).childNodes[2].innerHTML = Number(document.getElementById(event).childNodes[1].innerHTML)*Number(document.getElementById(event).childNodes[3].innerHTML)
      break;
      case 0:
        if(Number(document.getElementById(event).childNodes[1].innerHTML) != 0)
        {
          document.getElementById(event).childNodes[1].innerHTML = Number(document.getElementById(event).childNodes[1].innerHTML)-1
          document.getElementById(event).childNodes[2].innerHTML = Number(document.getElementById(event).childNodes[1].innerHTML)*Number(document.getElementById(event).childNodes[3].innerHTML)
        }
      break;
    }
    document.getElementById('total').innerHTML = this.addTotal([], 0)
  }


  buyProduct()
  {
    let data = 
    {
      product: {
        id: 0,
        name: '',
        quantity: 0,
        price: 0,
      },
      total: 0,
    }

    let dataProduct = []
    let total = ''
    let table  = document.querySelector('.tableCheckOut').childNodes[1].childNodes
    table.forEach((row, i) => {
        dataProduct.push(
        {
          id: row.childNodes[0].getAttribute('data-id'),
          name: row.childNodes[0].innerHTML,
          quantity: Number(row.childNodes[1].innerHTML),
          price: Number(row.childNodes[3].innerHTML)
        })
        
      })

        data.total = document.getElementById('total').innerHTML
        data.product = dataProduct
        fetch('/api/shopping', {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
          .catch(error => openSnackbar({ message: 'Error al realizar comprar.' }))
          .then((response) => 
          {
              openSnackbar({ message: 'Compra exitosa.' });
          })
  }

  back()
  {
    this.props.history.push({
      pathname: '/',
      state: { dataTable: this.props.history.location.state.dataTable }
    })
  }

shopping()
{
    this.props.history.push({
      pathname: '/viewshopping',
      state: { dataTable: this.props.history.location.state.dataTable }
    })
  }

  
  
  render() {
    const { classes } = this.props
    return (
    <div>
    <Header />
    <AlertDialog
      open={this.state.open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="producto guardado" 
      />
      <Grid container justify="center" className={classes.root}>
        <Grid container justify="flex-start" className={classes.padding}>
        <Button size="small" color="primary" onClick={this.back}>
          back
        </Button>
      </Grid>
      <Grid container justify="flex-start" className={classes.padding}>
        <Button size="small" color="primary" onClick={this.shopping}>
          view shopping
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Table className={classes.table} className="tableCheckOut">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell numeric>Quantity</TableCell>
            <TableCell numeric>Price</TableCell>
            <TableCell >Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
            this.props.history.location.state.dataTable.map((row, i) => {
              
              if(row)
              {
                  return (
                  <TableRow key={row.id} id={row.id}>
                    <TableCell component="th" scope="row" data-id={row.id}>
                      {row.name}
                    </TableCell>
                    <TableCell numeric>{row.quantity}</TableCell>
                    <TableCell numeric>{row.price}</TableCell>
                    <TableCell className={classes.hidden}>{row.price}</TableCell>
                    <TableCell>
                    <IconButton id="btnAdd" className={classes.button} aria-label="Add">
                      <div onClick={(e) => this.OnCliAddProduct(row.id, 1)}><AddCircle /></div>
                    </IconButton>
                    <IconButton id="btnDelete"className={classes.button} aria-label="Delete">
                      <div onClick={(e) => this.OnCliAddProduct(row.id, 0)}><Remove /></div>
                    </IconButton>
                    </TableCell>
                  </TableRow>
                )
              }
              
            }) 
          }
        </TableBody>
      </Table>
      </Grid>
      </Grid>
    <div style={{ padding: 24 }}>
      <Grid container justify="center">
        <Grid item style={{ padding: 24 }}>
          <Typography gutterBottom variant="title">Total</Typography>
        </Grid>
        <Grid item style={{ padding: 24 }}>
          <Typography gutterBottom variant="title" id="total">{this.addTotal(this.props.history.location.state.dataTable, 1)}</Typography>
        </Grid>
      </Grid>
    </div>
    <div>
      <Grid container justify="center">
        <Button size="small" color="primary" onClick={this.buyProduct}>
          Buy
        </Button>
      </Grid>
    </div>
    </div>
  );
  }
}

export default withStyles(styles)(CheckOut);
