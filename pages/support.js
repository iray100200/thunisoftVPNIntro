import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Module from '../src/Module'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => {
  return {
    content: {
      color: '#333'
    },
    nextContent: {
      color: '#333',
      paddingTop: 40
    },
    left: {
      paddingRight: 40,
      flexShrink: 0,
      borderRight: '1px solid #eee'
    },
    right: {
      flexGrow: 1,
      overflow: 'hidden',
      fontWeiht: 300,
      padding: '4px 40px',
      fontSize: '1.2em'
    }
  }
})

export default function TitleNar() {
  const classes = useStyles()

  return <Module title="寻找支持">
    <Box display="flex">
      <div className={classes.left}>
        <div className={classes.content}>
          <Typography variant="h6">
            当前版本已支持的功能
          </Typography>
          <br />
          <Typography variant="body1">
            &nbsp;实现了基于TCP的网络连接
          </Typography>
          <br />
          <Typography variant="body1">
            &nbsp;可通过VPN访问内网网络
          </Typography>
          <br />
          <Typography variant="body1">
            &nbsp;支持点到点的网络访问
          </Typography>
          <br />
          <Typography variant="body1">
            &nbsp;基于用户名/密码的方式登录VPN
          </Typography>
        </div>
        <div className={classes.nextContent}>
          <Typography variant="h6">
            当前版本未实现的功能
          </Typography>
          <br />
          <Typography variant="body1">
            &nbsp;无法支持内网用户访问VPN用户
          </Typography>
          <br />
          <Typography variant="body1">
            &nbsp;无法通过应用手动修改VPN配置参数
          </Typography>
          <br />
          <Typography variant="body1">
            &nbsp;暂不支持UDP通信模式
          </Typography>
          <br />
          <Typography variant="body1">
            &nbsp;无法通过应用重置用户名和密码
          </Typography>
        </div>
      </div>
      <div className={classes.right}>
        <Link target="_blank" href="http://git.thunisoft.com/zhangzhenqing/thunisoftvpn" color="primary">立即加入开发人员行列</Link>
        <br />
        <br />
        <Link target="_blank" href="http://git.thunisoft.com/zhangzhenqing/thunisoftvpnintro">或者对当前网站感兴趣，可以点击加入</Link>
        <br />
        <br />
        <Link target="_blank" href="https://www.electronjs.org/">点击寻找Electron相关的内容</Link>
        <br />
        <br />
        <Link target="_blank" href="https://github.com/OpenVPN/openvpn">点击寻找OpenVPN相关的内容</Link>
        <br />
        <br />
        <Link target="_blank" href="https://github.com/OpenVPN/tap-windows6">点击查看Windows虚拟网卡相关内容</Link>
        <br />
        <br />
        <Link target="_blank" href="https://github.com/OpenVPN/openvpn-gui">OpenVPN GUI可以实现类似功能，但是可能需要你的额外配置</Link>
      </div>
    </Box>
  </Module>
}