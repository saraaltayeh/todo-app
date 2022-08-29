import React from 'react'
import { ControlGroup,Label, Button,InputGroup } from '@blueprintjs/core';
function LoginTest() {
  return (
    <>
    <form onSubmit >
    <InputGroup
      placeholder="UserName"
      name="username"
    />

    <InputGroup
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