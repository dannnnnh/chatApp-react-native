import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  backgroundImage,
  ImageBackground,
} from "react-native";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  return (
    <ImageBackground
      source={require("../assets/BackgroundImage.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Chatable</Text>
        <View style={styles.secondaryContainer}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Yourname"
          />

          <Text>Choose your Background Color</Text>

          <View style={styles.circleContainer}>
            <TouchableOpacity
              style={[styles.radioButton, { backgroundColor: "#0A0B08" }]}
              onPress={() => setColor("#0A0B08")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioButton, { backgroundColor: "#464055" }]}
              onPress={() => setColor("#464055")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioButton, { backgroundColor: "#8C95A4" }]}
              onPress={() => setColor("#8C95A4")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioButton, { backgroundColor: "#BCC6B0" }]}
              onPress={() => setColor("#BCC6B0")}
            ></TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Chat", { name: name, color: color })
            }
          >
            <Text style={styles.buttonText}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  secondaryContainer: {
    backgroundColor: "white",
    width: "100%",
    padding: 30,
    borderRadius: 2,
    alignItems: "center",
  },
  textInput: {
    width: 300,
    padding: 16,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },
  headerText: {
    fontSize: 38,
    marginBottom: 200,
    color: "#FFFFFF",
  },
  button: {
    width: 300,
    backgroundColor: "#7F7B8D",
    padding: 15,
    borderWidth: 0,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  circleContainer: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 30,
  },
  radioButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 5,
  },
});

export default Start;
