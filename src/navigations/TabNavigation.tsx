import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackParamList } from "./navigationTypes";
import HomeStackNavigation from "./RootNavigations/HomeStackNavigation";
import VehicleStackNavigation from "./RootNavigations/VehiclesStackNavigation";
import StoreStackNavigation from "./RootNavigations/StoreStackNavigation";
import BillsStackNavigation from "./RootNavigations/BillsStackNavigation";
import TransactionsStackNav from "./RootNavigations/TransactionsStackNav";
import { tabData } from "./tabData";
import TabIcon from "../helper/CustomIcon";
import { getTabBarVisibility } from "./TabBarVisibility";
import Label from "../helper/CustomIcon/NavLabel";

const Tab = createBottomTabNavigator<HomeStackParamList>();

const getTabInfo = (routeName) => tabData.find((tab) => tab.name === routeName);



const TabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeStackNavigation"
        screenOptions={({ route }) => {
          const tabInfo = getTabInfo(route.name);

          return {
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              if (tabInfo) {
                const icon = focused
                  ? tabInfo.icon.active
                  : tabInfo.icon.inactive;
                const type = focused
                  ? tabInfo.type.active
                  : tabInfo.type.inactive;
                return <TabIcon name={icon} type={type} />;
              }
              return null;
            },

            tabBarStyle: { display: getTabBarVisibility(route) },
            tabBarActiveTintColor: "#BAAFE9",
          };
        }}
      >
        <Tab.Screen
          name="HomeStackNavigation"
          component={HomeStackNavigation}
          options={({ route }) => ({
            tabBarLabel: "Home",
          })}
        />

        <Tab.Screen
          name="VehicleStackNavigation"
          component={VehicleStackNavigation}
          options={({ route }) => ({
            tabBarLabel: "Applications",
          })}
        />
        <Tab.Screen
          name="StoreStackNavigation"
          component={StoreStackNavigation}
          options={({ route }) => ({
            tabBarLabel: "Trips",
          })}
        />
        <Tab.Screen
          name="BillsStackNavigation"
          component={BillsStackNavigation}
          options={({ route }) => ({
            tabBarLabel: "Bills",
          })}
        />
        <Tab.Screen
          name="TransactionsStackNav"
          component={TransactionsStackNav}
          options={({ route }) => ({
            tabBarLabel: "Transactions",
          })}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
