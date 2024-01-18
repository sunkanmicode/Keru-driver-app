import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

const AvailableVehiclesCategory = ({ VehiclesData }) => {
    const navigation = useNavigation()
  return (
    <View>
      <FlatList
        className=" mx-auto mt-3"
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={VehiclesData}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="w-[163px] h-[188px] px-[10px] py-[16px] border m-1 border-[#F1F0F0] rounded-2xl"
            onPress={() => {
              navigation.navigate("VehicleDetailsScreen");
            }}
          >
            <View className=" w-[143px] h-[71px]">
              <Image
                source={require("../../../../../assets/images/car1.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 100,
                }}
              />
            </View>
            <Text className="w-[133px] font-[500] text-[12px] font-[Archivo] leading-[13.06px] pt-4">
              Toyota RAV - Yamaha
            </Text>
            <View className="h-[15px] w-[80px] bg-[#F2EFFE] items-center justify-center rounded-full my-2">
              <Text className="  text-[10px]  text-[#7065A0] font-[500] font-[Archivo] leading-[10px]">
                KR-SRUDBA
              </Text>
            </View>
            <View className=" flex-row justify-around items-center py-3">
              <Text className="text-[10px] text-[#007FFF]  font-[500] font-[Archivo] leading-[10px]">
                6 Seats{" "}
              </Text>
              <View className=" h-3 w-0.5 bg-[#505050]" />
              <Text className="text-[10px]  font-[500] font-[Archivo] leading-[10px]">
                Sienna{" "}
              </Text>
              <View className=" h-3 w-0.5 bg-[#505050]" />
              <Text className="text-[10px]  font-[500] font-[Archivo] leading-[10px]">
                Ford
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AvailableVehiclesCategory