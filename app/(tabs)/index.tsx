import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function HomeScreen() {
  const [text, setText] = useState("");

  return (
    // 모바일 화면 영역에 맞춰진 View tag
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>텍스트</Text>
      </View>
      <TextInput
        value={text}
        onChangeText={(value) => setText(value)}
        style={styles.input}
      />
      <Button title="버튼" onPress={() => console.log("press")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
  },
  text: { color: "red", fontSize: 30 },
  input: { fontSize: 30 },
});
