import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Module from '../src/Module'

const useStyles = makeStyles((theme) => {
  return {
    title: {
      height: 70,
      backgroundColor: 'transparent',
      color: theme.palette.grey[100],
      fontSize: 24,
      lineHeight: '64px',
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      justifyContent: 'center',
      color: theme.palette.grey[200],
      backgroundColor: theme.palette.primary.main
    },
    titleContainer: {
      paddingLeft: 44,
      paddingRight: 44,
      display: 'flex'
    },
    leftTitle: {
      flexGrow: 1,
      overflow: 'hidden',
      lineHeight: '70px'
    },
    footer: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: '300',
      lineHeight: '64px',
      background: '#333'
    },
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    section: {
      display: 'flex',
      padding: 44,
      minHeight: 'calc(100vh - 135px)',
      color: '#333'
    }
  }
})

export default function TitleNar() {
  const classes = useStyles()

  return <Module title="反馈">
    
  </Module>
}