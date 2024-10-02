import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Invalid from '../components/Invalid/Invalid';
import TrainDash from '../components/TrainDash/TrainDash';
import { TrainData } from '../utils/constants';

const TrainDashboard = () => {
  const params = useParams();


  const train_id = params.TrainID
  const [valueInfo, setValueInfo] = useState({
    isValueFound: false,
    foundIndex: -1,
  });

  const inputValue = params.TrainID;

  useEffect(() => {
    for (let i = 0; i < TrainData.length; i++) {
      if (TrainData[i].id === inputValue) {
        setValueInfo({
          isValueFound: true,
          foundIndex: i,
        });
        break;
      }
    }
  }, [inputValue]);

  return (
    <>
      {
        valueInfo.isValueFound ? (
          <TrainDash id={train_id} index={valueInfo.foundIndex} />
        ) : (
          <Invalid />
        )
      }
    </>
  )
}

export default TrainDashboard