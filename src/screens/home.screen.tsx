import React from 'react'
import AuthLayout from 'components/layout'

const AdminPanel = React.lazy(() => import('components/home.screen/AdminPanel'))

const HomeScreen: React.FC = () => {
  return (
    <>
      <AuthLayout>
        <AdminPanel />
      </AuthLayout>
    </>
  )
}

export default HomeScreen
