/* eslint-disable react/prop-types */
import { Card, Stat, StatLabel, StatNumber, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

const WagonDetail = (props) => {
  return (
    <div className='wagondetail'>
      <div className="top">
        <Card minWidth={'44'} maxHeight={'44'} backgroundColor={'white'} className='wagoncard'>
          <Stat height={'1'} className='statCard'>
            <StatLabel className='montserrat' fontWeight={'bold'} fontSize={'xl'}>Wagon ID</StatLabel>
            <StatNumber fontSize={'3xl'} color={'orange.400'} fontWeight={700}>{props.item.id}</StatNumber>
          </Stat>
        </Card>
        <Card minWidth={'44'} maxHeight={'44'} backgroundColor={'white'} className='wagoncard'>
          <Stat>
            <StatLabel className='montserrat' fontWeight={'bold'} fontSize={'xl'}>Current Load</StatLabel>
            <StatNumber fontSize={'3xl'} fontWeight={700}>{props.item.load}</StatNumber>
          </Stat>
        </Card>
        <Card minWidth={'44'} maxHeight={'44'} backgroundColor={'white'} className='wagoncard'>
          <Stat>
            <StatLabel className='montserrat' fontWeight={'bold'} fontSize={'xl'}>Max Capacity</StatLabel>
            <StatNumber color={'black'} fontSize={'3xl'} fontWeight={700}>{props.item.capacity}</StatNumber>
          </Stat>
        </Card>
      </div>
      <div className="bottom">
        <TableContainer className='table'>
          <Table className='tableChild' variant='striped' colorScheme='orange'>
            <Thead>
              <Tr>
                <Th color={'orange.400'} className='montserrat' fontSize={'lg'}>Property</Th>
                <Th color={'orange.400'} className='montserrat' fontSize={'lg'}>Units</Th>
                <Th isNumeric className='montserrat' color={'orange.400'} fontSize={'lg'}>Values</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Weight</Td>
                <Td>Tons</Td>
                <Td isNumeric>{props.item.load}</Td>
              </Tr>
              <Tr>
                <Td>Capacity</Td>
                <Td>Tons</Td>
                <Td isNumeric>{props.item.capacity}</Td>
              </Tr>
              <Tr>
                <Td>Height</Td>
                <Td>m</Td>
                <Td isNumeric>{props.item.height}</Td>
              </Tr>
            </Tbody>
          </Table>
            <p className='tablebottom montserrat' color={'blackAlpha.800'} >Details for Wagon No: {props.item.id}</p>
        </TableContainer>
      </div>
    </div>
  )
}

export default WagonDetail