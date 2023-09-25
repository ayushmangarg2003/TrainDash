import { useState } from 'react'
import { Button, Input } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import Animation from "../components/Animation/Animation"
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const Home = () => {
  const [searchVal, setSearchVal] = useState("")

  let navigate = useNavigate();
  // useEffect((e)=>{
  //   e.preventDefault()
  //   navigate(`/home/${searchVal}`);
  // },[])
  const handelSearch = async (e) => {
    e.preventDefault()
    navigate(`/home/${searchVal}`);
  }

  return (
    <div className="parent">
      <Animation />
      <div className="imgdiv div1">
        <Input className='searchInput' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} variant={'filled'} color={"#222"}
          placeholder='Search Train by ID' />
        <Button onClick={handelSearch} colorScheme='blue' variant='solid'>
          <FiSearch size={24} />
        </Button>
      </div>
    </div>
  )
}

export default Home
