import React, {Fragment} from 'react'
import { 
  Grid, Paper, Typography, List, 
  ListItemSecondaryAction,IconButton} from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Delete, Edit} from '@material-ui/icons'
import {withStyles} from '@material-ui/core'
import Form from './Form'

const styles = {
  Paper: {
    padding: 20, 
    marginTop: 5, 
    height: 500, 
    overflowY: 'auto'
  }
}

export default withStyles(styles)(
  ({
    classes,
    muscles,
    exercises,
    category,
    onSelect, 
    exercise, 
    onDelete, 
    onSelectEdit, 
    editMode, 
    onEdit
  }) => {
    const { 
      id, 
      title = 'Bienvenido!', 
      description = 'Seleccione una opcion de la izquierda'
    } = {...exercise} 

    return(
      <Grid container direction="row">
        <Grid item xs={12} sm={6}>
          <Paper className={classes.Paper}>
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
                                <ListItemSecondaryAction>
                                  <IconButton onClick={() => onSelectEdit(id)}>
                                    <Edit/>
                                  </IconButton>
                                  <IconButton onClick={() => onDelete(id)}>
                                    <Delete/>
                                  </IconButton>
                                </ListItemSecondaryAction>
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
        <Grid item xs={12} sm={6}>
          <Paper className={classes.Paper}>
          {
            editMode
            ? <Form
                muscles={muscles}
                onSubmit={onEdit}
                exercise={exercise}
              />
            : <Fragment>
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
              </Fragment>
          } 
          </Paper>
        </Grid>
      </Grid>
    )
  }
) 
  