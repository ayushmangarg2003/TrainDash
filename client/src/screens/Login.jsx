/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const backendLink = "https://train-dash-server.onrender.com"

const Login = () => {
  let navigate = useNavigate();
  const [show, setShow] = React.useState(false)
  const [uniqueID, setUniqueID] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null);

  const handleClick = () => setShow(!show)

  const handelLogin = async (e) => {
    e.preventDefault()
    const user = { uniqueID: uniqueID, password: password }
    await axios.post(`${backendLink}/api/auth/login`, user)
      .then((response) => {
        setUniqueID("");
        setPassword("");
        navigate("/home");
      }).catch((err) => {
        setError(err.response.data.error)
      })
  }

  return (
    <div className="login">
      <div className="left">
        <div className="top">
          {/* <h1>TEMP LOGO</h1> */}
        </div>
        <div className="middle">
          <h1>Welcome to Coal India Limited</h1>
        </div>
        <div className="bottom">
          <div className="form">
            <Input value={uniqueID}
              onChange={(e) => setUniqueID(e.target.value)} variant='outline' placeholder='Username: ayushman' />
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Password: ayushman'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width='4.5rem'>
                <Button className='show-button' h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button onClick={handelLogin} className='button'>Login</Button>
            <h1 className='error'>{error}</h1>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Login
