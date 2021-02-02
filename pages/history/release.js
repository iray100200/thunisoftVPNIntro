import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import Link from '@material-ui/core/Link'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import HotelIcon from '@material-ui/icons/Hotel'
import RepeatIcon from '@material-ui/icons/Repeat'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Module from '../../src/Module'

function GitLabIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fillRule="evenodd" d="M14.381966,9 L17.1055728,3.5527864 C17.510563,2.74280594 18.6976082,2.84525834 18.9578263,3.71265211 L21.9578263,13.7126521 C22.0764694,14.1081293 21.9398565,14.5358621 21.6139406,14.7893522 L12.6139406,21.7893522 C12.2528301,22.0702159 11.7471699,22.0702159 11.3860594,21.7893522 L2.38605939,14.7893522 C2.06014352,14.5358621 1.92353056,14.1081293 2.04217371,13.7126521 L5.04217371,3.71265211 C5.30239185,2.84525834 6.48943696,2.74280594 6.89442719,3.5527864 L9.61803399,9 L14.381966,9 Z M17.7667436,6.7025808 L15.8944272,10.4472136 C15.7250352,10.7859976 15.3787721,11 15,11 L9,11 C8.62122794,11 8.27496482,10.7859976 8.10557281,10.4472136 L6.23325641,6.7025808 L4.15466686,13.6312126 L12,19.7331384 L19.8453331,13.6312126 L17.7667436,6.7025808 Z" />
    </SvgIcon>
  )
}

const useStyles = makeStyles((theme) => {
  return {
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    }
  }
})

export default function HistoryRelease() {
  const classes = useStyles()

  return <Module title="历史版本">
    <div>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              2021/02/01
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography color="textSecondary" variant="h6" component="h1">
                <Link href="/download/thunisoft-vpn-v1.0.0.exe">Release-1.0.0</Link>
              </Typography>
              <Typography color="textSecondary">具备可发布/内测级别的版本</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography color="textSecondary" variant="h6" component="h1">
                Next release
              </Typography>
              <Typography color="textSecondary">敬请期待</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  </Module>
}