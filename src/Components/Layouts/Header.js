import React from 'react'
import {AppBar, Toolbar, Typography} from 'material-ui'

export default props => 
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit">
        Exercise database
      </Typography>
    </Toolbar>
  </AppBar>