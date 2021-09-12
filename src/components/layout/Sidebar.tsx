import { Link } from 'react-router-dom'
import OutsideClickHandler from 'react-outside-click-handler'
import React from 'react'
import styled from 'styled-components'
import useMedia from 'use-media'
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'

const { SubMenu } = Menu

const Wrapper = styled(Layout.Sider)`
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
`

type SideBarProps = {
  collapsed: boolean
  onCollapse: (collapsed: boolean) => void
}

export const Sidebar: React.FC<SideBarProps> = ({ collapsed, onCollapse }) => {
  const isMdSize = useMedia({
    'min-width': '768px',
  })
  const handleOutsideClick = () => {
    if (!isMdSize) {
      onCollapse(false)
    }
  }

  const collapsedWidth = isMdSize ? 80 : 0

  return (
    <Wrapper
      className="app-sidebar"
      collapsed={collapsed}
      onCollapse={onCollapse}
      collapsedWidth={collapsedWidth}
      breakpoint="sm"
      trigger={null}
    >
      <OutsideClickHandler onOutsideClick={handleOutsideClick}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/order/analytics"> Analytics </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/oredr/inventory">Inventory</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Team">
            <Menu.Item key="3">
              <Link to="/team/engeering">Engeering</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/team/sales">Sales</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/team/cs">Customer Success</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </OutsideClickHandler>
    </Wrapper>
  )
}
