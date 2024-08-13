import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/about';
import Header from "../shared/header";
import React from "react";

const Screens = createNativeStackNavigator();

export default function AboutStack() {
    return (
      <Screens.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Screens.Screen 
          name="About" 
          component={About} 
          options={({ navigation }) => ({
            headerTitle: () => <Header navigation={navigation} />
          })}
        />
      </Screens.Navigator>
    );
  }