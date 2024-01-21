import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import {
  SelectList,
  MultipleSelectList,
} from "react-native-dropdown-select-list";
import CustomDropdown from "../../../customsComp/CustomDropdown";
import { CustomButton } from "../../../customsComp/Input";


const SelectvehicleType = () => {
    const navigation= useNavigation()
    const [selected, setSelected] = React.useState("");


    const data = [
      { key: "Car", value: "Car" },
      { key: "Bus", value: "Bus" },
      { key: "Trailer", value: "Trailer" },
      { key: "Lorry", value: "Lorry" },
      { key: "Motorcycle", value: "Motorcycle" },
      { key: "Tricylce", value: "Tricylce" },
    ];
  return (
    <>
      <View className="flex-[.95] bg-white p-6">
        <View className="py-6">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <View className="mt-5 mb-10">
            <Text className="font-[Archivo] font-[700] text-[29px] leading-[37px]">
              Select vehicle type
            </Text>
            <Text className="font-[Archivo] font-[400] text-[12px] leading-[23px]">
              You are to select the type of vehicle you drive
            </Text>
          </View>
        </View>
        <CustomDropdown setSelected={setSelected} data={data} />
      </View>
      <View>
        <CustomButton
          primary
          title="Continue34"
          onPress={() => {
            navigation.navigate("AccountCreatedScreen");
          }}
        />
      </View>
    </>
  );
}

export default SelectvehicleType