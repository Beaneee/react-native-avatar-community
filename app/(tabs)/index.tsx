import { SafeAreaView, Text } from "react-native";
import CustomButton from "@/components/CustomButton";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>홈스크린</Text>
      <CustomButton label="투표하기" onPress={() => console.log("눌렀어요")} />
    </SafeAreaView>
  );
}
