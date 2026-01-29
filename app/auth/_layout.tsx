import React from "react"; // React import 추가
import { router, Stack } from "expo-router";
import CustomPressable from "@/components/CustomPressable";
import { Foundation } from "@expo/vector-icons";
import { colors } from "@/constants";

export default function AuthLayout() {
  return (
    <Stack
      screenOptiops={{
        headerTintColor: colors.BLACK,
        contentStyle: { backgroundColor: colors.WHITE },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "로그인",
          headerShown: true,
          headerLeft: () => (
            <CustomPressable
              onPress={() => router.replace("/")}
              style={{ paddingRight: 5 }}
            >
              <Foundation name="home" size={28} color={"black"} />
            </CustomPressable>
          ),
        }}
      />
    </Stack>
  );
}
