import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app"; // Import initializeApp directly
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";
import firebase from "firebase/app";
import { getStorage } from "firebase/storage";
import { useNetInfo } from "@react-native-community/netinfo";
import { Alert } from "react-native";

import Welcome from "./components/Welcome";

import Chat from "./components/Chat";

const Stack = createNativeStackNavigator();

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCoWsM9B5vpjjFeunZ7e7MiYeMK7hZN8Bs",
    authDomain: "chat-app-bb69d.firebaseapp.com",
    projectId: "chat-app-bb69d",
    storageBucket: "chat-app-bb69d.appspot.com",
    messagingSenderId: "529781458936",
    appId: "1:529781458936:web:146319e382ca1f0539780d",
    measurementId: "G-V9WXGHGC3F",
  };
  const connectionStatus = useNetInfo();

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  const storage = getStorage(app);

  useEffect(() => {
    // Monitor network connection status
    if (connectionStatus.isConnected === false) {
      // Disable network access if connection is lost
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      // Enable network access if connection is restored
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Chat">
          {(props) => (
            // Pass necessary props to the Chat component
            <Chat
              db={db}
              storage={storage}
              isConnected={connectionStatus.isConnected}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
