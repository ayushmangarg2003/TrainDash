import DashSidebar from "../DashSidebar/DashSidebar"
import DashContent from "../DashContent/DashContent"
import { useState } from "react"
import { Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react"

const TrainDash = (props) => {
  const [isError, setIsError] = useState(false)
  // PopUp ke liye true karna hai
  const [errorArray , setErrorArray] = useState({
    isError:true,
    problem:"Overloading",
    driver: "Pranav",
    startPoint:"Bihar",
    endPoint:"Punjab",
    location:"UP",
    noOfWagon:"12",
    load:"90 Tn",
    capacity:"80 Tn",
    difference:"10 Tn"
  })

  const problem = errorArray.problem
  const handleClosePopUp = () => {
    setIsError(!isError)
  }
  return (
    <div className='dashboard' >
      <div className="left">
        <DashContent id={props.id} index={props.index} />
      </div>
      {
        isError ?
          <div className="popupParent">
            <div className="errorPopUp">
              <div className="topHeading">
                <div></div>
                <p className="montserrat">{problem} Reported</p>
                <div className="montserrat" style={{ cursor: 'pointer' }} onClick={handleClosePopUp}>🗙</div>
              </div>
              <div className="bottomTable">
                <TableContainer>
                  <Table className="popupTable" variant='' colorScheme='red'>
                    <Tbody className="popupTableBody">
                      <Tr className="popupTableRow">
                        <Td className="errorTitle">Driver ID</Td>
                        <Td className="errorValue">{errorArray.driver}</Td>
                      </Tr>
                      <Tr className="popupTableRow">
                        <Td className="errorTitle">Location</Td>
                        <Td className="errorValue">{errorArray.location}</Td>
                      </Tr>
                      <Tr className="popupTableRow">
                        <Td className="errorTitle">Start Point</Td>
                        <Td className="errorValue">{errorArray.startPoint}</Td>
                      </Tr>
                      <Tr className="popupTableRow">
                        <Td className="errorTitle">Destination</Td>
                        <Td className="errorValue">{errorArray.endPoint}</Td>
                      </Tr>
                      <Tr className="popupTableRow">
                        <Td className="errorTitle">Capacity</Td>
                        <Td className="errorValue">{errorArray.capacity}</Td>
                      </Tr>
                      <Tr className="popupTableRow">
                        <Td className="errorTitle">Load</Td>
                        <Td className="errorValue">{errorArray.load}</Td>
                      </Tr>
                      <Tr className="popupTableRow">
                        <Td className="errorTitle">Difference</Td>
                        <Td className="errorValue">{errorArray.difference}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
          : <div></div>
      }
      <div className="right">
        <DashSidebar id={props.id} index={props.index} />
      </div>
    </div>
  )
}

export default TrainDash