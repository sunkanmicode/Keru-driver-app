import { View, Text, TouchableOpacity ,Share, Alert  } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { CustomButton } from '../../../customsComp/Input';
import CustomBottomSheet from '../../../customsComp/BottomSheet';
import TransactionDisputeSheet from '../TransactionDisputeSheet';


const TransSummaryBottomSheet = ({ transCloseSheet }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log(Share.sharedAction);
        } else {
          // shared
          console.log('share')
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log("dismissed");
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

    const disputeSheetRef = React.useRef(null);

    const height = 775;

    const disputeCloseSheet = () => {
      if (disputeSheetRef.current) {
        disputeSheetRef.current.close();
      }
    };
    const disputeOpenSheet = () => {
      if (disputeSheetRef.current) {
        disputeSheetRef.current.open();
      }
    };

  return (
    <>
      <View className="flex-1 p-[20px]  bg-white">
        <View className=" flex-row justify-between">
          <Text className="text-[20px]   font-[500] font-[Archivo] leading-[21px]">
            Summary
          </Text>
          <TouchableOpacity
            onPress={() => {
              transCloseSheet();
            }}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <View className=" my-[27px]">
            <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
              Service Charge
            </Text>
            <View className=" flex-row items-center justify-between mt-2">
              <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
                Airtime 2 Cash
              </Text>
            </View>
            <View className=" h-0.5 bg-[#F5F5F5]" />
          </View>

          <View className=" mb-[27px]">
            <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
              Provider
            </Text>
            <View className=" flex-row items-center justify-between mt-2">
              <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
                MTN
              </Text>
            </View>
            <View className=" h-0.5 bg-[#F5F5F5]" />
          </View>

          <View className=" mb-[27px]">
            <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
              Unit to be sold
            </Text>
            <View className=" flex-row items-center justify-between mt-2">
              <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
                2000
              </Text>
            </View>
            <View className=" h-0.5 bg-[#F5F5F5]" />
          </View>

          <View className=" mb-[27px]">
            <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
              Phone Number Charged
            </Text>
            <View className=" flex-row items-center justify-between mt-2">
              <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
                09088661122
              </Text>
            </View>
            <View className=" h-0.5 bg-[#F5F5F5]" />
          </View>

          <View className=" mb-[27px]">
            <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
              Recipient Charged
            </Text>
            <View className=" flex-row items-center justify-between mt-2">
              <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
                09088661122
              </Text>
            </View>
            <View className=" h-0.5 bg-[#F5F5F5]" />
          </View>

          <View className=" mb-[27px]">
            <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
              Amount
            </Text>
            <View className=" flex-row items-center justify-between mt-2">
              <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
                N3000
              </Text>
            </View>
            <View className=" h-0.5 bg-[#F5F5F5]" />
          </View>
        </View>
      </View>
      <TouchableOpacity className=" my-5 self-center">
        <Text
          className="text-[14px] font-[600] font-[Archivo] leading-[15px]"
          onPress={() => {
            disputeOpenSheet();
          }}
        >
          Report a Dispute
        </Text>
      </TouchableOpacity>
      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center ">
        <CustomButton primary title="Share Details" onPress={onShare} />
      </View>
      <CustomBottomSheet
        height={height}
        ref={disputeSheetRef}
        message={
          <TransactionDisputeSheet disputeCloseSheet={disputeCloseSheet} />
        }
      />
    </>
  );
};

export default TransSummaryBottomSheet