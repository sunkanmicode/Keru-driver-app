import { View, Text } from 'react-native'
import React from 'react'
import RegisterComp from '../../../components/authComp/RegisterComp';
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from '@react-navigation/native';

type formData = {
  email: string;
  password: string;
  onPress: () => void;
};

const RegisterScreen = () => {
  const navigation = useNavigation()
   const [isSecureEntry, setIsSecureEntry] = React.useState(true);
     const { handleSubmit } = useForm<formData>();

     const onsubmit = React.useCallback((data: unknown) => {
         navigation.navigate("VerifyAccountScreen");

       console.log(data, "kkkkkk");
     },[])
  return (
    <RegisterComp
      isSecureEntry={isSecureEntry}
      setIsSecureEntry={setIsSecureEntry}
      // handleSubmit={handleSubmit(onSubmit, onError)}
      onsubmit={onsubmit}
    />
  );
}

export default RegisterScreen