import { View, Text } from 'react-native'
import React from 'react'

const Label = ({ label }) => {
  return (
    <View className="">
      <Text className="text-[8px] text-[#15C847] font-[Archivo]  ">
        {label}
      </Text>
    </View>
  );
};

export default Label