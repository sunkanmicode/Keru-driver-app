import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Octicons, Ionicons } from "@expo/vector-icons";
import CustomInput, { CustomButton } from "../../../customsComp/Input";

const UploadLicense = () => {
  const navigation = useNavigation();
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
              Upload License
            </Text>
          </View>
        </View>
        <View>
          <CustomInput
            whiteBg
            label="Drivers’ License"
            placeholder="Enter ID"
          />
          <View>
            <View className=" w-[335px] h-[148px] mt-6">
              <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
                Upload
              </Text>
              <View className=" w-[336px] h-[157px] border border-dashed border-[#87898E]">
                <TouchableOpacity className=" w-[135px] h-[105px] m-auto">
                  <View className=" w-[66px] h-[66px] bg-[#CCDDFF] m-auto rounded-full justify-center items-center">
                    <Ionicons
                      name="cloud-upload-outline"
                      size={24}
                      color="#3772FF"
                    />
                  </View>

                  <Text className="font-[400] text-[10px]  font-[Archivo] leading-[16] text-center">
                    Drop your file here to upload or select from storage{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20px]  self-center shadow-lg shadow-black/100">
        <CustomButton
          primary
          title="Continue"
          onPress={() => {
            navigation.navigate("CompleteyourProfile");
          }}
        />
      </View>
    </>
  );
};

export default UploadLicense;
