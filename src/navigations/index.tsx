import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation";
import useAuthStore from "../stores/authStore";
import TabNavigation from "./TabNavigation";

const AppNavigation = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);

  React.useEffect(() => {
    setIsAuthenticated(isLoggedIn);
  }, [isLoggedIn]);
  return (
    <NavigationContainer>
      {isAuthenticated ? <TabNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
