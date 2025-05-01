
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/stackRoutes';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import "react-native-gesture-handler";
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/firebaseConnection';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { useEffect, useRef, useState } from 'react';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => {
      if (token) setExpoPushToken(token);
    });

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notificação recebida:', notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('Usuário tocou na notificação:', response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        signInAnonymously(auth)
          .then(() => console.log('Login anônimo realizado'))
          .catch((error) => console.error('Erro no login anônimo:', error));
      } else {
        console.log('Usuário autenticado:', user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: '#333'
    }}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

async function registerForPushNotificationsAsync() {
  if (!Device.isDevice) {
    alert('Notificações só funcionam em dispositivos físicos');
    return;
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    alert('Permissão para notificações não concedida');
    return;
  }

  const token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log('Token de push:', token);
  return token;
}
