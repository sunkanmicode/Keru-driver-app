import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StoreCategoriesType } from "../../../screens/MainScreens/StoreScreen";
import StoreCat from "./StoreCategories/StoreCat";
import MyOrderCat from "./StoreCategories/MyOrderCat";
import CustomBottomSheet from "../../customsComp/BottomSheet";
import HireBreakDownSheet from "../VehiclesComp/HireBreakDown";

const StoreComp = ({
  storeData,
  storeCategories,
  categoriesIndex,
  setCategoriesIndex,
}) => {
  const navigation = useNavigation();
  const [endedTrips, setEndedTrips] = React.useState(false)

  const TripsSheetRef = React.useRef(null);
  const height = 775;

  const closeTripsSSheet = () => {
    if (TripsSheetRef.current) {
      TripsSheetRef.current.close();
    }
  };
  const openTripsSSheet = () => {
    if (TripsSheetRef.current) {
      TripsSheetRef.current.open();
    }
  };


  const pickUpAndDestination = [
    {
      icon: <Octicons name="dot-fill" size={12} color="#009B5A" />,
      venue: "Festac Access Rd Lagos, LA, Nigeria",
      time: "Tue, Mar 28 2023 | 11:01:00",
    },
    {
      icon: <Octicons name="dot-fill" size={12} color="red" />,
      venue: "Festac Access Rd Lagos, LA, Nigeria",
      time: "Tue, Mar 28 2023 | 11:01:00",
    },
  ];

   const tripInformation = [
     {
       icon: <Octicons name="dot-fill" size={12} color="#009B5A" />,
       venue: "Asset Assigned",
       time: "Tue, Mar 28 2023 | 11:01:00",
     },
     {
       icon: <Octicons name="dot-fill" size={12} color="red" />,
       venue: "Asset On route to Pick up",
       time: "Tue, Mar 28 2023 | 11:01:00",
     },
     {
       icon: <Octicons name="dot-fill" size={12} color="red" />,
       venue: "Goods Pick up",
       time: "Tue, Mar 28 2023 | 11:01:00",
     },
   ];
   

  return (
    <>
      <View className=" flex-1 py-10 px-6 bg-white">
        <View className="flex-row items-center pt-2 justify-between">
          <Text className="text-[28px] text-[#000]  font-[600] font-[Archivo] leading-[30.46px]">
            Trips
          </Text>
          <TouchableOpacity>
            {/* <Ionicons name="md-cart-outline" size={24} color="black" /> */}
          </TouchableOpacity>
        </View>
        <View className="w-[335px] h-[212px] mt-5 border-0.5 border-[#CCCBCB] rounded-lg p-[24px] ">
          <TouchableOpacity
            className="w-[286px] h-[45px]  mx-auto  rounded-lg flex-row justify-between"
            onPress={() => {
              openTripsSSheet();
            }}
          >
            <View className=" flex-row ">
              <View className="w-[85] h-[46]">
                <Image
                  source={require("../../../../assets/images/car1.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    // borderRadius: 100,
                  }}
                />
              </View>
              <View>
                <Text className="text-[12px]  font-[500] font-[Archivo] leading-[13px] my-2">
                  Toyota RAV - Yamaha
                </Text>
                <View className="h-[15px] w-[80px] bg-[#F2EFFE] items-center justify-center rounded-full ">
                  <Text className="  text-[10px]  text-[#7065A0] font-[500] font-[Archivo] leading-[10px]">
                    KR-SRUDBA
                  </Text>
                </View>
              </View>
            </View>
            {endedTrips ? (
              <View className=" w-[57px] h-[21px] bg-[#FFE7D2] items-center justify-center rounded-full">
                <Text className="text-[10px]  font-[500] font-[Archivo] leading-[10px] ">
                  Ended
                </Text>
              </View>
            ) : (
              <View className=" w-[57px] h-[21px] bg-[#DAF4FF] items-center justify-center rounded-full">
                <Text className="text-[10px]  font-[500] font-[Archivo] leading-[10px] text-[#007FFF]">
                  Active
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <View className="h-0.5 bg-[#F1F0F0] mt-3" />
          <View className="w-[190px] mt-5">
            {pickUpAndDestination.map((item, index) => (
              <>
                <View key={index} className=" flex-row relative mb-6">
                  {item.icon}
                  <View className=" ml-1">
                    <Text className="font-[400] text-[11px]  font-[Archivo] ">
                      {item.venue}
                    </Text>
                    <Text className="font-[400] text-[10px]  font-[Archivo] leading-[10]">
                      {" "}
                      {item.time}
                    </Text>
                  </View>
                </View>
                <View className="h-[28px] w-[1px]  bg-[#CCCBCB] absolute left-0.5 top-5" />
              </>
            ))}
          </View>
        </View>

        {/* ######################################## */}
        <View className="w-[335px] h-[212px] mt-5 border-0.5 border-[#CCCBCB] rounded-lg p-[24px] ">
          <TouchableOpacity
            className="w-[286px] h-[45px]  mx-auto  rounded-lg flex-row justify-between"
            onPress={() => {
              openTripsSSheet();
            }}
          >
            <View className=" flex-row ">
              <View className="w-[85] h-[46]">
                <Image
                  source={require("../../../../assets/images/car1.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    // borderRadius: 100,
                  }}
                />
              </View>
              <View>
                <Text className="text-[12px]  font-[500] font-[Archivo] leading-[13px] my-2">
                  Toyota RAV - Yamaha
                </Text>
                <View className="h-[15px] w-[80px] bg-[#F2EFFE] items-center justify-center rounded-full ">
                  <Text className="  text-[10px]  text-[#7065A0] font-[500] font-[Archivo] leading-[10px]">
                    KR-SRUDBA
                  </Text>
                </View>
              </View>
            </View>
            {/* <View className=" w-[57px] h-[21px] bg-[#DAF4FF] items-center justify-center rounded-full">
              <Text className="text-[10px]  font-[500] font-[Archivo] leading-[10px] text-[#007FFF]">
                Active
              </Text>
            </View> */}
          </TouchableOpacity>
          <View className="h-0.5 bg-[#F1F0F0] mt-3" />
          <View className="w-[190px] mt-5">
            {pickUpAndDestination.map((item, index) => (
              <>
                <View key={index} className=" flex-row relative mb-6">
                  {item.icon}
                  <View className=" ml-1">
                    <Text className="font-[400] text-[11px]  font-[Archivo] ">
                      {item.venue}
                    </Text>
                    <Text className="font-[400] text-[10px]  font-[Archivo] leading-[10]">
                      {" "}
                      {item.time}
                    </Text>
                  </View>
                </View>
                <View className="h-[28px] w-[1px]  bg-[#CCCBCB] absolute left-0.5 top-5" />
              </>
            ))}
          </View>
        </View>
        {/* ######################################### */}
      </View>
      <CustomBottomSheet
        height={height}
        ref={TripsSheetRef}
        message={
          <HireBreakDownSheet
            pickUpAndDestination={pickUpAndDestination}
            closeSeeOrderSheet={closeTripsSSheet}
            tripInformation={tripInformation}
            setEndedTrips={setEndedTrips}
          />
        }
      />
    </>
  );
};

export default StoreComp;
