import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { useStore } from '@hooks/useStore';
import * as SecureStore from 'expo-secure-store';

export default function useAuth() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const { authStore } = useStore();

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        const token = await SecureStore.getItemAsync('bubu-user-token');
        if (!token) return;
        authStore.setToken(token);
        await authStore.checkAuth();
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
