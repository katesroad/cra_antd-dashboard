import { Layout } from 'antd'
import { VscLoading } from 'react-icons/vsc'
import { Header } from 'components/layout/Header'
import React, { Suspense } from 'react'
import { Sidebar } from 'components/layout/Sidebar'
import { DocTitle } from 'components/shared/DocTitle'

const { Content } = Layout

const AppLayout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(true)

  const handleCollapse = () => {
    setCollapsed((c) => !c)
  }

  /* DocTitle: To be decided by route path and menu name*/
  return (
    <>
      <DocTitle title={'Dashboard'} />
      <Layout style={{ height: '100vh' }}>
        <Sidebar collapsed={collapsed} onCollapse={handleCollapse} />
        <Layout>
          <Header collapsed={collapsed} onCollapse={handleCollapse} />
          <Content style={{ margin: '1rem' }}>
            <Suspense fallback={<VscLoading />}>{children}</Suspense>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default AppLayout
