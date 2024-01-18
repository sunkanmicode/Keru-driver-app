import { View, Text, Image } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const GetStartedScreen = () => {
     const navigation = useNavigation();
  return (
    <View className=" flex-1 bg-[#F5F5F5]">
      <View className="mt-[71px] justify-center items-center">
        <View>
          <View className="w-[290px] h-[330px] shrink-0  mt-10">
            <Image
              source={require("../../../../../assets/images/splash_three.png")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,
              }}
            />
          </View>
        </View>
        <View className="h-[300] mt-24 p-10 bg-white">
          <View className="w-[318px] mb-[22px] ">
            <Text className="text-[26px] font-[600] font-[Archivo] leading-[37px]">
              Welcome to Keru
            </Text>
          </View>

          <View className="w-[335px] h-[54px] ">
            <Text className=" text-[13px] font-[400] font-[Archivo] leading-[18px]">
              A marketplace that links the very best of the logistic industry’s
              Vehicles and equipment, experience, and people, all to serve the
              transportation needs in Nigeria.
            </Text>
          </View>
          <View className="mt-[40px]">
            <View className="flex-row">
              <TouchableOpacity className=" flex-1 h-[55px] rounded-full bg-[#BAAFE9] justify-center items-center bg-transparent border border-[#BAAFE9]" onPress={()=>{
                navigation.navigate("Register");
              }}>
                <Text className="text-[14px] font-[500] font-[Archivo] leading-[18px] text-[#BAAFE9]">
                  Get Started
                </Text>
              </TouchableOpacity>
              <View style={{ width: 50 }} />
              <TouchableOpacity
                className=" flex-1 h-[55px] rounded-full bg-[#BAAFE9] justify-center items-center"
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text className="text-[14px] font-[500] font-[Archivo] leading-[18px] text-white">
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default GetStartedScreen