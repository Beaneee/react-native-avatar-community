import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    // 모바일 화면 영역에 맞춰진 View tag
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>텍스트</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
  },
  text: { color: "red", fontSize: 30 },
});
