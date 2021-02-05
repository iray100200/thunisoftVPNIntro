import React from 'react'
import Button from '@material-ui/core/Button'
import PolicyIcon from '@material-ui/icons/Policy'
import WatchIcon from '@material-ui/icons/Watch'
import MemoryIcon from '@material-ui/icons/Memory'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'

function GitLabIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fillRule="evenodd" d="M14.381966,9 L17.1055728,3.5527864 C17.510563,2.74280594 18.6976082,2.84525834 18.9578263,3.71265211 L21.9578263,13.7126521 C22.0764694,14.1081293 21.9398565,14.5358621 21.6139406,14.7893522 L12.6139406,21.7893522 C12.2528301,22.0702159 11.7471699,22.0702159 11.3860594,21.7893522 L2.38605939,14.7893522 C2.06014352,14.5358621 1.92353056,14.1081293 2.04217371,13.7126521 L5.04217371,3.71265211 C5.30239185,2.84525834 6.48943696,2.74280594 6.89442719,3.5527864 L9.61803399,9 L14.381966,9 Z M17.7667436,6.7025808 L15.8944272,10.4472136 C15.7250352,10.7859976 15.3787721,11 15,11 L9,11 C8.62122794,11 8.27496482,10.7859976 8.10557281,10.4472136 L6.23325641,6.7025808 L4.15466686,13.6312126 L12,19.7331384 L19.8453331,13.6312126 L17.7667436,6.7025808 Z"/>
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
    },
    captureContent: {
      backgroundColor: theme.palette.grey[800],
      height: 600,
      display: 'flex',
      justifyContent: 'center'
    },
    captureContainer: {
      position: 'relative'
    },
    captureBody: {
      position: 'absolute',
      right: 50,
      top: 40
    },
    capture1: {
      boxShadow: '0 0 12px #000',
      position: 'absolute',
      right: 0,
      top: 30
    },
    capture2: {
      boxShadow: '0 0 12px #000',
      position: 'absolute',
      right: 10,
      top: 20
    },
    capture3: {
      boxShadow: '0 0 12px #000',
      position: 'absolute',
      right: 20,
      top: 10
    },
    capture4: {
      boxShadow: '0 0 12px #000',
      position: 'absolute',
      right: 30,
      top: 0
    },
    captureDesc: {
      position: 'absolute',
      left: 50,
      right: 400,
      top: 40,
      transition: '0.3s transform'
    },
    captureDescTitle: {
      fontSize: 24
    },
    captureDescSubTitle: {
      fontSize: 16,
      marginTop: 20,
      color: theme.palette.grey[300]
    },
    section: {
      fontWeight: 300,
      color: theme.palette.grey[300],
      lineHeight: 1.5,
      marginTop: 30
    },
    contribute: {
      background: '#fff',
      color: '#333',
      padding: 30,
      fontSize: 18
    },
    footer: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: '300',
      lineHeight: '64px',
      background: 'transparent',
      '-webkitBackgroundClip': 'text',
      backgroundImage: 'linear-gradient(#999, #000)'
    },
    img: {
      margin: 4
    },
    h1: {
      fontWeight: 200,
      textAlign: 'center',
      marginBottom: 20
    }
  }
})

export default function TitleNar() {
  const classes = useStyles()
  const bg = React.useRef(null)

  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      if (bg) {
        bg.current.style.transform = `translate(0, -${Math.min(document.documentElement.scrollTop / 2.5, 190)}px)`
      }
    })
  }, [])

  return <div>
    <div className={classes.title}>
      <Container className={classes.titleContainer}>
        <label className={classes.leftTitle}>华宇畅联&nbsp;&nbsp;VPN</label>
        <div>
          <Button donwload="华宇畅联.exe" href="/download/thunisoft-vpn-v1.0.0.exe">下载</Button>
          <Button href="/support">寻找支持</Button>
          <Button href="/feedback">反馈</Button>
          <Button href="/history/release">历史版本</Button>
          <Button target="_blank" href="http://git.thunisoft.com/zhangzhenqing/thunisoftvpn">
            <GitLabIcon color="inherit" />
          </Button>
        </div>
      </Container>
    </div>
    <img className={classes.bg} alt="" ref={bg} width="100%" src="/bg.jpg"></img>
    <div className={classes.content}>
      <div className={classes.download}>
        <div>轻松远程，一键连接</div>
        <div className={classes.secondary}>安全、便捷、跨平台</div>
        <Button href="/download/thunisoft-vpn-v1.0.0.exe" donwload="华宇畅联.exe" className={classes.downloadBtn} variant="outlined" color="primary" disableElevation fullWidth type="secondary" size="large">
          <img className={classes.logo} alt="" src="/logo.png"></img>
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
    <div className={classes.captureContent}>
      <Container className={classes.captureContainer}>
        <div className={classes.captureDesc}>
          <div className={classes.captureDescTitle}>
            应用特性
          </div>
          <div className={classes.captureDescSubTitle}>
            等待连接 - 登录 - 连接中 - 已连接

            <div className={classes.section}>
              <p>一、连接中将以不同的颜色区分当前状态。</p>
              <p>二、通过账号与密码组合方式登录，并分配你的独立IP。</p>
              <p>三、连接失败时可以通过日志检查错误信息，并寻求帮助。</p>
              <p>四、通过通知栏可以轻便管理你的连接。</p>
            </div>
          </div>
        </div>
        <div className={classes.captureBody}>
          <img className={classes.capture4} src="/capture4.png" alt="" height="500"></img>
          <img className={classes.capture3} src="/capture3.png" alt="" height="500"></img>
          <img className={classes.capture2} src="/capture2.png" alt="" height="500"></img>
          <img className={classes.capture1} src="/capture1.png" alt="" height="500"></img>
        </div>
      </Container>
    </div>
    <div className={classes.contribute}>
      <Container>
        <h1 className={classes.h1}>实例展示</h1>
        <img className={classes.img} height={500} src="/capture1.png" alt="" />
        <img className={classes.img} height={500} src="/capture2.png" alt="" />
        <img className={classes.img} height={500} src="/capture3.png" alt="" />
        <img className={classes.img} height={500} src="/capture4.png" alt="" />
      </Container>
    </div>
    <div className={classes.footer}>
      <svg width="600" height="80">
        <defs>
          <linearGradient id="copyright">
            <stop offset="5%"  stop-color="gold" />
            <stop offset="95%" stop-color="red" />
          </linearGradient>
        </defs>
        <text x="50%" y="50%" fill="url(#copyright)">©2001-2014 Thunisoft 华宇（大连）信息服务有限公司 版权所有 华宇（大连）</text>
      </svg>
    </div>
  </div>
}