/* eslint-disable react/prop-types */
import { Button, Card, Input } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { TrainData } from "../../utils/constants"
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const DashSidebar = (props) => {
    const [searchVal, setSearchVal] = useState("")
    let navigate = useNavigate();
    const handelSearch = async (e) => {
        e.preventDefault()
        navigate(`/${searchVal}`);
        setSearchVal("")
    }
    return (
        <div className="top">
            <div className="imgdiv div1">
                <Input className='searchInputDash' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} variant={'filled'} color={"#fff"}
                    placeholder='Search Train by ID' />
                <Button onClick={handelSearch} colorScheme='orange' variant='solid'>
                    <FiSearch size={24} />
                </Button>
            </div>
            <Card className='rightCard' variant='unstyled'>
                <Text fontWeight={700} className='montserrat' fontSize='lg' color={'orange.300'}>Train ID</Text>
                <Text fontWeight={600} fontSize={'xl'}>{props.id}</Text>
            </Card>
            <Card className='rightCard' variant="unstyled">
                <Text fontWeight={700} className='montserrat' fontSize='lg' size='md' color={'orange.300'}>Start Point</Text>
                <Text fontWeight={600} fontSize={'xl'}>{TrainData[props.index].startpoint}</Text>
            </Card>
            <Card className='rightCard' variant="unstyled">
                <Text fontWeight={700} className='montserrat' fontSize='lg' size='md' color={'orange.300'}>Destination</Text>
                <Text fontWeight={600} fontSize={'xl'}>{TrainData[props.index].endpoint}</Text>
            </Card>
            <Card className='rightCard' variant="unstyled">
                <Text fontWeight={700} className='montserrat' fontSize='lg' size='md' color={'orange.300'}>Driver Name</Text>
                <Text fontWeight={600} fontSize={'xl'}>{TrainData[props.index].driver}</Text>
            </Card>
            <Card className='rightCard' variant="unstyled">
                <Text fontWeight={700} className='montserrat' fontSize='lg' size='md' color={'orange.300'}>Driver ID</Text>
                <Text fontWeight={600} fontSize={'xl'}>{TrainData[props.index].driverId}</Text>
            </Card>
        </div>
    )
}

export default DashSidebar