import React, { useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNetInfo } from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "./components/Start";
import Chat from "./components/Chat";
import "react-native-gesture-handler";
import firebase from "firebase";
require("firebase/firestore");

// Create navigation stack

const firebaseConfig = {
  apiKey: "AIzaSyCoWsM9B5vpjjFeunZ7e7MiYeMK7hZN8Bs",
  authDomain: "chat-app-bb69d.firebaseapp.com",
  projectId: "chat-app-bb69d",
  storageBucket: "chat-app-bb69d.appspot.com",
  messagingSenderId: "529781458936",
  appId: "1:529781458936:web:146319e382ca1f0539780d",
  measurementId: "G-V9WXGHGC3F",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const Stack = createNativeStackNavigator();

const App = () => {
  const db = firebase.firestore();
  const connectionStatus = useNetInfo();

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      db.disableNetwork();
    } else if (connectionStatus.isConnected === true) {
      db.enableNetwork();
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }} // Hide header
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          //Title of header
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
