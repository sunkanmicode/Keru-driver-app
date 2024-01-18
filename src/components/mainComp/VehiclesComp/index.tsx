import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Shadow } from "react-native-shadow-2";
import AvailableVehiclesCategory from "./VehicleCategories/AvailableVehicles";
import Pending from "./VehicleCategories/Pending";
import Approved from "./VehicleCategories/Approved";
import Allocated from "./VehicleCategories/Allocated";

const VehiclesComp = ({
  VehiclesData,
  vehicleCategories,
  categoriesIndex,
  setCategoriesIndex,
}) => {
  const navigation = useNavigation();
  return (
    <View className=" flex-1 py-10 px-6 bg-white">
      <View className="flex-row items-center pt-2 justify-between">
        <Text className="text-[28px] text-[#000]  font-[600] font-[Archivo] leading-[30.46px]">
          Applications
        </Text>
        <TouchableOpacity>
          {/* <AntDesign name="filter" size={24} color="black" /> */}
        </TouchableOpacity>
      </View>
      <View className="mt-5">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={vehicleCategories}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              className={`h-[40px] rounded-full bg-transparent justify-center items-center py-[10px] px-[20px] ${
                categoriesIndex == index && "bg-[#BAAFE9]"
              }`}
              onPress={() => {
                setCategoriesIndex(index), item.onPress();
              }}
            >
              <Text
                className={`text-[14px] font-[500] font-[Archivo] leading-[18px] text-[#909090] ${
                  categoriesIndex == index && "text-white"
                }`}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {categoriesIndex === 0 && (
        <AvailableVehiclesCategory VehiclesData={VehiclesData} />
      )}
      {categoriesIndex === 1 && <Pending />}
      {categoriesIndex === 2 && <Approved />}
      {categoriesIndex === 3 && <Allocated />}
    </View>
  );
};

export default VehiclesComp;
