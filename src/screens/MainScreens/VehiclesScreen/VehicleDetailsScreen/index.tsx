import { View, Text } from 'react-native'
import React from 'react'
import VehicleDetailsComp from '../../../../components/mainComp/VehiclesComp/VehicleDetailsComp'

const VehicleDetailsScreen = () => {

  const driveRequestSheetRef = React.useRef(null);
  const height = 775;

  const closedriveRequestSSheet = () => {
    if (driveRequestSheetRef.current) {
      driveRequestSheetRef.current.close();
    }
  };
  const opendriveRequestSSheet = () => {
    if (driveRequestSheetRef.current) {
      driveRequestSheetRef.current.open();
    }
  };
  const detailsData = [
    {
      name: "Seat Size",
      Desc: "6 Seat",
    },
    {
      name: "Seat Size",
      Desc: "6 Seat",
    },
    {
      name: "Asset Code",
      Desc: "KR-LLZKNE",
    },
    {
      name: "Asset Class (Seat)",
      Desc: "Sennia",
    },
    {
      name: "Condition",
      Desc: "Fit",
    },
    {
      name: "Drivers",
      Desc: "2",
    },
    {
      name: "Asset Maker",
      Desc: "Ford",
    },
  ];
  return (
    <VehicleDetailsComp
      detailsData={detailsData}
      driveRequestSheetRef={driveRequestSheetRef}
      height={height}
      opendriveRequestSSheet={opendriveRequestSSheet}
    />
  );
}

export default VehicleDetailsScreen