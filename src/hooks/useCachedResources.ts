import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Fonts } from '@constants/Theme';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          bionabu: require('@assets/fonts/bionabu.ttf'),
          [Fonts.poppins.regular400]: require('@assets/fonts/Poppins/Poppins-Regular.ttf'),
          [Fonts.poppins.medium500]: require('@assets/fonts/Poppins/Poppins-Medium.ttf'),
          [Fonts.poppins.semiBold600]: require('@assets/fonts/Poppins/Poppins-SemiBold.ttf'),
          [Fonts.poppins.bold700]: require('@assets/fonts/Poppins/Poppins-Bold.ttf'),
          [Fonts.poppins.regularItalic400]: require('@assets/fonts/Poppins/Poppins-Italic.ttf'),
          [Fonts.poppins.mediumItalic500]: require('@assets/fonts/Poppins/Poppins-MediumItalic.ttf'),
          [Fonts.poppins.semiBoldItalic600]: require('@assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf'),
          [Fonts.poppins.boldItalic700]: require('@assets/fonts/Poppins/Poppins-BoldItalic.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
