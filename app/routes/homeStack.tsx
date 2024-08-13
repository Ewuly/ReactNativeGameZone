import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
import React from "react";

const Screens = createNativeStackNavigator();

export default function HomeStack() {
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
          name="Home" 
          component={Home} 
          options={({ navigation }) => ({
            headerTitle: () => <Header navigation={navigation} title="GameZone"/>
          })}
        />
        <Screens.Screen 
          name="ReviewDetails" 
          component={ReviewDetails} 
          options={{
            title: 'Review Details',
          }}
        />
      </Screens.Navigator>
    );
  }