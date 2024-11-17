import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import GeminiChat from "./GeminiChat";
import FlashMessage from "react-native-flash-message";

export default function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <View style={styles.container}>
      {showChat ? (
        <View style={styles.chatContainer}>
          <GeminiChat />
          <FlashMessage position={"top"} />
        </View>
      ) : (
        <View style={styles.blankScreen}></View>
      )}

      {!showChat && (
        <TouchableOpacity
          style={styles.chatButton}
          onPress={() => setShowChat(true)}
        >
          <Image
            source={require("./assets/icon.png")} // Adjust the path as needed
            style={styles.chatIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blankScreen: {
    flex: 1,
    backgroundColor: "#fff", // Blank white screen
  },
  chatContainer: {
    flex: 1,
  },
  chatButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#131314",
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  chatIcon: {
    height: 50,
    width: 50,
    resizeMode: "contain", // Ensures the image fits inside the button
  },
});
