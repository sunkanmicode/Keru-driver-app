import { View, Text } from 'react-native'
import React from 'react'
import VehiclesComp from '../../../components/mainComp/VehiclesComp'

interface vehicleCategoriesType{
  name: string
  onPress:()=>void;
}[]

const VehiclesScreen = () => {
  const [categoriesIndex, setCategoriesIndex] = React.useState(0);


  const vehicleCategories: vehicleCategoriesType[] = [
    {
      name: "Available Vehicles",
      onPress: () => {},
    },
    {
      name: "Pending",
      onPress: () => {},
    },
    {
      name: "Approved",
      onPress: () => {},
    },
    {
      name: "Allocated",
      onPress: () => {},
    },
  ];

  const VehiclesData = [
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../assets/images/car1.png"),

      features: [
        {
          title: " 6 seats",
        },
        {
          title: " Sienna",
        },
        {
          title: " ford",
        },
      ],
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../assets/images/car1.png"),

      features: [
        {
          title: " 4 seats",
        },
        {
          title: " Sienna",
        },
        {
          title: " ford",
        },
      ],
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../assets/images/car1.png"),

      features: [
        {
          title: "  8 seats",
        },
        {
          title: " Sienna",
        },
        {
          title: " ford",
        },
      ],
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../assets/images/car1.png"),

      features: [
        {
          title: " 6 seats",
        },
        {
          title: " Sienna",
        },
        {
          title: " ford",
        },
      ],
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../assets/images/car1.png"),

      features: [
        {
          title: " 6 seats",
        },
        {
          title: " Sienna",
        },
        {
          title: " ford",
        },
      ],
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../assets/images/car1.png"),

      features: [
        {
          title: " 6 seats",
        },
        {
          title: " Sienna",
        },
        {
          title: " ford",
        },
      ],
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../assets/images/car1.png"),

      features: [
        {
          title: " 6 seats",
        },
        {
          title: " Sienna",
        },
        {
          title: " ford",
        },
      ],
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../assets/images/car1.png"),

      features: [
        {
          title: " 6 seats",
        },
        {
          title: " Sienna",
        },
        {
          title: " ford",
        },
      ],
    },
  ];
  return (
    <VehiclesComp
      VehiclesData={VehiclesData}
      vehicleCategories={vehicleCategories}
      categoriesIndex={categoriesIndex} 
      setCategoriesIndex={setCategoriesIndex}
    />
  );
}

export default VehiclesScreen