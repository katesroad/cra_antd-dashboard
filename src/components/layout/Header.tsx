import { Layout } from 'antd'
import styled from 'styled-components'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

export const Wrapper = styled(Layout.Header)`
  background: #fff;
  padding: 0 1rem;
  align-items: center;
  display: flex;
  justify-content: space-between;

  .menu-toggler {
    font-size: 1.5rem;
    cursor: pointer;
  }
`

type HeaderProps = {
  collapsed: boolean
  onCollapse: () => void
}

export const Header: React.FC<HeaderProps> = ({ collapsed, onCollapse }) => {
  return (
    <Wrapper>
      <span onClick={onCollapse} className="menu-toggler">
        {collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
      </span>
    </Wrapper>
  )
}
