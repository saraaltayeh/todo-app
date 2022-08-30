import React from 'react'
import { Button } from '@blueprintjs/core';
function LoginTest() {
  return (
    <>
    <form onSubmit >
    <Input
      placeholder="UserName"
      name="username"
    />

    <Input
      placeholder="password"
      name="password"
    />
    <Button>Login</Button>

    <Button >Logout</Button>
</form>
    </>
)
}

export default LoginTest