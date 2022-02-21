import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from "./src/navigation/AuthStack";
import { StatusBar } from "react-native";


const App = () => {
	return (
    <NavigationContainer>
      <AuthStack />
      <StatusBar barStyle="light-content" backgroundColor={'#181926'} />
    </NavigationContainer>
  );
};
export default App;