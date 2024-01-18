import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AvailableVehicles = () => {
    const navigation = useNavigation()

    const VehiclesData = [
      {
        name: "Toyota RAV- Yamaha",
        image: require("../../../../../assets/images/car1.png"),

        features: [
          {
            title: " 6 seats",
          },
          {
            title: " Sienna",
          },
          {
            title: " ford",
          },
        ],
      },
      {
        name: "Toyota RAV- Yamaha",
        image: require("../../../../../assets/images/car1.png"),

        features: [
          {
            title: " 4 seats",
          },
          {
            title: " Sienna",
          },
          {
            title: " ford",
          },
        ],
      },
      {
        name: "Toyota RAV- Yamaha",
        image: require("../../../../../assets/images/car1.png"),

        features: [
          {
            title: "  8 seats",
          },
          {
            title: " Sienna",
          },
          {
            title: " ford",
          },
        ],
      },
      {
        name: "Toyota RAV- Yamaha",
        image: require("../../../../../assets/images/car1.png"),

        features: [
          {
            title: " 6 seats",
          },
          {
            title: " Sienna",
          },
          {
            title: " ford",
          },
        ],
      },
    ];
  return (
    <View>
      <FlatList
        className=" mt-1"
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={VehiclesData}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="w-[163px] h-[188px] px-[10px] py-[16px] border m-1 border-[#F1F0F0] rounded-2xl"
            onPress={() => {
              navigation.navigate("VehicleStackNavigation",{screen:"VehicleDetailsScreen"});
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
}

export default AvailableVehicles