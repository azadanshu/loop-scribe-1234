import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

export const SignIn = () => {
    const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
      <div className="SignLog">
        <div className="SL-left"></div>
        <div className="SL-right">
          <div className="SL-signIn">
            <h1>Sign Up</h1>
            <h3>Your parents or guardian's email</h3>
            <p>We’re excited to get you started, but we need to notify your parent or guardian about your account.</p>
            <InputGroup>
    <InputLeftElement pointerEvents='none'>
     
    </InputLeftElement>
    <Input type='email' placeholder='Email' />
  </InputGroup>
<h3>Choose a username</h3>
<p>Use letters and numbers only. For safety, don't use your real name</p>
<InputGroup>
    <InputLeftElement pointerEvents='none'>
     
    </InputLeftElement>
    <Input type='test' placeholder='Username' />
  </InputGroup>
  <h3>Create a password</h3>
  <p>Passwords should be at least 8 characters long and should contain a mixture of letters, numbers, and other characters.</p>
  <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
          </div>
        </div>
      </div>
    </>
  );
};
