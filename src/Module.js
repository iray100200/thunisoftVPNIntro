import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import packageJson from '../package.json'

function GitLabIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fillRule="evenodd" d="M14.381966,9 L17.1055728,3.5527864 C17.510563,2.74280594 18.6976082,2.84525834 18.9578263,3.71265211 L21.9578263,13.7126521 C22.0764694,14.1081293 21.9398565,14.5358621 21.6139406,14.7893522 L12.6139406,21.7893522 C12.2528301,22.0702159 11.7471699,22.0702159 11.3860594,21.7893522 L2.38605939,14.7893522 C2.06014352,14.5358621 1.92353056,14.1081293 2.04217371,13.7126521 L5.04217371,3.71265211 C5.30239185,2.84525834 6.48943696,2.74280594 6.89442719,3.5527864 L9.61803399,9 L14.381966,9 Z M17.7667436,6.7025808 L15.8944272,10.4472136 C15.7250352,10.7859976 15.3787721,11 15,11 L9,11 C8.62122794,11 8.27496482,10.7859976 8.10557281,10.4472136 L6.23325641,6.7025808 L4.15466686,13.6312126 L12,19.7331384 L19.8453331,13.6312126 L17.7667436,6.7025808 Z" />
    </SvgIcon>
  )
}

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
    section: {
      padding: 44,
      minHeight: 'calc(100vh - 211px)',
      color: '#333'
    },
    pageTitle: {
      color: '#333',
      padding: '44px 44px 0'
    }
  }
})

export default function Module(props) {
  const classes = useStyles()

  return <div>
    <div className={classes.title}>
      <Container className={classes.titleContainer}>
        <Link underline="none" className={classes.leftTitle} href="/" color="inherit">华宇畅联&nbsp;&nbsp;VPN</Link>
        <div>
          <Button href="/">首页</Button>
          <Button donwload="华宇畅联.exe" href={`/download/thunisoft-vpn-v${packageJson.version}.exe`}>下载</Button>
          <Button href="/support">寻找支持</Button>
          <Button href="/feedback">反馈</Button>
          <Button href="/history/release">历史版本</Button>
          <Button target="_blank" href="http://git.thunisoft.com/zhangzhenqing/thunisoftvpn">
            <GitLabIcon color="inherit" />
          </Button>
        </div>
      </Container>
    </div>
    <Container className={classes.pageTitle}>
      <Typography variant="h5">{props.title}</Typography>
    </Container>
    <Container className={classes.section}>
      {props.children}
    </Container>
    <div className={classes.footer}>
      ©2001-2014 Thunisoft 华宇（大连）信息服务有限公司 版权所有 华宇（大连）
    </div>
  </div>
}