/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, TabList, TabPanel, TabPanels, Tabs, useMultiStyleConfig, useTab } from "@chakra-ui/react";
import { TrainData } from "../../utils/constants";
import WagonDetail from "../WagonDetail/WagonDetail";
import wagon from '../../assets/wagon.webp'
import selectedWagon from '../../assets/selectedWagon.webp'

const DashContent = (props) => {
  const CustomTab = React.forwardRef((props, ref) => {
    const tabProps = useTab({ ...props, ref })
    const isSelected = !!tabProps['aria-selected']

    const styles = useMultiStyleConfig('Tabs', tabProps)

    return (
      <Button backgroundImage={isSelected ? wagon : selectedWagon} __css={styles.tab} {...tabProps}>
        {tabProps.children}
      </Button>
    )
  })


  return (
    <Tabs
      className="tabsparent"
      size="lg"
      position="relative"
      variant="unstyled"
    >
      <TabList gap={"300px"} className="tablist">
        <h1>Wagons</h1>
        <div className="tabs">
          {TrainData[props.index].WagonArr.map((item, index) => (
            <div className="wagonShape" key={index}>
              <CustomTab
                width={"6.75rem"}
                height={'4rem'}
                id="train"
                borderRadius={'16px'}
                className="wagonChildTab"
                backgroundPosition='center'
                backgroundRepeat={'no-repeat'}
                backgroundSize='contain'
                color={'whiteAlpha.900'}
                fontSize={'lg'}
                fontWeight={600}
                _selected={{ fontSize: '2xl', color: "black", fontWeight: 900 }}
                key={index}
              >
                {index + 1} <br />
              </CustomTab>
              {item.load} Tn
            </div>
          ))}
        </div>
      </TabList>
      <TabPanels className="tabpanels">
        {TrainData[props.index].WagonArr.map((item, index) => (
          <TabPanel className="tabPanel" key={index} fontWeight={'semibold'} color={"blackAlpha.900"}>
            <WagonDetail item={item} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default DashContent;
