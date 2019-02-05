import React, {Fragment} from 'react'
import {Grid,Paper,Typography, List} from 'material-ui'
import { ListItem, ListItemText } from 'material-ui/List'

import LeftPane from './LeftPane'
import RighPane from './RighPane'

const styles = {
  Paper: {
    padding: 20, 
    marginTop: 10, 
    marginBotton: 10, 
    height: 500, 
    overflowY: 'auto'
  }
}

export default ({exercises, category, onSelect, exercise}) => {
  const { 
    id, 
    title = 'Bienvenido!', 
    description = 'Seleccione una opcion de la izquierda'
  } = {...exercise} 

  return(
    <Grid container direction="row" spacing={24}>
      <Grid item xs>
        <Paper style={styles.Paper}>
          {
            exercises.map(([group, exercises]) =>
              !category || category === group
                ? <Fragment key={group}>
                      <Typography
                        variant="headline"
                        style={{ textTransform: 'capitalize' }}
                      >
                        {group}
                      </Typography>
                      <List component="ul">
                        {
                          exercises.map(({ id, title }) =>
                            <ListItem 
                            key={id}
                            button
                            onClick={() => onSelect(id)}
                          >
                              <ListItemText primary={title}/>
                            </ListItem>
                          )
                        }
                      </List>
                    </Fragment>
                : null
            )
          }
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper style={styles.Paper}>
          <Typography
            variant="display1"
          >
            {title}
          </Typography>
          <Typography
            variant="subheading"
            style={{ marginTop: 20 }}
          >
            {description}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}
  
  