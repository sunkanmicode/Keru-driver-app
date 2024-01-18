import { View, Text } from "react-native";
import React, { useState } from "react";
import CompleteyourProfileComp from "../../../components/mainComp/KYCComp/CompleteyourProfileComp";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type KycType = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  onPress: () => void;
}[];

const CompleteyourProfile = () => {
  const navigation = useNavigation();
  const [formStep, setFormStep] = React.useState(0);
  const [isComplete, SetIsComplete] = React.useState(false);

  const kycMenu: KycType = [
    {
      icon: <Octicons name="credit-card" size={24} color="#7065A0" />,
      title: "Add Personal Details",
      desc: "Add your BVN to create your wallet then you can send send and receive money",
      onPress: () => {
        // navigation.navigate("WalletComp");
      },
    },
    {
      icon: <Octicons name="credit-card" size={24} color="#7065A0" />,
      title: "Upload License",
      desc: "Add your BVN to create your wallet then you can send send and receive money",
      onPress: () => {
        // navigation.navigate("WalletComp");
      },
    },
    {
      icon: <Octicons name="credit-card" size={24} color="#7065A0" />,
      title: "Add Bank Details",
      desc: "Add your BVN to create your wallet then you can send send and receive money",
      onPress: () => {
        // navigation.navigate("WalletComp");
      },
    },
  ];
  return (
    <CompleteyourProfileComp
      kycMenu={kycMenu}
      SetIsComplete={SetIsComplete}
      isComplete={isComplete}
      formStep={formStep}
      setFormStep={setFormStep}
    />
  );
};

export default CompleteyourProfile;
