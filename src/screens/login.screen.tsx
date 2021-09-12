import { DocTitle } from 'components/shared/DocTitle'
import React from 'react'

const LoginScreen: React.FC = () => {
  return (
    <div>
      <DocTitle title="Login" />
      <h2>Login</h2>
      <p>
        <label htmlFor="username">User Name:</label>
        <input type="text" name="username" />
      </p>
      <p>
        <label htmlFor="password">password</label>
        <input type="password" />
      </p>
    </div>
  )
}

export default LoginScreen
