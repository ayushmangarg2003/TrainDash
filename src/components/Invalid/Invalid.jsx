import React from 'react'
import { Heading } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import pagenotfound from '../../assets/pagenotfound.webp'

const Invalid = () => {

    let navigate = useNavigate();
    const handelBackBtn= async (e) => {
        e.preventDefault()
        navigate(`/`);
    }
    return (
        <div className='cardParent'>
            <div className='invalidCard'>
                <Heading size='lg'>Invalid Train ID</Heading>
                <img src={pagenotfound} alt="" />
                <button onClick={handelBackBtn}>Go Back</button>
            </div>
        </div>
    )
}

export default Invalid