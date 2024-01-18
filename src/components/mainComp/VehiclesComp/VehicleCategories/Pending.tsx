import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from 'react'

const Pending = () => {

const pendingData = [
  {
    image: require("../../../../../assets/images/car1.png"),
    title: "Toyota RAV - Yamaha",
    desc: "Toyota | Heavy Container | 10 tons",
    numData: "HTT6678",
  },
  {
    image: require("../../../../../assets/images/car1.png"),
    title: "Toyota RAV - Yamaha",
    desc: "Toyota | Heavy Container | 10 tons",
    numData: "HTT6678",
  },
  {
    image: require("../../../../../assets/images/car1.png"),
    title: "Toyota RAV - Yamaha",
    desc: "Toyota | Heavy Container | 10 tons",
    numData: "HTT6678",
  },
  {
    image: require("../../../../../assets/images/car1.png"),
    title: "Toyota RAV - Yamaha",
    desc: "Toyota | Heavy Container | 10 tons",
    numData: "HTT6678",
  },
  {
    image: require("../../../../../assets/images/car1.png"),
    title: "Toyota RAV - Yamaha",
    desc: "Toyota | Heavy Container | 10 tons",
    numData: "HTT6678",
  },
];


  return (
    <ScrollView>
      {pendingData.map((item) => (
        <>
          <TouchableOpacity className="w-[335px] h-[44px]  mx-auto mt-8 rounded-lg flex-row justify-between">
            <View className=" flex-row ">
              <View className="w-[85] h-[46]">
                <Image
                  source={item.image}
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
                <Text className="text-[10px]  font-[400] font-[Archivo] leading-[10px]">
                  Toyota | Heavy Container | 10 tons
                </Text>
              </View>
            </View>
            <View className="">
              <Text className="text-[10px]  font-[500] font-[Archivo] leading-[10px] text-[#007FFF]">
                HTT6678
              </Text>
            </View>
          </TouchableOpacity>
          <View className="h-0.5 bg-[#F1F0F0] mt-3" />
        </>
      ))}
    </ScrollView>
  );
  
}

export default Pending