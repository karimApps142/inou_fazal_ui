import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Login,
  Home,
  CreateSpot,
  EnrollGuards,
  CompanyGurads,
  Rounds,
  SpotName,
  LoginCheckPoints,
  RoundsCheckPoints,
  SpotNameCheckPoints,
  SubmitCheckPoints,
} from "../screens";

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Inou CheckPoints App Screens */}
      <Stack.Screen name="LoginCheckPoints" component={LoginCheckPoints} />
      <Stack.Screen name="RoundsCheckPoints" component={RoundsCheckPoints} />
      <Stack.Screen
        name="SpotNameCheckPoints"
        component={SpotNameCheckPoints}
      />
      <Stack.Screen name="SubmitCheckPoints" component={SubmitCheckPoints} />
      {/* Inou Admin App Screens */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateSpot" component={CreateSpot} />
      <Stack.Screen name="EnrollGuards" component={EnrollGuards} />
      <Stack.Screen name="CompanyGuards" component={CompanyGurads} />
      <Stack.Screen name="Rounds" component={Rounds} />
      <Stack.Screen name="SpotName" component={SpotName} />
    </Stack.Navigator>
  );
};
