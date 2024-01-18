import React from "react";
import { View, ScrollView, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { VehicleIcon } from "../../../helper/Icons";
import { Feather } from "@expo/vector-icons";
import HomeHeaderComp from "./HomeHeaderComp";
import QuickLink from "./QuickLink";
import CustomBottomSheet from "../../customsComp/BottomSheet";
import HomeBottomSheet from "./HomeBottomSheet";
import { useNavigation } from "@react-navigation/native";
import AvailableVehicles from "./AvailableVehicles";

const HomeComp = ({ quicklinkData, sheetRef, openSheet, height }) => {
  const navigation =useNavigation()
  return (
    <>
      <View className="flex-1 bg-black">
        <HomeHeaderComp />
        <ScrollView className="bg-white rounded-t-2xl p-6">
          <View className="flex-row p-4 mb-10 justify-between items-center h-[113px] bg-[#007FFF] rounded-lg">
            <View>
              <View className="w-[120px] h-[44px]">
                <Text className="font-[SwitzerRegular] text-[17px] text-white font-[600] leading-normal">
                  Hire a vehicle as a driver now
                </Text>
              </View>
              <View className="w-[120px] h-[26px]">
                <Text className="font-[SwitzerRegular] text-[10px] text-white font-[400] leading-[13]">
                  Move your goods easily like never before
                </Text>
              </View>
            </View>
            <View className="w-[158] h-[115]">
              <Image
                source={require("../../../../assets/images/red-truck.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  // borderRadius: 100,
                }}
              />
            </View>
          </View>

          <View className=" flex-row items-center justify-between">
            <Text>Available Vehicles</Text>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("VehicleStackNavigation",{screen:"VehiclesScreen"})
            }}>
              <Text>See more</Text>
            </TouchableOpacity>
          </View>
          <View>
            <AvailableVehicles />
          </View>
     
          {/* #################################### */}

          <View className="my-2 p-2">
            <View className=" flex-row items-center justify-between">
              <Text className="font-[SwitzerRegular] text-[12px] font-[500] leading-[15]">
                Quick Links
              </Text>
              <TouchableOpacity>
                <Text className="font-[SwitzerRegular] text-[12px] font-[500] text-[#007FFF] leading-[15]">
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
            <View className="h-0.5 bg-[#F1F0F0] mt-4 mb-7" />
            <QuickLink quicklinkData={quicklinkData} />
          </View>
        </ScrollView>
      </View>
      {/* <CustomBottomSheet
        ref={sheetRef}
        height={height}
        message={<HomeBottomSheet />}
      /> */}
    </>
  );
};

export default HomeComp;
