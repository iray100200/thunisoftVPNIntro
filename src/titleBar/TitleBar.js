import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import PolicyIcon from '@material-ui/icons/Policy'
import WatchIcon from '@material-ui/icons/Watch'
import MemoryIcon from '@material-ui/icons/Memory'
import Container from '@material-ui/core/Container'

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
      color: theme.palette.grey[200]
    },
    titleContainer: {
      paddingLeft: 44,
      paddingRight: 44,
      display: 'flex'
    },
    leftTitle: {
      flexGrow: 1,
      overflow: 'hidden'
    },
    bg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    },
    logo: {
      position: 'relative',
      top: 0,
      height: 32,
      marginRight: 12
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 9,
      color: theme.palette.grey[200],
      fontSize: 30,
      padding: 40,
      paddingTop: 70
    },
    download: {
      padding: 20,
      textAlign: 'center'
    },
    secondary: {
      fontSize: 24,
      color: theme.palette.grey[300],
      marginTop: 32,
      marginBottom: 32
    },
    downloadBtn: {
      height: 68,
      color: theme.palette.grey[100],
      borderColor: theme.palette.primary.light,
      fontSize: 20
    },
    poweredBy: {
      fontSize: 14,
      color: theme.palette.secondary.light,
      marginTop: 20
    },
    nextContent: {
      backgroundColor: '#fff',
      position: 'relative',
      color: theme.palette.text.secondary
    },
    nextContentContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    nextContentItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '33.33333%',
      color: theme.palette.grey[700],
      fontWeight: 300,
      padding: '0 28px',
      height: 200,
      paddingBottom: 12,
      '&:nth-child(2)': {
        background: `linear-gradient(
          45deg, 
          #eee 0, #eee 25%, transparent 25%, transparent 50%, 
          #eee 50%, #eee 75%, transparent 75%, transparent
        )`,
        backgroundSize: '10px 10px',
      }
    },
    nextContentItemHead: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 200,
      paddingRight: 40
    },
    nextContentItemDesc: {
      fontWeight: 200,
      height: 72
    }
  }
})

export default function TitleNar () {
  const classes = useStyles()
  return <div>
    <div className={classes.title}>
      <Container className={classes.titleContainer}>
        <label className={classes.leftTitle}>华宇畅联&nbsp;&nbsp;VPN</label>
        <div>
          <Button donwload="华宇畅联.exe" href="/download/thunisoft-vpn-v1.0.0.exe">下载</Button>
          <Button>寻找支持</Button>
          <Button>反馈</Button>
          <Button>历史版本</Button>
        </div>
      </Container>
    </div>
    <img className={classes.bg} width="100%" src="/bg.jpg"></img>
    <div className={classes.content}>
      <div className={classes.download}>
        <div>轻松远程，一键连接</div>
        <div className={classes.secondary}>安全、便捷、跨平台</div>
        <Button href="/download/thunisoft-vpn-v1.0.0.exe" donwload="华宇畅联.exe" className={classes.downloadBtn} variant="outlined" color="primary" disableElevation fullWidth type="secondary" size="large">
          <img className={classes.logo} src="/logo.png"></img>
          一键下载，即刻使用
        </Button>
        <div className={classes.poweredBy}>Powered by thunisoft.</div>
      </div>
    </div>
    <div className={classes.nextContent}>
      <Container className={classes.nextContentContainer}>
        <div className={classes.nextContentItem}>
          <h1 className={classes.nextContentItemHead} style={{ marginTop: 12 }}>
            <PolicyIcon fontSize="large" />&nbsp;
            <span>安全</span>
          </h1>
          <h3 className={classes.nextContentItemDesc} style={{ marginTop: 12 }}>
            它在用户空间运行，无须对内核及网络协议栈作修改；支持身份验证，并提供合适的数据加密支持。
          </h3>
        </div>
        <div className={classes.nextContentItem}>
          <h1 className={classes.nextContentItemHead} style={{ marginTop: 12 }}>
            <WatchIcon fontSize="large" />&nbsp;
            <span>便捷</span>
          </h1>
          <h3 className={classes.nextContentItemDesc} style={{ marginTop: 12 }}>
            现代化页面配置，操作简单，无需学习即可上手；一键连接、一键断开让你告别繁琐的配置。
          </h3>
        </div>
        <div className={classes.nextContentItem}>
          <h1 className={classes.nextContentItemHead} style={{ marginTop: 12 }}>
            <MemoryIcon fontSize="large" />&nbsp;
            <span>跨平台</span>
          </h1>
          <h3 className={classes.nextContentItemDesc} style={{ marginTop: 12 }}>
            基于Electron，无需繁琐操作即可在短期未来发布支持MacOS、Linux等操作系统的应用包。
          </h3>
        </div>
      </Container>
    </div>
  </div>
}