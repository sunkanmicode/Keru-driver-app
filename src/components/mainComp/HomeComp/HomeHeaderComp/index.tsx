import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeHeaderComp = () => {
  const navigation = useNavigation()
  return (
    <>
      <View className="py-10 px-6  bg-[#000]">
        <View className="flex-row mt-5 justify-between">
          <TouchableOpacity className="flex-row items-center" onPress={()=>{
            navigation.navigate("SettingsScreen")
          }}>
            <View className="bg-[#BAAFE9] w-[34] h-[34] rounded-full">
              <Image
                source={require("../../../../../assets/images/home-img.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 100,
                }}
              />
            </View>
            <View className="mx-2">
              <Text className="text-[12px] text-white font-[500] font-[Archivo] leading-[13px]">
                Welcome 
              </Text>
              <Text className="text-[10px] text-white font-[400] font-[Archivo] leading-[10px]">
                Jane
              </Text>
            </View>
          </TouchableOpacity>

          <View className=" flex-row">
            
            <TouchableOpacity onPress={()=>{
              navigation.navigate("NotificationComp");
            }}>
              <Ionicons name="notifications-outline" size={24} color="#ffff" />
            </TouchableOpacity>
          </View>
        </View>
      
      </View>
    </>
  );
};

export default HomeHeaderComp;
