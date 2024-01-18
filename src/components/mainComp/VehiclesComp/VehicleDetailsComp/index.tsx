import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import StarRating, { StarRatingDisplay } from "react-native-star-rating-widget";
import { styled } from "nativewind";
import { CustomButton } from "../../../customsComp/Input";
import CustomBottomSheet from "../../../customsComp/BottomSheet";
import DriveRequest from "./DriveRequest";

const VehicleDetailsComp = ({
  detailsData,
  driveRequestSheetRef,
  height,
  opendriveRequestSSheet,
}) => {
  const navigation = useNavigation();
  const [rating, setRating] = React.useState(0);
  return (
    <>
      <View className="flex-1 bg-white p-6">
        <View className="py-6 mb-10 flex-row items-center">
          <TouchableOpacity
            className="mr-4"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px]">
            Details
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            className="w-[335px] h-[630px] self-center border-[.05px] px-4"
            style={{
              shadowColor: "rgba(0, 0, 0, 0.05)",
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 10,
              elevation: 1,
              // borderColor: "#F1F0F0",
              // borderWidth: 1,
              // border: 1px solid #F1F0F0
              borderRadius: 10,
            }}
          >
            <View className=" w-[311px] h-[129px] mt-3">
              <Image
                source={require("../../../../../assets/images/car2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  //   borderRadius: 100,
                }}
              />
            </View>
            <Text className="text-[15px] font-[500] font-[Archivo] leading-[16px] my-4">
              Toyota RAV - Yamaha
            </Text>
            <Text className="text-[12px] font-[700] font-[Archivo] leading-[13px] py-5">
              Capacity Information
            </Text>
            <View className="h-[360px] border-dashed border-[.5px] p-5">
              {detailsData.map((d) => (
                <>
                  <View className="flex-row justify-between" key={d.name}>
                    <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px]">
                      {d.name}
                    </Text>
                    {d.name === "Asset Code" ? (
                      <Text className="w-[85px] text-[10px] rounded-full text-[#7065A0] p-[8]  bg-[#F2EFFE] font-[500] font-[Archivo] leading-[10px]">
                        {d.Desc}
                      </Text>
                    ) : (
                      <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px]">
                        {d.Desc}
                      </Text>
                    )}
                  </View>
                  <View className="h-0.5 bg-[#F1F0F0]  my-4" />
                </>
              ))}
            </View>
          </View>
          <View className="px-4 mb-10">
            <Text className="text-[12px] font-[700] font-[Archivo] leading-[13px] py-5">
              Review
            </Text>
            <View className="h-[100] bg-[#E8E8E8] py-3 px-4 rounded-lg">
              <View className=" flex-row justify-between">
                <View className=" flex-row justify-between items-center">
                  <View className=" w-[40px] h-[40px] bg-[#BAAFE9] rounded-full ">
                    {/* <Image
                source={require("../../../../../assets/images/car2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  //   borderRadius: 100,
                }}
              /> */}
                  </View>
                  <View className="mx-3">
                    <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px] my-1">
                      AdeKunle John
                    </Text>
                    <Text className="text-[10px] font-[500] font-[Archivo] leading-[10px]">
                      16th June 2023
                    </Text>
                  </View>
                </View>
                <View>
                  <StarRatingDisplay
                    starSize={15}
                    rating={rating}
                    color="#BAAFE9"
                    // onChange={setRating}
                    starStyle={{ width: 5 }}
                  />
                </View>
              </View>
              <Text className="mx-5 my-2 text-[10px] font-[500] font-[Archivo] leading-[10px]">
                Helooooooo
              </Text>
            </View>
          </View>
          <CustomButton
            primary
            title="Request to Drive"
            onPress={() => {
              opendriveRequestSSheet()
            }}
          />
        </ScrollView>
      </View>
      <CustomBottomSheet ref={driveRequestSheetRef} message={<DriveRequest />} height={height} />
    </>
  );
};

export default VehicleDetailsComp;
