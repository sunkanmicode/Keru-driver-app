import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Octicons } from "@expo/vector-icons";
import CustomInput, { CustomButton } from "../../../customsComp/Input";

const AddPersonalDetails = () => {
    const navigation = useNavigation()
  return (
    <>
      <View className="flex-1 bg-white p-6">
        <View className="py-6">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <View className="mt-5 mb-10">
            <Text className="font-[Archivo] font-[500] text-[20px] leading-[21px]">
              Add Personal Details
            </Text>
          </View>
        </View>
        <View>
          <CustomInput
            whiteBg
            label="Bank Verification Number"
            placeholder="Enter BVN"
          />
          <View>
            <View className=" w-[335px] h-[148px] mt-6">
              <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
                Address
              </Text>
              <View className="w-[335px] h-[127px] bg-[#Ffff] border border-[#D3D3D3] rounded-lg">
                <TextInput multiline className="  justify-start" />
              </View>
            </View>
          </View>
          <CustomInput
            whiteBg
            label="Next of Kin"
            placeholder="Enter Next of Kin"
          />
        </View>
      </View>
      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20px]  self-center shadow-lg shadow-black/100">
        <CustomButton
          primary
          title="Continue"
          onPress={() => {
          navigation.navigate("CompleteyourProfile")
          }}
        />
      </View>
    </>
  );
};

export default AddPersonalDetails;
