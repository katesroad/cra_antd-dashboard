import React from 'react'
import { Route } from 'react-router'

const HomeScreen = React.lazy(() => import('screens/home.screen'))
const LoginScreen = React.lazy(() => import('screens/login.screen'))

const App: React.FC = () => {
  return (
    <>
      <Route path="/" component={HomeScreen} />
      <Route path="/login" component={LoginScreen} />
    </>
  )
}

export default App
