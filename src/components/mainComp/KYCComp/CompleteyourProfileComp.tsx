import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { KycIcon } from "../../../helper/CustomIcon/Icons";
import { CustomButton } from "../../customsComp/Input";

const CompleteyourProfileComp = ({
  kycMenu,
  isComplete,
  SetIsComplete,
  formStep,
  setFormStep,
}) => {
  const navigation = useNavigation();
  // console.log(formStep, "formStep");
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
              Complete your Profile
            </Text>
            <Text className="font-[Archivo] font-[400] text-[12px] leading-[13px]">
              Lets get your profile up by completing your KYC
            </Text>
          </View>
        </View>
        {kycMenu.map((item, index: number) => (
          <TouchableOpacity
            className=" w-[335px] h-[89px] rounded-[10px] mx-auto shadow shadow-black/5 border-[.05px] flex-row items-center my-2"
            key={index}
            onPress={() => {
              setFormStep(index);
            }}
          >
            <View className="w-[40px] h-[40px] p-[8px] bg-[#F2EFFE] rounded-full mx-4">
              {item.icon}
            </View>
            <View className=" flex-row">
              <View>
                <Text className="font-[Archivo] font-[600] text-[14px] leading-[15px] w-[158px]">
                  {item.title}
                </Text>
                <Text className="font-[Archivo] font-[300] text-[10px] leading-normal text-[#434343] w-[200px] mt-2">
                  {item.desc}
                </Text>
              </View>
              
                <View className="w-[43px] h-[18px] bg-[#01976B] items-center justify-center rounded-full">
                  <Text className="font-[Archivo] font-[600] text-[8px] leading-normal text-white">
                    Done
                  </Text>
                </View>
             
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20px]  self-center shadow-lg shadow-black/100">
        <CustomButton
          primary
          title="Continue"
          // onPress={() => {
          //   formStep === 0
          //     ? navigation.navigate("AddPersonalDetails")
          //     : formStep === 1
          //     ? navigation.navigate("UploadLicense")
          //     : formStep === 2
          //     ? navigation.navigate("AddBankDetails")
          //     : navigation.navigate("HomeScreen");
          // }}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
         
        />
      </View>
    </>
  );
};

export default CompleteyourProfileComp;
