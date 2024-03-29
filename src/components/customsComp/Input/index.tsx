import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardTypeOptions,
} from "react-native";


type InputType = {
  label?: string;
  name?: string;
  placeholder?: string;
  icon?: JSX.Element;
  iconPostion?: string;
  value?: string;
  onChangeText?: () => void;
  secureTextEntry?: boolean;
  keyboardType?: string;
  primary?: boolean;
  whiteBg?: boolean;
  width?: number;
  multiline?:boolean;
};

const CustomInput = ({
  label,
  icon,
  iconPostion,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
  keyboardType,
  primary,
  whiteBg,
  multiline,
}: // width,
InputType) => {
  const [focused, setFocused] = React.useState(false);
  // const width = 60

  const getFlexDirection = () => {
    if (!icon && !iconPostion) {
      return "flex-row";
    }
    if (icon && iconPostion) {
      if (iconPostion === "left") {
        return "flex-row";
      } else {
        if (iconPostion === "right") {
          return "flex-row-reverse";
        }
      }
    }
  };

  const getBgColor = () => {
    if (primary) return "bg-[#F5F5F5]";
    if (whiteBg) return "bg-[#Ffff] border border-[#D3D3D3]";
  };
  return (
    <>
      <View className="py-1">
        {label && (
          <Text className="mb-2 font-[400] text-[12px]  font-[Archivo] leading-[13]">
            {label}
          </Text>
        )}
        <View
          className={`h-[50] rounded-lg ${getBgColor()}  items-center px-3 ${getFlexDirection()}`}
        >
          <View>{icon && icon}</View>
          <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            keyboardType={keyboardType as KeyboardTypeOptions}
            onBlur={() => {
              setFocused(false);
            }}
            onFocus={() => {
              setFocused(true);
            }}
            onChangeText={onChangeText}
            value={value}
            // style={{ backgroundColor: "blue" }}
            className="flex-1 h-11 px-2 "
          />
        </View>
      </View>
      {/* {multiline && <Text>Hello</Text>} */}
    </>
  );
};

export default CustomInput;

type ButtonType = {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  primary?: boolean;
  danger?: boolean;
  whiteBg?: boolean;
  icon?: React.ReactNode;
  iconPostion?: string;
  onPress?: () => void;
  style?: any;
};
export const CustomButton = ({
  title,
  disabled,
  primary,
  danger,
  loading,
  whiteBg,
  onPress,
  icon,
  iconPostion,
  style,
}: ButtonType) => {
  const rowDirection = "flex-row justify-between items-center bg-red-400";
  const getFlexDirection = () => {
    if (!icon && !iconPostion) {
      return "flex-row";
    }
    if (icon && iconPostion) {
      if (iconPostion === "left") {
        return "flex-row";
      } else {
        if (iconPostion === "right") {
          return "flex-row-reverse";
        }
      }
    }
  };

  const getBgColor = () => {
    if (disabled) return "bg-slate-300";
    if (primary) return "bg-[#BAAFE9]";
    if (danger) return "bg-[#FD5042]";
    if (whiteBg) return "bg-white";
  };

  const disabledTextBtn = disabled ? "text-black" : "text-white";
  return (
    <TouchableOpacity
      className={`px-2 h-12  border border-gray-300 rounded-full items-center  mt-1 py-3 ${getBgColor()}`}
      disabled={disabled}
      onPress={onPress}
      style={style}
    >
      <View className={` flex-row `}>
        {/* <View>{icon && icon}</View> */}
        {title && (
          <>
            <Text
              className={`${disabledTextBtn} font-[Archivo] font-[500] text-[14px] leading-[15px]`}
            >
              {loading ? <ActivityIndicator /> : title}
            </Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};
