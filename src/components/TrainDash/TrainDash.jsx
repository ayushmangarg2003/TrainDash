import DashSidebar from "../DashSidebar/DashSidebar"
import DashContent from "../DashContent/DashContent"
import { useEffect, useState } from "react"
import { Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react"
import axios from "axios"

const TrainDash = (props) => {
  const [isError, setIsError] = useState(false)
  // PopUp ke liye true karna hai
  const [latestData, setLatestData] = useState([]);

  // const fetchData = async () => {
  //   const sheetId = '1K-H4GdwZ1T5D5o0rKRJa1LPiluS3J6m4l1MDBUMYFhY'
  //   const range = 'Sheet1!A1:D10'; // adjust as necessary
  //   const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?alt=json`;

  //   try {
  //     const response = await axios.get(sheetUrl);
  //     // Parse the response if necessary (depends on the format)
  //     const newData = response.data; // Adapt based on how you access the data

  //     // Assuming the data is in a suitable format, update latestData
  //     setLatestData(newData); // Adjust this logic as needed
  //     console.log(newData);

  //   } catch (error) {
  //     console.error('Error fetching data', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  //   const interval = setInterval(fetchData, 1000); // fetch every second

  //   return () => clearInterval(interval); // clean up on component unmount
  // }, []);

  const [errorArray, setErrorArray] = useState({
    isError: true,
    problem: "Overloading",
    driver: "Pranav",
    startPoint: "Bihar",
    endPoint: "Punjab",
    location: "UP",
    noOfWagon: "12",
    load: "90 Tn",
    capacity: "80 Tn",
    difference: "10 Tn"
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