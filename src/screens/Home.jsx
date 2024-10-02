import { useState } from 'react'
import { Button, Input } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchVal, setSearchVal] = useState("")

  let navigate = useNavigate();
  const handelSearch = async (e) => {
    e.preventDefault()
    navigate(`/${searchVal}`);
  }

  return (
    <div className="parent">
      <div className="div1">
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
