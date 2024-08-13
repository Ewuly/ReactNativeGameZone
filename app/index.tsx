import React, { useState, useEffect } from "react";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navigator from "./routes/homeStack";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const getFonts = () => Font.loadAsync({
  'outfit-regular': require('../assets/fonts/Outfit-Regular.ttf'),
  'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
});

export default function Index() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      await getFonts();
      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    };

    loadResources(); 
  }, []);

  return <Navigator/>
}
