import React, {Fragment, Component} from 'react'
import { Dialog, Button, TextField, Fab} from '@material-ui/core'
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'
import { FormControl, InputLabel, Select, MenuItem} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Form from './Form'

export default class extends Component {
  constructor(props){
    super(props)

    this.state = {
      open: false
    }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleFormSubmit = exercise => {
    this.handleToggle()

    this.props.onCreate(exercise)
  }

  render(){
    const {open} =  this.state,
          {muscles} = this.props

    return(
      <Fragment>
        <Fab
          size="small" 
          aria-label="Add"
          onClick={this.handleToggle}
        >
          <AddIcon />
        </Fab>
        <Dialog
          open={open}
          aria-labelledby="form-dialog-title"
          onClose={this.handleToggle}
        >
          <DialogTitle id="form-dialog-title">
            Crear un nuevo ejercico
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Content  
            </DialogContentText>
            <Form
              muscles={muscles}
              onSubmit={this.handleFormSubmit}
           />
          </DialogContent>
        </Dialog>
      </Fragment>
    )
  }
}