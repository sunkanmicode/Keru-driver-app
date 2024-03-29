import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/AuthScreens/LoginScreen";
import RegisterScreen from "../screens/AuthScreens/RegisterScreen";
import OnboardingScreen from "../screens/AuthScreens/OnboardingScreen";
import ForgotPasswordScreen from "../components/authComp/RegisterComp/ForgotPasswordScreen";
import VerifyAccountScreen from "../components/authComp/RegisterComp/VerifyAccountScreen";
import { AuthStackParamList } from "./navigationTypes";
import AccountCreatedScreen from "../screens/AuthScreens/AccountCreatedScreen";
import GetStartedScreen from "../screens/AuthScreens/OnboardingScreen/GetStartedScreen";
import SelectvehicleType from "../components/authComp/RegisterComp/SelectVehicleTypeComp";
import TransactionPinScreen from "../components/authComp/RegisterComp/TransactionPIn";
import ReEnterPIN from "../components/authComp/RegisterComp/TransactionPIn/ReEnterPIN";
// import ResetPasswordScreen from "../screens/AuthScreens/ResetPaswwordScreen";
// import { AuthStackParamList } from "../types/navigations";



const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigation = ()=>{

    return (
      <AuthStack.Navigator screenOptions={{ header: () => null }}>
        <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AuthStack.Screen
          name="GetStartedScreen"
          component={GetStartedScreen}
        />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen
          name="VerifyAccountScreen"
          component={VerifyAccountScreen}
        />
        <AuthStack.Screen
          name="AccountCreatedScreen"
          component={AccountCreatedScreen}
        />
        <AuthStack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
        />
        <AuthStack.Screen
          name="SelectvehicleType"
          component={SelectvehicleType}
        />
        <AuthStack.Screen
          name="TransactionPinScreen"
          component={TransactionPinScreen}
        />
        <AuthStack.Screen name="ReEnterPIN" component={ReEnterPIN} />
      </AuthStack.Navigator>
    );

}

export default AuthNavigation;