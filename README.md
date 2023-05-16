# Chat App

This is a simple chat application built with React Native and Firebase. Users can send text messages and share images in real-time.

## Getting Started

Follow the instructions below to set up the development environment and configure the app.

### Prerequisites

- Node.js (https://nodejs.org)
- Expo CLI (https://docs.expo.dev/get-started/installation/)
- Firebase account (https://firebase.google.com/)

### Development Environment Setup

1. Clone the repository:

git clone https://github.com/your-username/chat-app.git


2. Install the dependencies:

cd chat-app
npm install


3. Start the Expo development server:

npm start


4. Follow the instructions from the Expo CLI to run the app on your desired platform (iOS simulator, Android emulator, or physical device).

### Database Configuration

1. Create a new project in the Firebase console (https://console.firebase.google.com/).

2. Enable the Firestore database in the Firebase console.

3. Obtain the Firebase configuration object for your project. It should look similar to this:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};

```

Open the App.js file in your project and replace the placeholder configuration with your Firebase configuration.

Save the changes and restart the app.

Necessary Libraries
The following libraries are used in this project:

- react-native
- react-navigation
- firebase
- react-native-gifted-chat
- @react-native-community/netinfo
- @react-native-async-storage/async-storage
- react-native-maps

You can install these libraries using the npm install command:
```
npm install react-navigation firebase react-native-gifted-chat @react-native-community/netinfo @react-native-async-storage/async-storage react-native-maps
```

Make sure to follow the specific installation instructions for each library if needed.

Features
- Real-time text messaging: Users can send and receive text messages in real-time.
- Image sharing: Users can share images from their device's gallery or take a photo using the camera and send them in the chat.
- Offline support: Messages are cached locally, allowing users to view their chat history even when offline.
- Background color customization: Users can choose a background color for their chat interface.
