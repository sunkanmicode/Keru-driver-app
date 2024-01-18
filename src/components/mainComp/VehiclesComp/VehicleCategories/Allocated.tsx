import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { CustomButton } from "../../../customsComp/Input";

const Allocated = () => {
  const pendingData = [
    {
      image: require("../../../../../assets/images/car1.png"),
      title: "Toyota RAV - Yamaha",
      typeID: "KR-SRUDBA",
      status: "ACTIVE",
    },
    {
      image: require("../../../../../assets/images/car1.png"),
      title: "Toyota RAV - Yamaha",
      typeID: "KR-SRUDBA",
      status: "ACTIVE",
    },
    {
      image: require("../../../../../assets/images/car1.png"),
      title: "Toyota RAV - Yamaha",
      typeID: "KR-SRUDBA",
      status: "ENDED",
    },
    {
      image: require("../../../../../assets/images/car1.png"),
      title: "Toyota RAV - Yamaha",
      typeID: "KR-SRUDBA",
      status: "ACTIVE",
    },
    {
      image: require("../../../../../assets/images/car1.png"),
      title: "Toyota RAV - Yamaha",
      typeID: "KR-SRUDBA",
      status: "ENDED",
    },
  ];

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        {pendingData.map((item, index) => (
          <>
            <TouchableOpacity
              className="w-[335px] h-[44px]  mx-auto mt-8 rounded-lg flex-row justify-between"
              key={index}
            >
              <View className=" flex-row">
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
                    {item.title}
                  </Text>
                  <View className="h-[15px] w-[80px] bg-[#F2EFFE] items-center justify-center rounded-full ">
                    <Text className="  text-[10px]  text-[#7065A0] font-[500] font-[Archivo] leading-[10px]">
                      {item.typeID}
                    </Text>
                  </View>
                </View>
              </View>

              <View className="">
                <Text className="text-[10px]  font-[500] font-[Archivo] leading-[10px] text-[#007FFF]">
                  {item.status}
                </Text>
              </View>
            </TouchableOpacity>
            {item.status === "ACTIVE" && (
              <TouchableOpacity className=" w-[335px] h-[35px] px-[20px] py-[10px] bg-[#FF776C] rounded-full items-center justify-center mt-5">
                <Text className="text-[12px] font-[500] font-[Archivo] leading-normal text-white">
                  Terminate
                </Text>
              </TouchableOpacity>
            )}
            {item.status === "ENDED" && (
              <TouchableOpacity className=" w-[335px]   rounded-full items-center justify-center mt-5" />
            )}
            <View className="h-0.5 bg-[#F1F0F0] mt-3" />
          </>
        ))}
      </ScrollView>
    </>
  );
};

export default Allocated;
